/**
 * Default delimiter RegExp
 *
 * @type {RegExp}
 */
export const defaultDelimiters = /[-!$%^&*()_+|~=`{}[\]:";'<>?,./\\ ]/
/**
 *
 * @param {string} char
 *
 * @return {boolean}
 */
export const isMaskDelimiter = char => char && defaultDelimiters.test(char)
/**
 * Mask keys
 *
 * @type {Object}
 */
const allowedMasks = {
  '#': {
    test: char => char.match(/[0-9]/)
  },
  'A': {
    test: char => char.match(/[A-Z]/i),
    convert: char => char.toUpperCase()
  },
  'a': {
    test: char => char.match(/[a-z]/i),
    convert: char => char.toLowerCase()
  },
  'N': {
    test: char => char.match(/[0-9A-Z]/i),
    convert: char => char.toUpperCase()
  },
  'n': {
    test: char => char.match(/[0-9a-z]/i),
    convert: char => char.toLowerCase()
  },
  'X': {
    test: isMaskDelimiter
  }
}
/**
 * Is Character mask
 *
 * @param  {string} char
 *
 * @return {boolean}
 */
const isMask = char => allowedMasks.hasOwnProperty(char)
/**
 * Automatically convert char case
 *
 * @param  {string} mask
 * @param  {string} char
 *
 * @return {string}
 */
const convert = (mask, char) => {
  return allowedMasks[mask].convert ? allowedMasks[mask].convert(char) : char
}
/**
 * Mask Validation
 *
 * @param  {string} mask
 * @param  {string} char
 *
 * @return {boolean}
 */
const maskValidates = (mask, char) => {
  if (char == null || !isMask(mask)) return false
  return allowedMasks[mask].test(char)
}
/**
 * Mask Text
 *
 * Takes a string or an array of characters
 * and returns a masked string
 *
 * @param {*} text
 * @param {Array|string} masked
 * @param {boolean} [dontFillMaskBlanks]
 *
 * @return {string}
 */
export const maskText = (text, masked, dontFillMaskBlanks) => {
  if (text == null) return ''
  text = String(text)
  if (!masked.length || !text.length) return text
  if (!Array.isArray(masked)) masked = masked.split('')
  let textIndex = 0
  let maskIndex = 0
  let newText = ''
  while (maskIndex < masked.length) {
    const mask = masked[maskIndex]
    // Assign the next character
    const char = text[textIndex]
    // Check if mask is delimiter
    // and current char matches
    if (!isMask(mask) && char === mask) {
      newText += mask
      textIndex++
      // Check if not mask
    } else if (!isMask(mask) && !dontFillMaskBlanks) {
      newText += mask
      // Check if is mask and validates
    } else if (maskValidates(mask, char)) {
      newText += convert(mask, char)
      textIndex++
    } else {
      return newText
    }
    maskIndex++
  }
  return newText
}
/**
 * Unmask Text
 *
 * @param {string} text
 *
 * @return {string}
 */
export const unmaskText = text => {
  return text ? String(text).replace(new RegExp(defaultDelimiters, 'g'), '') : text
}
