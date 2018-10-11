const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const mqpacker = require('css-mqpacker')

module.exports = (ctx) => ({
  plugins: [
    autoprefixer({
      browsers: ['>0.5%', 'last 2 versions', 'safari 8']
    }),
    cssnano({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ],
      zindex: false,
      reduceIdents: false
    }),
    mqpacker()
  ]
})
