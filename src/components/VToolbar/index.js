import { createSimpleFunctional } from '../../util/helpers'

export { default as VToolbar } from './VToolbar'
export { default as VToolbarSideIcon } from './VToolbarSideIcon'

export const VToolbarTitle = createSimpleFunctional('v-toolbar__title', 'div', 'VToolbarTitle')
export const VToolbarItems = createSimpleFunctional('v-toolbar__items', 'div', 'VToolbarItems')
