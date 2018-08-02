var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Styles
import '../../../src/stylus/components/_dividers.styl';
// Types
import Vue from 'vue';
// Mixins
import Themeable from '../../mixins/themeable';
export default Vue.extend({
    name: 'v-divider',
    functional: true,
    props: _extends({}, Themeable.options.props, {
        inset: Boolean,
        vertical: Boolean
    }),
    render(h, { props, data }) {
        data.staticClass = `v-divider ${data.staticClass || ''}`.trim();
        if (props.inset) data.staticClass += ' v-divider--inset';
        if (props.vertical) data.staticClass += ' v-divider--vertical';
        if (props.light) data.staticClass += ' theme--light';
        if (props.dark) data.staticClass += ' theme--dark';
        return h('hr', data);
    }
});
//# sourceMappingURL=VDivider.js.map