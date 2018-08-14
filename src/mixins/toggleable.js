// import Vue from 'vue'
export function factory (prop = 'value', event = 'input') {
  // return Vue.extend({
  return {
    name: 'Toggleable',
    model: { prop, event },
    props: {
      [prop]: { required: false, type: Boolean }
    },
    data () {
      return {
        isActive: !!this[prop]
      }
    },
    watch: {
      [prop] (val) {
        this.isActive = !!val
      },
      isActive (val) {
        if (!!val === this[prop]) {
          return
        }
        this.$emit(event, val)
        this.$emit(`update:${prop}`, val)
      }
    }
  }
}
/* eslint-disable-next-line no-redeclare */
const Toggleable = factory()
export default Toggleable
