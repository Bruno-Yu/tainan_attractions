import StarRating from 'vue-star-rating'
// VueStarRating.default

export default defineNuxtPlugin(({ vueApp }) => {
  // console.log('app', app);
  vueApp.component('star-rating', StarRating)
})
