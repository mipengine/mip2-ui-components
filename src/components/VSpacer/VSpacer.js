/* @vue/component */
export default {
  name: 'VSpacer',
  render (h) {
    const data = {
      staticClass: 'spacer'
    }
    this.$element.classList.add('spacer')
    return h('div', data)
  }
}
