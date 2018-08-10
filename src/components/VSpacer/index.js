import VSpacer from './VSpacer'
/* istanbul ignore next */
VSpacer.install = function install (Vue) {
  Vue.component(VSpacer.options.name, VSpacer)
}
export { VSpacer }
export default VSpacer
