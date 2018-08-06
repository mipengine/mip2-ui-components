import Vue from 'vue'
import { deepEqual } from '../util/helpers'
export default Vue.extend({
  name: 'Comparable',
  props: {
    valueComparator: {
      type: Function,
      default: deepEqual
    }
  }
})
