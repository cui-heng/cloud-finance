import lessRem from './plugins/less-rem';

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
  modules: ['@nuxtjs/svg-sprite'],
  svgSprite: {
    input: '~/assets/icons/'
  },
  env: {
    API_URL: process.env.API_URL,
    OSS_API_URL: process.env.OSS_API_URL,
  },
  build: {
    transpile: [/^element-ui/],
    loaders: {
      less: {
        lessOptions: {
          plugins: [lessRem],
        }
      }
    }
  },
  globals: {
    id: 'app',
  },
}