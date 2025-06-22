export default {
  mode: 'universal',
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  css: [
    'normalize.css/normalize.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/global.css'
  ],
  plugins: ['~/plugins/element-ui.js', '~/plugins/axios.js'],
  build: {
    transpile: [/^element-ui/],
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          // remUnit: 75,
          // remPrecision: 8,
          rootValue: 75,
          unitPrecision: 5,
          propList: ['*'],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          exclude: /node_modules/i
        }
      }
    }
  },
  globals: {
    id: 'app',
  }
}