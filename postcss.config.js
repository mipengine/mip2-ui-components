const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')

module.exports = (ctx) => ({
  plugins: [
    autoprefixer(),
    mqpacker()
  ]
})
