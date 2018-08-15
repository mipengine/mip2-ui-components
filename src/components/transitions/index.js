import { createSimpleTransition, createJavaScriptTransition, createComponent } from '../../util/helpers'
import ExpandTransitionGenerator from './expand-transition'
// Component specific transitions
const VBottomSheetTransition = createSimpleTransition('bottom-sheet-transition')
const VCarouselTransition = createSimpleTransition('carousel-transition')
const VCarouselReverseTransition = createSimpleTransition('carousel-reverse-transition')
const VTabTransition = createSimpleTransition('tab-transition')
const VTabReverseTransition = createSimpleTransition('tab-reverse-transition')
const VMenuTransition = createSimpleTransition('menu-transition')
const VFabTransition = createSimpleTransition('fab-transition', 'center center', 'out-in')
// Generic transitions
const VDialogTransition = createSimpleTransition('dialog-transition')
const VDialogBottomTransition = createSimpleTransition('dialog-bottom-transition')
const VFadeTransition = createSimpleTransition('fade-transition')
const VScaleTransition = createSimpleTransition('scale-transition')
const VSlideXTransition = createSimpleTransition('slide-x-transition')
const VSlideXReverseTransition = createSimpleTransition('slide-x-reverse-transition')
const VSlideYTransition = createSimpleTransition('slide-y-transition')
const VSlideYReverseTransition = createSimpleTransition('slide-y-reverse-transition')
// JavaScript transitions
const VExpandTransition = createJavaScriptTransition('expand-transition', ExpandTransitionGenerator())
const VRowExpandTransition = createJavaScriptTransition('row-expand-transition', ExpandTransitionGenerator('datatable__expand-col--expanded'))

const components = [
  VBottomSheetTransition,
  VCarouselTransition,
  VCarouselReverseTransition,
  VTabTransition,
  VTabReverseTransition,
  VMenuTransition,
  VFabTransition,
  VDialogTransition,
  VDialogBottomTransition,
  VFadeTransition,
  VScaleTransition,
  VSlideXTransition,
  VSlideXReverseTransition,
  VSlideYTransition,
  VSlideYReverseTransition,
  VExpandTransition,
  VRowExpandTransition
]

components.forEach(createComponent)

export {
  VBottomSheetTransition,
  VCarouselTransition,
  VCarouselReverseTransition,
  VTabTransition,
  VTabReverseTransition,
  VMenuTransition,
  VFabTransition,
  VDialogTransition,
  VDialogBottomTransition,
  VFadeTransition,
  VScaleTransition,
  VSlideXTransition,
  VSlideXReverseTransition,
  VSlideYTransition,
  VSlideYReverseTransition,
  VExpandTransition,
  VRowExpandTransition
}
