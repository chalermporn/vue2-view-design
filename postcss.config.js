// const purgecss = require('@fullhuman/postcss-purgecss')
// const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('autoprefixer')
    // cssnano({
    //   preset: 'default'
    // }),
    // purgecss({
    //   content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.js'],
    //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    // })
  ]
}
