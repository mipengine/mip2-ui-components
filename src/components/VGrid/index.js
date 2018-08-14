import { createSimpleFunctional } from '../../util/helpers'
import VContent from './VContent'
import VContainer from './VContainer'
import VFlex from './VFlex'
import VLayout from './VLayout'
const VSpacer = createSimpleFunctional('v-spacer')

VContainer.install = function install (Vue) {
  Vue.component(Vcontainer.name, VContainer)
}
VContent.install = function install (Vue) {
  Vue.component(VContent.name, VContent)
}
VFlex.install = function install (Vue) {
  Vue.component(VFlex.name, VFlex)
}
VLayout.install = function install (Vue) {
  Vue.component(VLayout.name, VLayout)
}
VSpacer.install = function install (Vue) {
  Vue.component(VSpacer.name, VSpacer)
}

export { VContainer, VContent, VFlex, VLayout, VSpacer }
