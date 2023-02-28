<template>
  <div>
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable"
      aria-modal="true" role="dialog" ref="modal">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
        <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯產品</span>
            </h5>
            <button type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body relative p-4">
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-4  flex justify-center">
                <div class="mb-3 xl:w-96">
                  <label for="imgUrl" class="form-label inline-block mb-2 text-gray-700">輸入圖片網址</label>
                  <input type="url" class="
                      form-control
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
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    " id="imgUrl" v-model="tempProduct.imageUrl" placeholder="請輸入圖片網址" />
                  <img class="w-full h-auto block mt-2" :src="tempProduct.imageUrl" :alt="tempProduct.imageUrl">
                </div>
                <!-- <div class="flex justify-center">
                  <div class="mb-3 w-96">
                    <label for="imgUpload" class="form-label inline-block mb-2 text-gray-700">或 上傳圖片</label>
                    <div v-if="imgUploadLoading"
                      class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <input class="form-control
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file"
                      @change="uploadImg" id="imgUpload">
                  </div>
                </div> -->
              </div>
              <div class="col-span-8">
                <div class="flex justify-center">
                  <div class="mb-3 xl:w-96">
                    <label for="title" class="form-label inline-block mb-2 text-gray-700">標題</label>
                    <input type="text" class="
                        form-control
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      " id="title" v-model="tempProduct.title" placeholder="請輸入標題" />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                      <label for="title" class="form-label inline-block mb-2 text-gray-700">評分</label>

                      <!-- <star-rating :star-size="20" :animate="true" :increment="0.5"
                        v-model:rating="tempProduct.rating"></star-rating> -->

                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                      <label for="category" class="form-label inline-block mb-2 text-gray-700">剩餘</label>
                      <input type="text" class="
                          form-control
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        " id="category" v-model="tempProduct.num" placeholder="請輸入剩餘數量" min=0 />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                      <label for="category" class="form-label inline-block mb-2 text-gray-700">分類</label>
                      <input type="text" class="
                          form-control
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        " id="category" v-model="tempProduct.category" placeholder="請輸入分類" />
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                      <label for="unit" class="form-label inline-block mb-2 text-gray-700">單位</label>
                      <input type="text" class="
                          form-control
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        " id="unit" v-model="tempProduct.unit" placeholder="請輸入單位" />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                      <label for="originPrice" class="form-label inline-block mb-2 text-gray-700">原價</label>
                      <input type="number" class="
                          form-control
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        " id="originPrice" v-model.number="tempProduct.origin_price" placeholder="請輸入原價" min=0 />
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                      <label for="price" class="form-label inline-block mb-2 text-gray-700">售價</label>
                      <input type="number" class="
                          form-control
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        " id="price" v-model="tempProduct.price" placeholder="請輸入售價" min=0 />
                    </div>
                  </div>
                </div>
                <hr />
                <div class="flex justify-center">
                  <div class="mb-3 xl:w-96">
                    <label for="briefDescription" class="form-label inline-block mb-2 text-gray-700">景點簡述</label>
                    <textarea class="
                        form-control
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      " id="briefDescription" rows="3" v-model="tempProduct.description"
                      placeholder="請輸入景點簡述"></textarea>
                  </div>
                </div>
                <div class="flex justify-center">
                  <div class="mb-3 xl:w-96">
                    <label for="description" class="form-label inline-block mb-2 text-gray-700">景點說明</label>
                    <textarea class="
                        form-control
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      " id="description" rows="3" v-model="tempProduct.content" placeholder="請輸入景點說明"></textarea>
                  </div>
                </div>
                <div class="flex">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                      type="checkbox" role="switch" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0"
                      id="activate">
                    <label class="form-check-label inline-block text-gray-800" for="activate">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button"
              class="inline-block px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal">
              取消
            </button>
            <button type="button"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              @click="confirm(tempProduct)">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'tw-elements/dist/src/js/bs/src/modal';

export default {
  props: {
    currentItem: {
      type: Object,
      default: () => { }
    },
    isNew: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const { currentItem, isNew } = toRefs(props);
    const emptyBlank = {
      title: '',
      category: '',
      rating: 0,
      description: '',
      price: 0,
      num: 0,
      origin_price: 0,
      imagesUrl: [],
      imageUrl: '',
      is_enabled: 0,
    };
    // 只有 tempProduct 1個原始值
    const rating = ref(0);
    const tempProduct = ref({});
    const imgUploadLoading = ref(false);

    function uploadImg() { }
    // modal
    const modal = ref(null);
    const bsModal = ref(null);

    function openModal() {
      bsModal.value.show();
    }
    function hideModal() {
      bsModal.value.hide();
    }
    function confirm(product) {
      if (isNew.value) {
        emit('add-product', product)
        tempProduct.value = { ...emptyBlank };
      } else {
        emit('update-product', product);
        tempProduct.value = { ...emptyBlank };
      }
    }
    watchEffect(() => {
      if (isNew.value) {
        tempProduct.value = { ...emptyBlank };
      } else {
        tempProduct.value = { ...currentItem.value };
      }
    })

    onMounted(() => {
      // onMount,  onBeforeMount 只有第一次觸發時建立只被觸發一次, 之後呼叫 modal 不會重新建立所以部會被觸發
      // 只有onMounted可以處理dom掛載
      bsModal.value = new Modal(modal.value);
    })

    return {
      tempProduct,
      uploadImg,
      imgUploadLoading,
      modal,
      openModal,
      hideModal,
      confirm,
      rating,
    }
  }

}




</script>