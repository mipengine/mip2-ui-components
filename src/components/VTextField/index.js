import VTextField from './VTextField'
import VTextarea from '../VTextarea/VTextarea'
import rebuildSlots from '../../util/rebuildFunctionalSlots'
import { deprecate } from '../../util/console'
import { camelize } from '../../util/helpers'

// TODO: remove this in v2.0
/* @vue/component */
const wrapper = {
  name: VTextField.name,
  functional: true,
  $_wrapperFor: VTextField,
  props: {
    textarea: Boolean,
    multiLine: Boolean,
    value: null
  },
  render (h, { props, data, slots, parent, listeners }) {
    delete data.model
    const children = rebuildSlots(slots(), h)
    const rootEl = parent.$el.parentElement
    if (props.textarea) {
      deprecate('<mip-v-text-field textarea>', '<mip-v-textarea outline>', wrapper, parent)
    }
    if (props.multiLine) {
      deprecate('<mip-v-text-field multi-line>', '<mip-v-textarea>', wrapper, parent)
    }
    data.on = Object.assign({}, data.on || {}, listeners)
    data.attrs = data.attrs || {}
    let attributes = rootEl.attributes;
    [].slice.call(attributes).forEach(attr => {
      let name = camelize(attr.name)
      if (/(class|style)/.test(name)) {
        return
      }
      data.props[name] = (
        rootEl.attrValues &&
        rootEl.attrValues[name] &&
        rootEl.attrValues[name].val) ||
        props[name] ||
        attr.value
    })
    if (props.textarea || props.multiLine) {
      data.attrs.outline = props.textarea
      return h(VTextarea, data, children)
    } else {
      return h(VTextField, data, children)
    }
  }
}
/* istanbul ignore next */
wrapper.install = function install (Vue) {
  Vue.component(VTextField.name, wrapper)
}
export { wrapper as VTextField }
export default wrapper
