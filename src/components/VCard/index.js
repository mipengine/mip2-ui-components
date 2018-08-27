import { createSimpleFunctional } from '../../util/helpers'

export { default as VCard } from './VCard'
export { default as VCardMedia } from './VCardMedia'
export { default as VCardTitle } from './VCardTitle'

export const VCardActions = createSimpleFunctional('v-card__actions')
export const VCardText = createSimpleFunctional('v-card__text')

