import { createSimpleFunctional, createComponent } from '../../util/helpers'
import VToolbar from './VToolbar'
import VToolbarSideIcon from './VToolbarSideIcon'
const VToolbarTitle = createSimpleFunctional('v-toolbar__title', 'div', 'VToolbarTitle')
const VToolbarItems = createSimpleFunctional('v-toolbar__items', 'div', 'VToolbarItems')

const components = [VToolbar, VToolbarItems, VToolbarTitle, VToolbarSideIcon]

components.forEach(createComponent)

export { VToolbar, VToolbarSideIcon, VToolbarTitle, VToolbarItems }
