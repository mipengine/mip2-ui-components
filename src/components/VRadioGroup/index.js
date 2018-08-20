import { createComponent } from '../../util/helpers'

import VRadioGroup from './VRadioGroup'
import VRadio from './VRadio'

const components = [VRadioGroup, VRadio]

components.forEach(createComponent)

export { VRadioGroup, VRadio }
