import Colorable from '../../mixins/colorable'
/* @vue/component */
export default {
  name: 'VTabsSlider',
  mixins: [Colorable],
  data: () => ({
    defaultColor: 'accent'
  }),
  render (h) {
    return h('div', {
      staticClass: 'v-tabs__slider',
      class: this.addBackgroundColorClassChecks()
    })
  }
}
