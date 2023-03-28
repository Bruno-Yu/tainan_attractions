/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('tw-elements/dist/plugin'), require('@tailwindcss/forms')]
}
