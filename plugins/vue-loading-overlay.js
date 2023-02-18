import Vue from 'vue';
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(LoadingPlugin, {
  color: '#FF0000'
})