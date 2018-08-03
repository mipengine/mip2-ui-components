/* eslint-disable max-len, import/export, no-use-before-define */
// import Vue from 'vue'
export default function mixins (...args) {
  // return Vue.extend({ mixins: args })
  return {
    extend (obj) {
      return Object.assign({ mixins: args }, obj)
    }
  }
}
