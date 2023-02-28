import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default defineNuxtPlugin(({ vueApp }) => {
  // console.log('app', app);
  vueApp.use(LoadingPlugin, {
    color: '#FF0000'
  })
})
