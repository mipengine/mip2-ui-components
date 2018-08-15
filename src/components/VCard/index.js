import { createSimpleFunctional, createComponent } from '../../util/helpers'
import VCard from './VCard'
import VCardMedia from './VCardMedia'
import VCardTitle from './VCardTitle'

const VCardActions = createSimpleFunctional('v-card__actions')
const VCardText = createSimpleFunctional('v-card__text')

const components = [VCard, VCardMedia, VCardTitle, VCardActions, VCardText]

components.forEach(createComponent)

export { VCard, VCardMedia, VCardTitle, VCardActions, VCardText }
