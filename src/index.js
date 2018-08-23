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

const Vue = window.MIP.Vue

Vue.config.performance = true

Vue.use(Vuetify)