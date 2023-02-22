<template>
  <main class="px-10 py-10 mx-auto max-w-5xl">
    <div class="accordion mb-5" id="personalInfo">
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingOne">
          <button class="
        accordion-button
        relative
        text-gray-600
        flex
        items-center
        w-full
        py-3
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        font-bold
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
            aria-controls="collapseOne">
            <font-awesome-icon class="w-5 h-5 text-gray-600 mr-2" icon="fa-solid fa-angle-down"></font-awesome-icon>
            訂購人資訊
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show " aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <v-form ref="userInputForm" v-slot="{ errors }">
              <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                  <label for="userName" class="form-label inline-block mb-2 text-sm font-bold text-gray-700">姓名</label>
                  <v-field type="text" id="userName" placeholder="請輸入姓名" name="姓名"
                    :class="{ 'is-invalid': errors['姓名'] }" rules="required" v-model="userInput.userName" class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none" />
                  <error-message name="姓名" class="invalid-feedback" />
                </div>
                <div class="form-group mb-6">
                  <label for="phone" class="form-label inline-block mb-2 text-sm font-bold text-gray-700">手機</label>
                  <v-field type="tel" name="手機" id="phone" placeholder="請輸入手機號碼" :class="{ 'is-invalid': errors['手機'] }"
                    :rules="verifyPhone" v-model="userInput.phone" class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                  <error-message name="手機" class="invalid-feedback" />
                </div>
              </div>
              <div class="form-group mb-6">
                <label for="email" class="form-label inline-block mb-2  text-sm font-bold text-gray-700">電子信箱</label>
                <v-field type="email" id="email" name="電子信箱" placeholder="請輸入信箱地址"
                  :class="{ 'is-invalid': errors['電子信箱'] }" rules="email|required" v-model="userInput.email" class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                <error-message name="電子信箱" class="invalid-feedback" />
              </div>
              <div class="form-group mb-6">
                <label for="address" class="form-label inline-block mb-2  text-sm font-bold text-gray-700">地址</label>
                <v-field type="text" id="address" name="地址" placeholder="請輸入地址" :class="{ 'is-invalid': errors['地址'] }"
                  rules="required" v-model="userInput.address" class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                <error-message name="地址" class="invalid-feedback" />
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion mb-5" id="orderDetail">
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="header">
          <button class="
        accordion-button
        relative
        text-gray-600
        flex
        items-center
        w-full
        py-3
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        font-bold
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
            aria-controls="collapseOne">
            <font-awesome-icon class="w-5 h-5 text-gray-600 mr-2" icon="fa-solid fa-angle-down"></font-awesome-icon>
            購買明細
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show " aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <ul class="border rounded p-2">
              <li v-for="(item) in cartProducts" :key="item.id" class="flex justify-center w-full">
                <div class="grid grid-cols-4 gap-4 rounded-lg bg-white shadow  w-full">
                  <div class="p-1  col-span-2">
                    <img class="w-full h-28 object-cover rounded " :src="item.product.imageUrl"
                      :alt="item.product_id" />
                  </div>
                  <div class="p-2 col-span-2 justify-start w-full relative">
                    <div class="grid grid-cols-2 items-center">
                      <div>
                        <h5 class="text-gray-900 font-medium mb-2">{{ item.product.title }}</h5>
                        <p class="text-gray-600 text-xs">購買日期: {{ dayjs(new Date()).format('YYYY-MM-DD') }}</p>
                        <div class="flex justify-between items-center border-b border-gray-300 mt-1">
                          <p class="text-gray-600 text-xs">成人 x{{ item.qty }} </p>
                          <p class="text-gray-600 text-xs">TWD {{ helper.numberWithCommas(item.total) }}</p>
                        </div>
                        <div class="flex justify-between items-center mt-1">
                          <p class="font-bold text-sm">總金額</p>
                          <p class="text-gray-600 text-xs">TWD {{ helper.numberWithCommas(finalTotal) }}</p>
                        </div>
                      </div>
                      <div class="flex flex-col items-center">
                        <p class="font-bold text-sm items-center">預定日期</p>
                        <div class="rounded bg-gray-300">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion bg-white border border-gray-200 py-4 px-5 mb-5" id="totalPrice">
      <div class="flex justify-end items-center gap-4">
        <p class="text-gray-600">{{ totalQty }} 件商品共 <span class="text-gray-700 text-lg"> TWD {{ finalTotal }}</span>
        </p>
        <button type="button"
          class=" inline-block px-6 py-2.5 bg-black text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none transition duration-150 ease-in-out"
          @click="confirmToPay">確認付款</button>
      </div>
    </div>
    <info-modal class="infoModal" ref="infoModal" :content="messageContent" @hide-modal="hideInfoModal" />
  </main>
</template>

<script>

import dayjs from 'dayjs/esm/index.js';
import helper from '@/assets/js/helper';
// import { ref, onMounted } from 'vue';
import { useApiModal } from '~~/composables/useApiModal';
import useStore from '@/store';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const { hideInfoModal, infoModal, getCart, cartProducts, finalTotal, totalQty } = useApiModal();
    const { userStore } = useStore();
    // const store = userStore();
    const { messageContent } = storeToRefs(userStore);

    // 使用者輸入

    const userInput = ref({
      userName: '',
      phone: '',
      email: '',
      address: '',
    })

    const userInputForm = ref(null);
    // 自訂驗證
    function verifyPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) && value.length >= 8 && value.length <= 10 ? true : '需要正確的電話號碼';
    }
    // 確認付款
    async function confirmToPay() {
      const res = await userInputForm.value.validate();
      // console.log(res, res.valid);
      if (res.valid) {
        userStore.$patch((state) => { state.messageContent.message = '驗證無誤' });

      } else {
        userStore.$patch((state) => { state.messageContent.message = '填寫有誤' });
      }
      infoModal.value.openModal();

    }

    onMounted(() => {
      getCart();
    });

    return {
      messageContent,
      hideInfoModal,
      infoModal,
      cartProducts,
      finalTotal,
      dayjs,
      helper,
      totalQty,
      confirmToPay,
      userInput,
      verifyPhone,
      userInputForm
    }

  },
}
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  color: rgb(51, 51, 51);
}

.accordion-button:not(.collapsed)::after {
  display: none;
}
</style>