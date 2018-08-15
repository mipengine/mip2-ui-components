import VSelect from './VSelect'
import VOverflowBtn from '../VOverflowBtn'
import VAutocomplete from '../VAutocomplete'
import VCombobox from '../VCombobox'
import rebuildSlots from '../../util/rebuildFunctionalSlots'
import { deprecate } from '../../util/console'
import { camelize } from '../../util/helpers'
/* @vue/component */
const wrapper = {
  name: VSelect.name,
  functional: true,
  $_wrapperFor: VSelect,
  props: {
    // VAutoComplete
    /** @deprecated */
    autocomplete: Boolean,
    /** @deprecated */
    combobox: Boolean,
    multiple: Boolean,
    /** @deprecated */
    tags: Boolean,
    // VOverflowBtn
    /** @deprecated */
    editable: Boolean,
    /** @deprecated */
    overflow: Boolean,
    /** @deprecated */
    segmented: Boolean,
    value: null
  },
  render (h, { props, data, slots, parent, listeners = {} }) {
    delete data.model
    const children = rebuildSlots(slots(), h)
    const rootEl = parent.$el.parentElement
    if (props.autocomplete) {
      deprecate('<mip-v-select autocomplete>', '<mip-v-autocomplete>', wrapper, parent)
    }
    if (props.combobox) {
      deprecate('<mip-v-select combobox>', '<mip-v-combobox>', wrapper, parent)
    }
    if (props.tags) {
      deprecate('<mip-v-select tags>', '<mip-v-combobox multiple>', wrapper, parent)
    }
    if (props.overflow) {
      deprecate('<mip-v-select overflow>', '<mip-v-overflow-btn>', wrapper, parent)
    }
    if (props.segmented) {
      deprecate('<mip-v-select segmented>', '<mip-v-overflow-btn segmented>', wrapper, parent)
    }
    if (props.editable) {
      deprecate('<mip-v-select editable>', '<mip-v-overflow-btn editable>', wrapper, parent)
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
    if (props.combobox || props.tags) {
      data.attrs.multiple = props.tags
      return h(VCombobox, data, children)
    } else if (props.autocomplete) {
      data.attrs.multiple = props.multiple
      return h(VAutocomplete, data, children)
    } else if (props.overflow || props.segmented || props.editable) {
      data.attrs.segmented = props.segmented
      data.attrs.editable = props.editable
      return h(VOverflowBtn, data, children)
    } else {
      data.attrs.multiple = props.multiple
      return h(VSelect, data, children)
    }
  }
}
/* istanbul ignore next */
wrapper.install = function install (Vue) {
  Vue.component(VSelect.name, wrapper)
}
export { wrapper as VSelect }
export default wrapper
