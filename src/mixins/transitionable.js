import Vue from 'vue'
export default Vue.extend({
  name: 'Transitionable',
  props: {
    mode: String,
    origin: String,
    transition: String
  }
})
