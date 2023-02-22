import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
// import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
    nitro: {
    serveStatic: true,
  },
  app: {
    head: {
      title: 'tainan attractions',
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'ie=edge'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'ccClub'
        },
        {
          property: 'og:locale',
          content: 'zh_TW'
        }
      ],
      script: [
      // <script src="https://myawesome-lib.js"></script>
      { src: 'TW-ELEMENTS-PATH/dist/js/index.min.js' }
    ],
    }
  },
    runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_BASE_URL_PATH: process.env.API_BASE_PATH
},
  // typescript: {
  //   typeCheck: true
  // },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss'],
  // buildModules: ['@nuxtjs/dotenv'],

  plugins: [
    '@/plugins/vee-validate.js', '@/plugins/font-awesome-icon.js', '@/plugins/star-rating.js'
  ],
  // vite: {
  //   plugins: [
  //     VueI18nVitePlugin({
  //       include: [resolve(dirname(fileURLToPath(import.meta.url)), './plugins/lang/*.ts')]
  //     })
  //   ]
  // }
})
