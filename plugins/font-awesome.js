import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import StarRating from 'vue-star-rating';

library.add( faTrashCan,  faAngleDown, faAngleUp);

setLocale('zh_TW');

Vue.component('star-rating', StarRating);
Vue.component('font-awesome-icon', FontAwesomeIcon);