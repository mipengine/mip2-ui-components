const padStart = (string, targetLength, padString) => {
  targetLength = targetLength >> 0
  string = String(string)
  padString = String(padString)
  if (string.length > targetLength) {
    return String(string)
  }
  targetLength = targetLength - string.length
  if (targetLength > padString.length) {
    padString += Array(targetLength / padString.length + 1).join(padString)
  }
  return padString.slice(0, targetLength) + String(string)
}
export default (n, length = 2) => padStart(n, length, '0')
