import { createSimpleFunctional } from '../../util/helpers'

export { default as VList } from './VList'
export { default as VListGroup } from './VListGroup'
export { default as VListTile } from './VListTile'
export { default as VListTileAction } from './VListTileAction'
export { default as VListTileAvatar } from './VListTileAvatar'

export const VListTileActionText = createSimpleFunctional('v-list__tile__action-text', 'span')
export const VListTileContent = createSimpleFunctional('v-list__tile__content', 'div')
export const VListTileTitle = createSimpleFunctional('v-list__tile__title', 'div')
export const VListTileSubTitle = createSimpleFunctional('v-list__tile__sub-title', 'div')
