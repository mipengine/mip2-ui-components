var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Components
import VJumbotron from '../VJumbotron';
// Mixins
import { inject as RegistrableInject } from '../../mixins/registrable';
/* @vue/component */
export default {
    name: 'v-carousel-item',
    mixins: [RegistrableInject('carousel', 'v-carousel-item', 'v-carousel')],
    inheritAttrs: false,
    props: {
        transition: {
            type: String,
            default: 'tab-transition'
        },
        reverseTransition: {
            type: String,
            default: 'tab-reverse-transition'
        }
    },
    data() {
        return {
            active: false,
            reverse: false
        };
    },
    computed: {
        computedTransition() {
            return this.reverse === !this.$vuetify.rtl ? this.reverseTransition : this.transition;
        }
    },
    mounted() {
        this.carousel.register(this._uid, this.open);
    },
    beforeDestroy() {
        this.carousel.unregister(this._uid, this.open);
    },
    methods: {
        open(id, reverse) {
            this.active = this._uid === id;
            this.reverse = reverse;
        }
    },
    render(h) {
        const item = h(VJumbotron, {
            props: _extends({}, this.$attrs, {
                height: '100%'
            }),
            on: this.$listeners,
            directives: [{
                name: 'show',
                value: this.active
            }]
        }, this.$slots.default);
        return h('transition', { props: { name: this.computedTransition } }, [item]);
    }
};
//# sourceMappingURL=VCarouselItem.js.map