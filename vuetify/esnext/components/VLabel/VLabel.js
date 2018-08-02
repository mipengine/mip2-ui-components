var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Styles
import '../../../src/stylus/components/_labels.styl';
// Mixins
import Colorable from '../../mixins/colorable';
import Themeable from '../../mixins/themeable';
// Helpers
import { convertToUnit } from '../../util/helpers';
/* @vue/component */
export default {
    name: 'v-label',
    functional: true,
    mixins: [Themeable],
    props: {
        absolute: Boolean,
        color: {
            type: [Boolean, String],
            default: 'primary'
        },
        disabled: Boolean,
        focused: Boolean,
        for: String,
        left: {
            type: [Number, String],
            default: 0
        },
        right: {
            type: [Number, String],
            default: 'auto'
        },
        value: Boolean
    },
    render(h, { children, listeners, props }) {
        const data = {
            staticClass: 'v-label',
            'class': _extends({
                'v-label--active': props.value,
                'v-label--is-disabled': props.disabled
            }, Themeable.options.computed.themeClasses.call(props)),
            attrs: {
                for: props.for,
                'aria-hidden': !props.for
            },
            on: listeners,
            style: {
                left: convertToUnit(props.left),
                right: convertToUnit(props.right),
                position: props.absolute ? 'absolute' : 'relative'
            }
        };
        if (props.focused) {
            data.class = Colorable.options.methods.addTextColorClassChecks(data.class, props.color);
        }
        return h('label', data, children);
    }
};
//# sourceMappingURL=VLabel.js.map