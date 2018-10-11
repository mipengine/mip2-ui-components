import '../src/stylus/main.styl'
import * as components from './components'
import * as directives from './directives'
const Vuetify = {
  install (Vue, args) {
    const VuetifyComponent = components.Vuetify
    Vue.use(VuetifyComponent, {
      components,
      directives,
      ...args
    })
  },
  version: '1.1.9'
}
if (typeof window !== 'undefined') {
  if (typeof performance === 'undefined') {
    const startOffset = +new Date()

    window.performance = {
      now () {
        return +new Date() - startOffset
      }
    }
  }

  const Vue = window.MIP.Vue

  Vue.config.performance = true

  Vue.use(Vuetify)
}
if (typeof global === 'object' && typeof global.window === 'undefined') {
  global.components = components
}
