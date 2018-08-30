const legacyFs = require('fs')
const path = require('path')

const merge = require('lodash/merge')
const $ = require('cheerio')

require('../dist/vuetify')

const fs = legacyFs.promises

const camelToDash = camel => camel.match(/[A-Z][^A-Z]*/g).map(word => word.toLowerCase()).join('-')

const getMIPTagName = tagName => `mip-${tagName}`

const getOfficialDoc = type => async (name) => {
  const getDocByLang = async (lang) => {
    const docsDir = path.resolve(__dirname, '../../vuetifyjs.com/src/lang', lang, type)
    const filenames = await fs.readdir(docsDir)
    const docFilename = filenames.find(filename => filename.startsWith(name))

    return require(path.resolve(docsDir, docFilename))
  }

  return merge({}, await getDocByLang('en'), await getDocByLang('zhHans'))
}

const getComponentDoc = getOfficialDoc('components')

const getMixinDoc = getOfficialDoc('mixins')

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
    return definition.map(getPropType).join(' \\| ')
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

  await ensureDocDir(mipTagName)

  const { print, println } = await createDocPrinter(mipTagName)

  println(`# ${mipTagName}`)

  println(doc.headerText)

  println('## 用例')

  println('## API')

  components.forEach(async ({name, props, mixins}) => {
    const mixinDocs = await Promise.all(mixins.map(({ name }) => getMixinDoc(name)))

    const mergedProps = merge({}, props, ...mixins.map(({ props }) => props))
    const mergedDoc = merge({}, doc, ...mixinDocs)

    println(`### ${getMIPTagName(camelToDash(name))}`)

    println('#### Props')

    print('名称|类型|默认值|含义')
    print(':--:|:--:|:--:|:---')
    println(Object.entries(mergedProps)
      .map(([prop, definition]) =>
        [prop, getPropType(definition), getDefaultValue(definition), mergedDoc.props[prop] || ''].join('|')
      )
      .join('\n'))
  })
}

const generateDocs = tagNames => tagNames.forEach(generateDoc)

generateDocs(['v-progress'])
