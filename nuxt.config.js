export default {
  mode: 'universal',
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/global.css'
  ],
  plugins: ['~/plugins/element-ui.js', '~/plugins/axios.js'],
  build: {
    transpile: [/^element-ui/]
  }
}