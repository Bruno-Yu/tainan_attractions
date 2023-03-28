import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default defineNuxtPlugin(({ vueApp }) => {
  // console.log('app', app);
  vueApp.component('date-picker', VueDatePicker)
})
