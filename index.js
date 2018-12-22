const BASE_CODE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
const Base64 = {
  encode(source) {
    if (source === '') return ''
    const bitArray = source.split('')
    .map(char => char
      .charCodeAt(0)
      .toString(2)
      .padStart(8, '0'))
      .join('')
      .match(/\d{1,6}/g)
      .map(bit6 => bit6.padEnd(6, '0'))
      while(bitArray.length % 4 !== 0) {
        bitArray.push('=')
      }
      const result = bitArray
      .map(bit6 => bit6 === '=' ? bit6 : BASE_CODE[parseInt(bit6, 2)])
      .join('')
      return result
    },
    decode(source) {
      if (source === '') return ''
      let bitArray = source
      .split('')
      .filter(char => char !== '=')
      .map(char => BASE_CODE
        .indexOf(char)
        .toString('2')
        .padStart(6, '0'))
      .join('')
      .match(/\d{1,24}/g) || []
      bitArray = bitArray
      .map(bit24 => bit24.length === 24 ? bit24 
        : bit24.length === 12 ? bit24.slice(0, 8) : bit24.slice(0, 16))
      .join('')
      const result = (bitArray.match(/\d{8}/g) || [])
      .map(byte => String
        .fromCharCode(parseInt(byte, 2)))
      .join('')
      return result
  }
}
module.exports = {
  Base64,
  encode: Base64.encode,
  decode: Base64.decode,
  default: Base64
}