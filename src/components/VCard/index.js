import { createSimpleFunctional } from '../../util/helpers'
import VCard from './VCard'
import VCardMedia from './VCardMedia'
import VCardTitle from './VCardTitle'
// import Vue from 'vue'
// const VCardActions = Vue.extend(createSimpleFunctional('v-card__actions'))
// const VCardText = Vue.extend(createSimpleFunctional('v-card__text'))
const VCardActions = createSimpleFunctional('v-card__actions')
const VCardText = createSimpleFunctional('v-card__text')

VCard.install = function install (Vue) {
  Vue.component(VCard.options.name, VCard)
}
VCardMedia.install = function install (Vue) {
  Vue.component(VCardMedia.name, VCardMedia)
}
VCardTitle.install = function install (Vue) {
  Vue.component(VCardTitle.name, VCardTitle)
}
VCardActions.install = function install (Vue) {
  Vue.component(VCardActions.name, VCardActions)
}
VCardText.install = function install (Vue) {
  debugger
  Vue.component(VCardText.name, VCardText)
}

export { VCard, VCardMedia, VCardTitle, VCardActions, VCardText }
