/* @vue/component */
export default {
  name: 'Returnable',
  props: {
    returnValue: null
  },
  data: () => ({
    originalValue: null
  }),
  watch: {
    isActive (val) {
      if (val) {
        this.originalValue = this.returnValue
      } else {
        this.$emit('update:returnValue', this.originalValue)
      }
    }
  },
  mounted () {
    this.$on('save', (event, value) => this.save(this.returnValue))
  },
  methods: {
    save (value) {
      this.originalValue = value
      this.isActive = false
    }
  }
}
