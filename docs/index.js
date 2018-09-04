const legacyFs = require('fs')
const path = require('path')

const merge = require('lodash/merge')
const cheerio = require('cheerio')

require('../dist/vuetify')

const fs = legacyFs.promises

const camelToDash = camel => (camel[0].toUpperCase() + camel.slice(1))
  .match(/[A-Z][^A-Z]*/g)
  .map(word => word.toLowerCase()).join('-')

const getMIPTagName = tagName => `mip-${tagName}`

const replaceMIPTagName = text => text.replace(/`v-model`/g, '`.sync`').replace(/`v-/g, '`mip-v-')

const getOfficialDoc = type => async (name) => {
  const getDocName = name => ({
    Btn: 'Buttons',
    Checkbox: 'Selection',
    Radio: 'Selection',
    Switch: 'Selection'
  })[name] || name

  const getDocByLang = async (lang) => {
    const docsDir = path.resolve(__dirname, '../lang', lang, type)
    const filenames = await fs.readdir(docsDir)
    const docFilename = filenames.find(filename => filename.startsWith(getDocName(name)))

    if (typeof docFilename === 'undefined') {
      return null
    }
    return require(path.resolve(docsDir, docFilename))
  }

  return merge({}, await getDocByLang('en'), await getDocByLang('zhHans'))
}

const getComponentDoc = getOfficialDoc('components')

const getMixinDoc = getOfficialDoc('mixins')

const getGenericProps = () => getOfficialDoc('generic')('Props')

const parseExamples = async (tagName) => {
  const html = await fs.readFile(path.resolve(__dirname, '../dev', `${tagName}.html`), 'utf8')
  const $ = cheerio.load(html)
  const data = JSON.parse($('mip-data > script[type="application/json"]').html())
  const examples = $('h2').nextUntil('script').toArray()
    .reduce((examples, node) => {
      const current = examples[examples.length - 1]

      if (node.tagName === 'h2') {
        return examples.concat({ title: $(node).text() })
      }

      const fragment = $('<div></div>').append(node).html()

      return examples.slice(0, -1).concat({
        ...current,
        fragments: current.fragments ? [...current.fragments, fragment] : [fragment]
      })
    }, [{}])
    .map(({ fragments, ...example }) => ({
      ...example,
      html: fragments.map(fragment => {
        const lines = fragment.split('\n')
        const align = lines[lines.length - 1].match(/\s*/)[0].length

        return [lines[0], ...lines.slice(1).map(line => line.slice(align))].join('\n')
      }).join('\n')
    }))
    .map(({ html, ...example }) => {
      const dataHtml = JSON.stringify(data, (key, val) => html.includes(key) ? val : undefined, 2)
        .split('\n')
        .join('\n    ')
      return {
        ...example,
        html: dataHtml === '{}'
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
  const doc = await getComponentDoc(name.slice(1))
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
  const name = tagName.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join('')
  const components = Object.values(global.components)
    .filter(({name: componentName = ''}) => componentName.startsWith(name))

  const doc = await getComponentDoc(name.slice(1))
  const examples = await parseExamples(tagName)

  await ensureDocDir(mipTagName)

  const { print, println } = await createDocPrinter(mipTagName)

  println(`# ${mipTagName}`)

  println(replaceMIPTagName(doc.headerText))

  println('## 用例')

  println(getHtmlBlock(examples[0].html))

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

const main = async () => {
  const tagNames = (await fs.readdir(path.resolve(__dirname, '../dev')))
    .filter(filename => filename.startsWith('v-'))
    .map(filename => filename.replace('.html', ''))

  await generateDocs(tagNames)
}

main()
