import lessRem from './app/plugins/vite/less-rem';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/normalize.css',
    '~/assets/styles/global.css'
  ],
  modules: ['@element-plus/nuxt', 'nuxt-svgo'],
  svgo: {},
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          plugins: [lessRem],
        }
      }
    }
  },
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    public: {
      ossApiUrl: process.env.NUXT_PUBLIC_OSS_API_URL,
    }
  },
  app: {
    rootAttrs: {
      id: 'app',
    }
  },
  router: {
    options: {
      scrollBehaviorType: "smooth"
    },
  }
})