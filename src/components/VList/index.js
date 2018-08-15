import { createSimpleFunctional, createComponent } from '../../util/helpers'
import VList from './VList'
import VListGroup from './VListGroup'
import VListTile from './VListTile'
import VListTileAction from './VListTileAction'
import VListTileAvatar from './VListTileAvatar'

const VListTileActionText = createSimpleFunctional('v-list__tile__action-text', 'span')
const VListTileContent = createSimpleFunctional('v-list__tile__content', 'div')
const VListTileTitle = createSimpleFunctional('v-list__tile__title', 'div')
const VListTileSubTitle = createSimpleFunctional('v-list__tile__sub-title', 'div')

const components = [
  VList,
  VListGroup,
  VListTile,
  VListTileAction,
  VListTileActionText,
  VListTileAvatar,
  VListTileContent,
  VListTileSubTitle,
  VListTileTitle
]

components.forEach(createComponent)

export {
  VList,
  VListGroup,
  VListTile,
  VListTileAction,
  VListTileAvatar,
  VListTileActionText,
  VListTileContent,
  VListTileTitle,
  VListTileSubTitle
}
