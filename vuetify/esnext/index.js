var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../src/stylus/app.styl';
import * as components from './components';
import * as directives from './directives';
const Vuetify = {
    install(Vue, args) {
        const VuetifyComponent = components.Vuetify;
        Vue.use(VuetifyComponent, _extends({
            components,
            directives
        }, args));
    },
    version: '1.1.9'
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Vuetify);
}
export default Vuetify;
//# sourceMappingURL=index.js.map