const legacyFs = require('fs')
const path = require('path')

const merge = require('lodash/merge')
const cheerio = require('cheerio')

require('../dist/vuetify')

const fs = legacyFs.promises

const camelToDash = camel => camel.match(/[A-Z][^A-Z]*/g).map(word => word.toLowerCase()).join('-')

const getMIPTagName = tagName => `mip-${tagName}`

const getOfficialDoc = type => async (name) => {
  const getDocName = name => ({
    Btn: 'Buttons',
    Checkbox: 'Selection',
    Radio: 'Selection',
    Switch: 'Selection'
  })[name] || name

  const getDocByLang = async (lang) => {
    const docsDir = path.resolve(__dirname, '../../vuetifyjs.com/src/lang', lang, type)
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

  return { data, examples }
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
  await ensureDir(path.resolve(docDir, 'setting'))
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
    switch (definition) {
      case Boolean: return 'boolean'
      case Number: return 'number'
      case String: return 'string'
      default: return 'any'
    }
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
    return 'undefined'
  }

  if (typeof definition.default === 'function') {
    return JSON.stringify(definition.default())
  }

  return definition.default || 'undefined'
}

const generateDoc = async (tagName) => {
  const mipTagName = getMIPTagName(tagName)
  const name = tagName.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join('')
  const components = Object.values(global.components)
    .filter(({name: componentName = ''}) => componentName.startsWith(name))

  const doc = await getComponentDoc(name.slice(1))
  const { data, examples } = await parseExamples(tagName)

  await ensureDocDir(mipTagName)

  await fs.writeFile(
    path.resolve(__dirname, mipTagName, 'setting/example.preset'),
    `<mip-data><script type="application/json">${JSON.stringify(data)}</script></mip-data>\n`
  )

  const { print, println } = await createDocPrinter(mipTagName)

  println(`# ${mipTagName}`)

  println(doc.headerText)

  println('## 用例')

  println(getHtmlBlock(examples[0].html))

  println('## API')

  await Promise.all(components.map(async ({name, props, mixins = []}) => {
    const genericProps = await getGenericProps()
    const mixinDocs = await Promise.all(mixins.map(({ name }) => getMixinDoc(name)))

    const mergedProps = merge({}, props, ...mixins.map(({ props }) => props))
    const mergedDoc = merge({}, {props: genericProps}, doc, ...mixinDocs)

    println(`### ${getMIPTagName(camelToDash(name))}`)

    println('#### Props')

    print('名称|类型|默认值|含义')
    print(':--:|:--:|:--:|:---')
    println(Object.entries(mergedProps)
      .map(([prop, definition]) =>
        [prop, getPropType(definition), getDefaultValue(definition), (mergedDoc.props || {})[prop] || ''].join('|')
      )
      .join('\n'))
  }))

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
