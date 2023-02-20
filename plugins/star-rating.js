import StarRating from 'vue-star-rating';

export default   defineNuxtPlugin(({ vueApp }) =>{
  // console.log('app', app);
  vueApp.component('star-rating', StarRating);
})