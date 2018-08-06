/**
 *
 * @param {Object} slots
 * @param {Function} h
 * @returns {Array}
 */
export default function rebuildFunctionalSlots (slots, h) {
  const children = []
  for (const slot in slots) {
    if (slots.hasOwnProperty(slot)) {
      children.push(h('template', { slot }, slots[slot]))
    }
  }
  return children
}
