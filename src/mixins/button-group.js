import mixins from '../util/mixins'
import { provide as RegistrableProvide } from './registrable'
import { consoleWarn } from '../util/console'
/* @vue/component */
export default mixins(RegistrableProvide('buttonGroup')).extend({
  name: 'ButtonGroup',
  props: {
    mandatory: Boolean
  },
  data: () => ({
    buttons: [],
    listeners: [],
    isDestroying: false
  }),
  watch: {
    buttons: 'update'
  },
  mounted () {
    this.buttons = [...this.$el.querySelectorAll('mip-v-btn')].map(({ customElement: { vm } }) => vm)
    this.buttons.forEach((button, index) => button.$on('click', this.updateValue.bind(this, index)))
    this.update()
  },
  beforeDestroy () {
    this.isDestroying = true
    this.buttons.forEach(unregister)
  },
  methods: {
    /** @abstract */
    isSelected (i) {
      throw new Error('Not implemented !')
    },
    /** @abstract */
    updateValue (i) {
      throw new Error('Not implemented !')
    },
    /** @abstract */
    updateAllValues () {
      throw new Error('Not implemented !')
    },
    getValue (i) {
      if (this.buttons[i].value != null) {
        return this.buttons[i].value
      }
      return i
    },
    update () {
      const selected = []
      for (let i = 0; i < this.buttons.length; i++) {
        const elm = this.buttons[i].$el
        const button = this.buttons[i]
        elm.removeAttribute('data-only-child')
        if (this.isSelected(i)) {
          !button.to && (button.isActive = true)
          selected.push(i)
        } else {
          !button.to && (button.isActive = false)
        }
      }
      if (selected.length === 1) {
        this.buttons[selected[0]].$el.setAttribute('data-only-child', 'true')
      }
      this.ensureMandatoryInvariant(selected.length > 0)
    },
    register (button) {
      const index = this.buttons.length
      this.buttons.push(button)
      this.listeners.push(this.updateValue.bind(this, index))
      button.$on('click', this.listeners[index])
    },
    unregister (buttonToUnregister) {
      // Basic cleanup if we're destroying
      if (this.isDestroying) {
        const index = this.buttons.indexOf(buttonToUnregister)
        if (index !== -1) {
          buttonToUnregister.$off('click', this.listeners[index])
        }
        return
      }
      this.redoRegistrations(buttonToUnregister)
    },
    redoRegistrations (buttonToUnregister) {
      let selectedCount = 0
      const buttons = []
      for (let index = 0; index < this.buttons.length; ++index) {
        const button = this.buttons[index]
        if (button !== buttonToUnregister) {
          buttons.push(button)
          selectedCount += Number(this.isSelected(index))
        }
        button.$off('click', this.listeners[index])
      }
      this.buttons = []
      this.listeners = []
      for (let index = 0; index < buttons.length; ++index) {
        this.register(buttons[index])
      }
      this.ensureMandatoryInvariant(selectedCount > 0)
      this.updateAllValues && this.updateAllValues()
    },
    ensureMandatoryInvariant (hasSelectedAlready) {
      // Preserve the mandatory invariant by selecting the first tracked button, if needed
      if (!this.mandatory || hasSelectedAlready) return
      if (!this.listeners.length) {
        consoleWarn('There must be at least one v-btn child if the mandatory property is true.', this)
        return
      }
      this.listeners[0]()
    }
  }
})
