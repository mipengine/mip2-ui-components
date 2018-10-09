const legacyFs = require('fs')
const path = require('path')

const readdir = require('recursive-readdir-sync')
const merge = require('lodash/merge')

require('../dist/vuetify')

const fs = legacyFs.promises

const docPaths = readdir(path.resolve(__dirname, '..', 'lang')).sort()

const capitalize = name => `${name[0].toUpperCase()}${name.slice(1)}`

const camelToDash = camel => capitalize(camel)
  .match(/[A-Z][^A-Z]*/g)
  .map(word => word.toLowerCase()).join('-')

const getName = (tagName) => tagName.startsWith('v-')
  ? capitalize(tagName.split('-')[1])
  : tagName.split('-').map(capitalize).join('')

const getMIPTagName = tagName =>
  tagName.startsWith('v-') && getDocType(getName(tagName)) === 'components' ? `mip-${tagName}` : tagName

const replaceMIPTagName = async (text) => text.replace(/v-model/g, '.sync')
  .replace(/`(v-[a-z-]+)`/g, (match, tagName) => `\`${getMIPTagName(tagName)}\``)

const getDocPath = (name, lang = 'en') => {
  const getDocName = name => ({
    Btn: 'Buttons',
    Checkbox: 'Selection',
    Radio: 'Selection',
    Switch: 'Selection',
    Select: 'Selects',
    Grid: 'Grid'
  })[name] || name

  const docPath = docPaths.find(filename =>
    filename.includes(getDocName(name)) && filename.includes(`${path.sep}${lang}${path.sep}`)
  )

  return docPath
}

const getDocType = (name) => {
  const docPath = getDocPath(name)

  return docPath.split(path.sep).slice(-2)[0]
}

const getOfficialDoc = async (name) => {
  const getDocByLang = (lang) => {
    const docPath = getDocPath(name, lang)

    if (typeof docPath === 'undefined') {
      return null
    }
    return require(docPath)
  }

  return merge({}, getDocByLang('en'), getDocByLang('zhHans'))
}

const formatAttributes = (html) => html.replace(
  /([^\S\n]*)<([a-z-]+)([^>]*)>/g,
  (match, spacing, tagName, attributes) => {
    const formattedAttributes = attributes.replace(
      /\s+[a-z-:.]+(?:="[^"]+")?/g,
      attribute => `${spacing}  ${attribute.trim()}\n`
    )
    return formattedAttributes.split('\n').length > 2
      ? `${spacing}<${tagName}\n${formattedAttributes}${spacing}>`
      : match
  }
)

const formatTextContent = (html) => {
  const formattedHtml = html.replace(
    /\n([^\S\n]*)((?:<\/[a-z-]+)?>)([^\n<]+)(\n|<)/g,
    (match, spacing, head, content, tail) => content.length
      ? `\n${spacing}${head}\n${spacing}${head === '>' ? '  ' : ''}${content}\n${tail === '\n' ? '' : spacing + tail}`
      : match
  )

  if (formattedHtml === html) {
    return formattedHtml
  }

  return formatTextContent(formattedHtml)
}

const formatHtml = (html, data = {}) => {
  const lines = html.split('\n')
  const indent = lines[lines.length - 1].match(/\s*/)[0].length
  const alignedHtml = [lines[0], ...lines.slice(1).map(line => line.slice(indent))].join('\n')

  const formattedHtml = formatTextContent(formatAttributes(alignedHtml))

  const dataHtml = JSON.stringify(
    data,
    (key, val) => val !== data[key] || Number.isInteger(+key) || html.search(new RegExp(`m-bind:[^=]+="[^"]*${key}[^"]*"`)) !== -1
      ? val
      : undefined,
    2
  )
    .split('\n')
    .join('\n    ')

  return (
    dataHtml === '{}' || dataHtml === 'null'
      ? ''
      : '<mip-data>\n  <script type="application/json">\n    ' +
        dataHtml +
        '\n  </script>\n</mip-data>\n'
  ) +
  formattedHtml +
  (
    html.includes('<mip-script>')
      ? '\n<script src="https://c.mipcdn.com/static/v2/mip-script/mip-script.js"></script>'
      : ''
  )
}

const parseExamples = async (tagName) => {
  const cheerio = require('cheerio')

  const html = await fs.readFile(path.resolve(__dirname, '../dev', `${tagName}.html`), 'utf8')
  const $ = cheerio.load(html, {
    decodeEntities: false
  })
  const data = JSON.parse($('mip-data > script[type="application/json"]').html()) || {}
  const examples = $('h2').nextUntil('script[src="http://bos.nj.bpc.baidu.com/assets/mip/projects/vuetify/mip.js"]').toArray()
    .reduce((examples, node) => {
      const current = examples[examples.length - 1]

      if (node.tagName === 'h2') {
        return examples.concat({
          title: $(node).text(),
          descriptions: [],
          html: ''
        })
      }

      if (node.tagName === 'p') {
        return examples.slice(0, -1).concat({
          ...current,
          descriptions: [...current.descriptions, $(node).html()]
        })
      }

      const html = formatHtml($('<div></div>').append(node).html(), data)

      return examples.slice(0, -1).concat({
        ...current,
        html: current.html + (current.html ? '\n' : '') + html
      })
    }, [{
      title: '',
      descriptions: [],
      html: ''
    }])

  return examples
}

const ensureDir = async (dir) => {
  try {
    await fs.access(dir)
  } catch (err) {
    await fs.mkdir(dir)
  }
}

const ensureDocDir = (docType, mipTagName) =>
  ensureDir(path.resolve(__dirname, '..', 'docs', docType, mipTagName))

const createDocPrinter = async (docType, mipTagName) => {
  const docPath = path.resolve(__dirname, docType, mipTagName, 'README.md')

  try {
    await fs.writeFile(docPath, '')
  } catch (err) {}

  return {
    print: content => legacyFs.appendFileSync(docPath, content + '\n'),
    println: content => legacyFs.appendFileSync(docPath, content + '\n\n')
  }
}

const getHtmlBlock = html => '```html\n' + html + '\n```'

const getPropType = (definition) => {
  if (typeof definition === 'function') {
    return definition.name.toLowerCase() || 'any'
  }

  if (Array.isArray(definition)) {
    return definition.map(getPropType).join(' / ')
  }

  if (typeof definition === 'object' && definition !== null) {
    return getPropType(definition.type)
  }

  return 'any'
}

const getDefaultValue = (definition) => {
  if (typeof definition !== 'object' || definition === null) {
    return '/'
  }

  if (typeof definition.default === 'function') {
    return JSON.stringify(definition.default())
  }

  if (typeof definition.default === 'string') {
    return `'${definition.default}'`
  }

  return definition.default || '/'
}

const getDescription = async (descriptor, prop) => {
  if (!descriptor || typeof descriptor !== 'object') {
    return ''
  }
  const keys = Object.keys(descriptor)

  for (const key of keys) {
    if (key.startsWith('v-') && typeof descriptor[key] === 'object') {
      Object.assign(descriptor, descriptor[key])
    }
  }

  const description = descriptor[prop] || ''
  const paths = description.split('.')

  if (['Components', 'Mixins'].some(type => description.startsWith(type))) {
    return (await getOfficialDoc(paths[1])).props[paths[3]]
  }

  return description
}

const getMergedInfo = async (definition = {}) => {
  const { name, props, mixins = [] } = definition

  if (!name) {
    return {}
  }

  const tagName = camelToDash(name)

  const doc = await getOfficialDoc(getName(tagName))

  const { mergedProps: extendsProps, mergedDoc: extendsDoc } = await getMergedInfo(definition.extends)
  const { mergedProps: mixinsProps, mergedDoc: mixinsDoc } = merge({}, ...(await Promise.all(mixins.map(getMergedInfo))))

  const mergedProps = merge({}, extendsProps, mixinsProps, props)
  const mergedDoc = merge({}, extendsDoc, mixinsDoc, doc)

  return { mergedProps, mergedDoc }
}

const generateDoc = async (tagName) => {
  const name = getName(tagName)
  const components = Object.values(global.components)
    .filter(({name: componentName = ''}) => componentName.startsWith(`V${name}`))

  const [doc, examples, docType] = await Promise.all([
    getOfficialDoc(name),
    parseExamples(tagName),
    getDocType(name)
  ])

  const mipTagName = getMIPTagName(tagName)

  await ensureDocDir(docType, mipTagName)

  const { print, println } = await createDocPrinter(docType, mipTagName)

  println(`# ${mipTagName}`)

  println(await replaceMIPTagName(doc.headerText, docType))

  println('## 用例')

  examples[0].descriptions.length && println(examples[0].descriptions.join('\n'))

  println(getHtmlBlock(examples[0].html))

  if (components.length) {
    println('## API')
  }

  for (const component of components) {
    const { name } = component
    const { mergedProps, mergedDoc } = await getMergedInfo(component)
    const mergedPropsDoc = merge({}, await getOfficialDoc('Props'), mergedDoc.props)

    println(`### ${getMIPTagName(camelToDash(name))}`)

    println('#### Props')

    print('名称|类型|默认值|含义')
    print(':--:|:--:|:--:|:---')

    println(
      (await Promise.all(Object.entries(mergedProps)
        .sort(([a], [b]) => a < b ? -1 : 1)
        .map(async ([prop, definition]) =>
          [
            camelToDash(prop),
            getPropType(definition),
            getDefaultValue(definition),
            await replaceMIPTagName(await getDescription(mergedPropsDoc, prop), docType)
          ].join('|')
        ))
      ).join('\n')
    )
  }

  if (examples.length <= 1) {
    return
  }

  println('## 示例')

  print(examples.slice(1).map(({ title, html }) => [`### ${title}`, getHtmlBlock(html)].join('\n\n')).join('\n\n'))
}

const generateDocs = tagNames => Promise.all(tagNames.map(generateDoc))

const fixDOMSerializer = () => fs.writeFile(
  path.resolve(__dirname, '../node_modules/dom-serializer/index.js'),
  `/*
    Module dependencies
  */
  var ElementType = require('domelementtype');
  var entities = require('entities');

  var unencodedElements = {
    __proto__: null,
    'mip-style': true,
    'mip-script': true,
    style: true,
    script: true,
    xmp: true,
    iframe: true,
    noembed: true,
    noframes: true,
    plaintext: true,
    noscript: true
  };

  /*
    Format attributes
  */
  function formatAttrs(attributes, opts) {
    if (!attributes) return;

    var output = '',
        value;

    // Loop through the attributes
    for (var key in attributes) {
      value = attributes[key];
      if (output) {
        output += ' ';
      }

      output += key;
      if ((value !== null && value !== '') || opts.xmlMode) {
          output += '="' + (opts.decodeEntities ? entities.encodeXML(value) : value) + '"';
      }
    }

    return output;
  }

  /*
    Self-enclosing tags (stolen from node-htmlparser)
  */
  var singleTag = {
    __proto__: null,
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
  };


  var render = module.exports = function(dom, opts) {
    if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
    opts = opts || {};

    var output = '';

    for(var i = 0; i < dom.length; i++){
      var elem = dom[i];

      if (elem.type === 'root')
        output += render(elem.children, opts);
      else if (ElementType.isTag(elem))
        output += renderTag(elem, opts);
      else if (elem.type === ElementType.Directive)
        output += renderDirective(elem);
      else if (elem.type === ElementType.Comment)
        output += renderComment(elem);
      else if (elem.type === ElementType.CDATA)
        output += renderCdata(elem);
      else
        output += renderText(elem, opts);
    }

    return output;
  };

  function renderTag(elem, opts) {
    // Handle SVG
    if (elem.name === "svg") opts = {decodeEntities: opts.decodeEntities, xmlMode: true};

    var tag = '<' + elem.name,
        attribs = formatAttrs(elem.attribs, opts);

    if (attribs) {
      tag += ' ' + attribs;
    }

    if (
      opts.xmlMode
      && (!elem.children || elem.children.length === 0)
    ) {
      tag += '/>';
    } else {
      tag += '>';
      if (elem.children) {
        tag += render(elem.children, opts);
      }

      if (!singleTag[elem.name] || opts.xmlMode) {
        tag += '</' + elem.name + '>';
      }
    }

    return tag;
  }

  function renderDirective(elem) {
    return '<' + elem.data + '>';
  }

  function renderText(elem, opts) {
    var data = elem.data || '';

    // if entities weren't decoded, no need to encode them back
    if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
      data = entities.encodeXML(data);
    }

    return data;
  }

  function renderCdata(elem) {
    return '<![CDATA[' + elem.children[0].data + ']]>';
  }

  function renderComment(elem) {
    return '<!--' + elem.data + '-->';
  }`
)

const main = async () => {
  await fixDOMSerializer()

  const docTypes = ['components', 'directives', 'layout', 'motion']

  await Promise.all(docTypes.map(docType => ensureDir(path.resolve(__dirname, '..', 'docs', docType))))

  const tagNames = (await fs.readdir(path.resolve(__dirname, '../dev')))
    .filter(filename => filename.includes('.html') && filename !== 'index.html')
    .map(filename => filename.replace('.html', ''))

  await generateDocs(tagNames)
}

main()
