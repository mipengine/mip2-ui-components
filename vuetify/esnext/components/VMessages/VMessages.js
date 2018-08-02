var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Styles
import '../../../src/stylus/components/_messages.styl';
// Mixins
import Colorable from '../../mixins/colorable';
import Themeable from '../../mixins/themeable';
/* @vue/component */
export default {
    name: 'v-messages',
    mixins: [Colorable, Themeable],
    props: {
        value: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        classes() {
            return this.addTextColorClassChecks();
        }
    },
    methods: {
        genChildren() {
            return this.$createElement('transition-group', {
                staticClass: 'v-messages__wrapper',
                attrs: {
                    name: 'message-transition',
                    tag: 'div'
                }
            }, this.value.map(m => this.genMessage(m)));
        },
        genMessage(key) {
            return this.$createElement('div', {
                staticClass: 'v-messages__message',
                key,
                domProps: {
                    innerHTML: key
                }
            });
        }
    },
    render(h) {
        return h('div', {
            staticClass: 'v-messages',
            'class': _extends({}, this.classes, this.themeClasses)
        }, [this.genChildren()]);
    }
};
//# sourceMappingURL=VMessages.js.map