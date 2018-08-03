import '../src/stylus/app.styl'
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
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuetify)
}
export default Vuetify
