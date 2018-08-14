import application from './mixins/application'
import breakpoint from './mixins/breakpoint'
import theme from './mixins/theme'
import icons from './mixins/icons'
import options from './mixins/options'
import genLang from './mixins/lang'
import { consoleWarn } from '../../util/console'
import goTo from './util/goTo'
import { intToHex } from '../../util/colorUtils'
import * as Theme from '../../util/theme'

function camelCaseToDash (str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

const Vuetify = {
  install (Vue, opts = {}) {
    if (this.installed) return
    this.installed = true
    checkVueVersion(Vue)
    const lang = genLang(opts.lang)
    Vue.prototype.$vuetify = new Vue({
      mixins: [breakpoint],
      data: {
        application,
        dark: false,
        icons: icons(opts.iconfont, opts.icons),
        lang,
        options: options(opts.options),
        rtl: opts.rtl,
        theme: theme(opts.theme)
      },
      methods: {
        goTo,
        t: lang.t.bind(lang)
      }
    })
    if (opts.transitions) {
      Object.values(opts.transitions).forEach(transition => {
        if (transition.name !== undefined && transition.name.startsWith('v-')) {
          Vue.component(transition.name, transition)
        }
      })
    }
    if (opts.directives) {
      Object.values(opts.directives).forEach(directive => {
        Vue.directive(directive.name, directive)
      })
    }
    if (opts.components) {
      // generate theme styles without <v-app>
      generateTheme(Vue.prototype.$vuetify)

      // add [data-app] attr to <body>, which is required in some components such as v-slider
      document.body.setAttribute('data-app', '')

      Object.values(opts.components).forEach(component => {
        if (!component.name || !component.name.toLowerCase().startsWith('v')) {
          return
        }
        MIP.registerVueCustomElement(`mip-${camelCaseToDash(component.name)}`, component)
      })
    }
  },
  version: '1.1.9'
}

function generateTheme ({theme: rawTheme, options, dark}) {
  // 1. convert theme variables to CSS strings
  const theme = Theme.parse(rawTheme)
  let css
  const colors = Object.keys(theme)
  if (!colors.length) return ''
  css = `a { color: ${intToHex(theme.primary)}; }`
  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i]
    const value = theme[name]
    if (options.themeVariations.includes(name)) {
      css += Theme.genVariations(name, value).join('')
    } else {
      css += Theme.genBaseColor(name, value)
    }
  }
  if (options.minifyTheme != null) {
    css = this.$vuetify.options.minifyTheme(css)
  }
  if (options.themeCache != null) {
    options.themeCache.set(theme, css)
  }

  // 2. append <style> contains CSS strings
  let style = document.getElementById('vuetify-theme-stylesheet')
  if (!style) {
    style = document.createElement('style')
    style.type = 'text/css'
    style.id = 'vuetify-theme-stylesheet'
    document.head.appendChild(style)
  }
  style.innerHTML = css

  // 3. add theme CSS classes to <body>
  document.body.classList.add(`theme--${dark ? 'dark' : 'light'}`)
}

export function checkVueVersion (Vue, requiredVue) {
  const vueDep = requiredVue || '^2.5.10'
  const required = vueDep.split('.', 3).map(v => v.replace(/\D/g, '')).map(Number)
  const actual = Vue.version.split('.', 3).map(n => parseInt(n, 10))
  // Simple semver caret range comparison
  const passes = actual[0] === required[0] && ( // major matches
    actual[1] > required[1] || // minor is greater
    actual[1] === required[1] && actual[2] >= required[2] // or minor is eq and patch is >=
  )
  if (!passes) {
    consoleWarn(`Vuetify requires Vue version ${vueDep}`)
  }
}
export default Vuetify
