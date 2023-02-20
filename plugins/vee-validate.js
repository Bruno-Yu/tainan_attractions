// import Vue from 'vue';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';


defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

setLocale('zh_TW');


export default   defineNuxtPlugin(({ vueApp }) =>{
  // console.log('app', app);
  vueApp.component('v-form', Form);
  vueApp.component('error-message', ErrorMessage);
  vueApp.component('v-field', Field);
})