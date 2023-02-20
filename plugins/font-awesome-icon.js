import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashCan, faAngleDown, faAngleUp);

export default   defineNuxtPlugin(({ vueApp }) =>{
  // console.log('app', app);
  vueApp.component('font-awesome-icon', FontAwesomeIcon);
})