const legacyFs = require('fs')
const path = require('path')

const readdir = require('recursive-readdir')
const merge = require('lodash/merge')

require('../dist/vuetify')

const fs = legacyFs.promises

const capitalize = name => `${name[0].toUpperCase()}${name.slice(1)}`

const camelToDash = camel => capitalize(camel)
  .match(/[A-Z][^A-Z]*/g)
  .map(word => word.toLowerCase()).join('-')

const getMIPTagName = tagName => tagName.startsWith('v-') ? `mip-${tagName}` : tagName

const replaceMIPTagName = text => text.replace(/v-model/g, '.sync').replace(/`v-/g, '`mip-v-')

const getOfficialDoc = type => async (name) => {
  const getDocName = name => ({
    Btn: 'Buttons',
    Checkbox: 'Selection',
    Radio: 'Selection',
    Switch: 'Selection'
  })[name] || name

  const getDocByLang = async (lang) => {
    const docPaths = await readdir(path.resolve(__dirname, '../lang', lang))
    const docPath = docPaths.find(filename => filename.includes(getDocName(name)))

    if (typeof docPath === 'undefined') {
      return null
    }
    return require(docPath)
  }

  return merge({}, await getDocByLang('en'), await getDocByLang('zhHans'))
}

const getComponentDoc = getOfficialDoc('components')

const getMixinDoc = getOfficialDoc('mixins')

const getGenericProps = () => getOfficialDoc('generic')('Props')

const parseExamples = async (tagName) => {
  const cheerio = require('cheerio')

  const html = await fs.readFile(path.resolve(__dirname, '../dev', `${tagName}.html`), 'utf8')
  const $ = cheerio.load(html)
  const data = JSON.parse($('mip-data > script[type="application/json"]').html())
  const examples = $('h2').nextUntil('script').toArray()
    .reduce((examples, node) => {
      const current = examples[examples.length - 1]

      if (node.tagName === 'h2') {
        return examples.concat({
          title: $(node).text(),
          descriptions: [],
          fragments: []
        })
      }

      if (node.tagName === 'p') {
        return examples.slice(0, -1).concat({
          ...current,
          descriptions: [...current.descriptions, $(node).html()]
        })
      }

      const fragment = $('<div></div>').append(node).html()

      return examples.slice(0, -1).concat({
        ...current,
        fragments: [...current.fragments, fragment]
      })
    }, [{
      descriptions: [],
      fragments: []
    }])
    .map(({ fragments, ...example }) => {
      const html = fragments.map(fragment => {
        const lines = fragment.split('\n')
        const align = lines[lines.length - 1].match(/\s*/)[0].length

        return [lines[0], ...lines.slice(1).map(line => line.slice(align))].join('\n')
      }).join('\n')
      const dataHtml = JSON.stringify(
        data,
        (key, val) => Number.isInteger(+key) || html.search(new RegExp(`m-bind:[^=]+="[^"]*${key}[^"]*"`)) !== -1
          ? val
          : undefined,
        2
      )
        .split('\n')
        .join('\n    ')

      return {
        ...example,
        html: dataHtml === '{}' || dataHtml === 'null'
          ? html
          : '<mip-data>\n  <script type="application/json">\n    ' +
            dataHtml +
            '\n  </script>\n</mip-data>\n' +
            html
      }
    })

  return examples
}

const ensureDir = async (dir) => {
  try {
    await fs.access(dir)
  } catch (err) {
    await fs.mkdir(dir)
  }
}

const ensureDocDir = async (mipTagName) => {
  const docDir = path.resolve(__dirname, `../docs/${mipTagName}`)

  await ensureDir(docDir)
}

const createDocPrinter = async mipTagName => {
  const docPath = path.resolve(__dirname, mipTagName, 'README.md')

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

  if (description.startsWith('Mixins')) {
    const paths = description.split('.')

    return (await getMixinDoc(paths[1])).props[paths[3]]
  }

  if (description.startsWith('Components')) {
    const paths = description.split('.')

    return (await getComponentDoc(paths[1])).props[paths[3]]
  }

  return description
}

const getMergedComponentInfo = async (component) => {
  const { name, props, mixins = [] } = component
  const doc = await getComponentDoc(capitalize(camelToDash(name).split('-')[1]))
  const genericProps = await getGenericProps()
  const mixinDocs = await Promise.all(mixins.map(({ name }) => getMixinDoc(name)))
  let extendProps = {}
  let extendDoc = {}
  if (component.extends) {
    const extendInfo = await getMergedComponentInfo(component.extends)
    extendProps = merge({}, extendProps, extendInfo.mergedProps)
    extendDoc = merge({}, extendDoc, extendInfo.mergedDoc)
  }
  const mergedProps = merge({}, extendProps, ...mixins.map(({ props }) => props), props)
  const mergedDoc = merge({}, {props: genericProps}, extendDoc, ...mixinDocs, doc)
  return { mergedProps, mergedDoc }
}

const generateDoc = async (tagName) => {
  const mipTagName = getMIPTagName(tagName)
  const name = tagName.split('-').map(capitalize).join('')
  const components = Object.values(global.components)
    .filter(({name: componentName = ''}) => componentName.startsWith(name))

  const doc = await getComponentDoc(tagName.startsWith('v-') ? name.slice(1) : name)
  const examples = await parseExamples(tagName)

  await ensureDocDir(mipTagName)

  const { print, println } = await createDocPrinter(mipTagName)

  println(`# ${mipTagName}`)

  println(replaceMIPTagName(doc.headerText))

  println('## 用例')

  examples[0].descriptions.length && println(examples[0].descriptions.join('\n'))

  println(getHtmlBlock(examples[0].html))

  if (!components.length) {
    return
  }

  println('## API')

  for (const component of components) {
    const { name } = component
    const { mergedProps, mergedDoc } = await getMergedComponentInfo(component)

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
            replaceMIPTagName(await getDescription(mergedDoc.props, prop))
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

  const tagNames = (await fs.readdir(path.resolve(__dirname, '../dev')))
    .filter(filename => filename.includes('.html') && filename !== 'index.html')
    .map(filename => filename.replace('.html', ''))

  await generateDocs(tagNames)
}

main()
