var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Styles
import '../../../src/stylus/components/_selection-controls.styl';
// Components
import VIcon from '../VIcon';
// import { VFadeTransition } from '../transitions'
// Mixins
import Selectable from '../../mixins/selectable';
/* @vue/component */
export default {
    name: 'v-checkbox',
    mixins: [Selectable],
    props: {
        indeterminate: Boolean,
        indeterminateIcon: {
            type: String,
            default: '$vuetify.icons.checkboxIndeterminate'
        },
        onIcon: {
            type: String,
            default: '$vuetify.icons.checkboxOn'
        },
        offIcon: {
            type: String,
            default: '$vuetify.icons.checkboxOff'
        }
    },
    data: vm => ({
        inputIndeterminate: vm.indeterminate
    }),
    computed: {
        classes() {
            return {
                'v-input--selection-controls': true,
                'v-input--checkbox': true
            };
        },
        computedIcon() {
            if (this.inputIndeterminate) {
                return this.indeterminateIcon;
            } else if (this.isActive) {
                return this.onIcon;
            } else {
                return this.offIcon;
            }
        }
    },
    watch: {
        indeterminate(val) {
            this.inputIndeterminate = val;
        }
    },
    methods: {
        genCheckbox() {
            return this.$createElement('div', {
                staticClass: 'v-input--selection-controls__input'
            }, [this.genInput('checkbox', _extends({}, this.$attrs, {
                'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
            })), !this.disabled && this.genRipple({
                'class': this.classesSelectable
            }), this.$createElement(VIcon, {
                'class': this.classesSelectable,
                props: {
                    dark: this.dark,
                    light: this.light
                }
            }, this.computedIcon)]);
        },
        genDefaultSlot() {
            return [this.genCheckbox(), this.genLabel()];
        }
    }
};
//# sourceMappingURL=VCheckbox.js.map