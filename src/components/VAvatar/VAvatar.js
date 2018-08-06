import '../../../src/stylus/components/_avatars.styl'
// Mixins
import Colorable from '../../mixins/colorable'
import { convertToUnit } from '../../util/helpers'
import mixins from '../../util/mixins'
/* @vue/component */
export default mixins(Colorable).extend({
  name: 'VAvatar',
  functional: true,
  props: {
    // TODO: inherit these
    color: String,
    size: {
      type: [Number, String],
      default: 48
    },
    tile: Boolean
  },
  render (h, { data, props, children }) {
    data.staticClass = `v-avatar ${data.staticClass || ''}`.trim()
    if (props.tile) data.staticClass += ' v-avatar--tile'
    const size = convertToUnit(props.size)
    data.style = {
      height: size,
      width: size,
      ...data.style
    }
    data.class = [data.class, Colorable.methods.addBackgroundColorClassChecks.call(props, {}, props.color)]
    return h('div', data, children)
  }
})
