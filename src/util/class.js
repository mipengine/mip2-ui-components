export function fixClass (mipNode, classes = {}) {
  let classArray = [...mipNode.classList]

  classArray.forEach(c => {
    if (!/^mip-/.test(c)) {
      mipNode.classList.remove(c)
      if (Array.isArray(classes)) {
        classes.push(c)
      } else if (typeof classes === 'string') {
        classes += ` ${c}`
      } else {
        classes[c] = true
      }
    }
  })
  return classes
}
