export default defineNuxtRouteMiddleware((to, from) => {
  // console.log('to', to, 'from', from)
  if (to.path === '/') {
    return navigateTo('/frontStage')
  }
})
