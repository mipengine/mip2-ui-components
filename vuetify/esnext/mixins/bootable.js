import Vue from 'vue';
/**
 * Bootable
 * @mixin
 *
 * Used to add lazy content functionality to components
 * Looks for change in "isActive" to automatically boot
 * Otherwise can be set manually
 */
/* @vue/component */
export default Vue.extend().extend({
    name: 'bootable',
    props: {
        lazy: Boolean
    },
    data: () => ({
        isBooted: false
    }),
    computed: {
        hasContent() {
            return this.isBooted || !this.lazy || this.isActive;
        }
    },
    watch: {
        isActive() {
            this.isBooted = true;
        }
    },
    methods: {
        showLazyContent(content) {
            return this.hasContent ? content : undefined;
        }
    }
});