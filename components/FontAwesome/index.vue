<template>
  <font-awesome-icon/>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faStar, farStar, faStarHalfStroke, faTrashCan, faAngleDown, faAngleUp);

export default {
  components: {
    FontAwesomeIcon
  },
  setup() {
    return {
      FontAwesomeIcon
    }
  },
}
</script>