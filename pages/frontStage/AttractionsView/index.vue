<template>
  <main>
    <!-- headings -->
    <header>
      <!-- Background image -->
      <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
        background-position: 50%;
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
        height: 350px;
      ">
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style="background-color: rgba(0, 0, 0, 0.75)">
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h1 class="text-5xl font-bold mt-0 mb-6">Heading</h1>
              <h3 class="text-3xl font-bold mb-8">Subeading</h3>
              <button type="button"
                class="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Background image -->
    </header>
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-1">
        <div class="flex flex-col">
          <!-- date picker -->
          <date-picker :enable-time-picker="false" placeholder="選擇出發日期" />
          <!-- filter -->
          <div class="flex justify-center mt-4 w-full">
            <div class="block max-w-sm rounded-lg w-full bg-white p-3 border border-black dark:bg-neutral-700">
              <h5 class="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                景點門票
              </h5>
              <div class="flex items-center ml-[2rem] min-h-[1.5rem] pl-[1.5rem]">
                <input
                  class="relative float-left  mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                  type="checkbox" value="" id="checkboxDefault" />
                <label class="inline-block font-bold text-base pl-[0.15rem] hover:cursor-pointer" for="checkboxDefault">
                  博物館
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div class="grid grid-cols-3 gap-4 my-5">
          <!-- cards -->
          <div v-for=" (item) in products" :key="item.id" class="flex justify-center ">
            <div class="rounded-lg shadow-lg bg-white w-full">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img class="rounded-t-lg h-40 w-full object-cover" :src="item.imageUrl" :alt="item.id" />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{ item.title }}</h5>
                <div class="flex justify-end">
                  <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    @click.prevent="addToCart(item.id)">加入購物車</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <info-modal class="infoModal" ref="infoModal" :content="messageContent" @hide-modal="hideInfoModal" />
  </main>
</template>

<script>
import atrApi from '@/assets/js/api/atrApi.js';
// import { ref, onMounted } from 'vue';
import { useApiModal } from '~~/composables/useApiModal';
import useStore from '@/store';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    // const store = userStore();
    const { userStore } = useStore();
    const { messageContent } = storeToRefs(userStore);
    const { hideInfoModal, infoModal } = useApiModal();

    const products = ref([]);
    const pagination = ref([]);
    // 管理員取得產品資料
    async function getProducts(page = 1, category = '') {
      const res = await atrApi.getProducts(page, category);
      if (res.success) {
        products.value = JSON.parse(JSON.stringify(res.products));
        pagination.value = JSON.parse(JSON.stringify(res.pagination));

      } else {
        if (typeof res.response.data.message === 'string') {
          userStore.$patch((state) => { state.messageContent.message = res.response.data.message })
        } else {
          userStore.$patch((state) => { state.messageContent.message = res.response.data.message.join(', ') })
        }
      }
    }

    // 加入購物車
    async function addToCart(product_id, qty = 1) {
      const data = {
        product_id, qty
      }
      const res = await atrApi.addToCart({ data });
      if (res.success) {
        // console.log(res);
        userStore.$patch((state) => { state.messageContent.message = res.message });
      } else {
        if (typeof res.response.data.message === 'string') {
          userStore.$patch((state) => { state.messageContent.message = res.response.data.message })
        } else {
          userStore.$patch((state) => { state.messageContent.message = res.response.data.message.join(', ') })
        }
      }
      infoModal.value.openModal();
    }

    onMounted(() => {
      getProducts();
    });

    return {
      products,
      pagination,
      messageContent,
      getProducts,
      addToCart,
      hideInfoModal,
      infoModal
    }

  },
}
</script>