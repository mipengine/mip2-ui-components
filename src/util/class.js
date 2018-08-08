export function moveClass (mipNode, data) {
  // 移动 class 到正确的位置
  let classArray = [...mipNode.classList]
  let classes = data.class
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
}