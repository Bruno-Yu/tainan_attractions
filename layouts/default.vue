<template>
  <div class="default-layout">
    <!-- front navbar -->
      <nav class="
    relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-gray-100
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg
    navbar navbar-expand-lg navbar-light
    ">
    <div class="container-fluid w-full flex flex-wrap items-center px-6">
      <button class="
        navbar-toggler
        text-gray-500
        border-0
        hover:shadow-none hover:no-underline
        py-2
        px-2.5
        bg-transparent
        focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
      " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-6" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
          </path>
        </svg>
      </button>
      <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
        <NuxtLink class=" 
          flex
          items-center
          text-gray-900
          hover:text-gray-900
          focus:text-gray-900
          mt-2
          lg:mt-0
          mr-auto
        " to="/" exact-active-class="no-active">
          府城印象
        </NuxtLink>
        <!-- Left links -->
        <ul class="navbar-nav flex flex-col pl-0 list-style-none ms-auto">
          <li class="nav-item p-2">
            <NuxtLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/frontStage">首頁
            </NuxtLink>
          </li>
          <li class="nav-item p-2">
            <NuxtLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/frontStage/attractionsView">體驗
            </NuxtLink>
          </li>
          <!-- <li class="nav-item p-2">
            <RouterLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="shoppingCart">購物車
            </RouterLink>
          </li> -->
          <li class="nav-item dropdown relative">
            <a class="dropdown-toggle pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
              href="#" type="button" id="dropdownMenuButton1" aria-expanded="false"
              @click.prevent="toggleCartDropdown">購物車
            </a>
            <div ref="cartDropdown" class="
              dropdown-menu
              min-w-max
              absolute
              bg-white
              text-base
              hidden
              z-50
              w-[20rem]
              top-10
              left-[-10rem]
              p-4
              list-none
              text-left
              rounded-sm
              shadow-lg
              mt-1
              m-0
              bg-clip-padding
              border-none
            " aria-labelledby="dropdownMenuButton2">
              <h3 class="text-center my-2">購物車</h3>
              <div v-if="cartProducts">
                <ul class="border rounded p-2">
                  <li v-for="(item) in cartProducts" :key="item.id" class="flex justify-center w-full">
                    <div class="flex flex-row rounded-lg bg-white shadow  w-full">
                      <div class="p-1">
                        <img class="w-20 h-20 object-cover rounded " :src="item.product.imageUrl"
                          :alt="item.product_id" />
                      </div>
                      <div class="p-2 flex flex-col justify-start w-full relative">
                        <div class="flex justify-between items-center">
                          <div>
                            <h5 class="text-gray-900 font-medium mb-2">{{ item.product.title }}</h5>
                            <div class="flex justify-between items-center">
                              <p class="text-gray-600 text-xs">2023-01-23</p>
                              <p class="text-gray-600 text-xs">成人 x{{ item.qty }} </p>
                            </div>
                          </div>
                          <font-awesome-icon class="w-5 h-5 text-gray-600" icon="fa-regular fa-trash-can"
                            @click="deleteCartProduct(item.id)"></font-awesome-icon>
                        </div>
                        <p class="text absolute right-1 bottom-1">TWD {{ finalTotal }}</p>
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="flex justify-between mt-2">
                  <p>共計{{ cartProducts?.length || 0 }} 件</p>
                  <button type="button"
                    class=" inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none transition duration-150 ease-in-out"
                    @click="goToOrdersView">立即購買</button>
                </div>
              </div>
              <div v-else>
                <div class="border rounded p-2 text-center flex items-center justify-center">
                  <p>目前購物車尚無商品</p>
                </div>
              </div>
            </div>
          </li>
          <!-- <RouterLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="shoppingCart">購物車
            </RouterLink> -->
          <li class="nav-item p-2">
            <NuxtLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/frontStage/ordersView">訂購
            </NuxtLink>
          </li>
          <li class="nav-item p-2">
            <NuxtLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/frontStage/loginView">登入
            </NuxtLink>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">註冊</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
    </div>
  </nav>
<!-- 內容 -->
<div class="container mx-auto">
    <slot />
</div>
    <!-- footer -->
      <footer>
    <p class="mx-auto py-3 text-gray-400 border-0 border-t border-solid border-gray-300 text-center">
      府城印象 @copyRight
    </p>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<script setup>
import { useApiModal } from '~~/composables/useApiModal';
// import { onMounted, ref } from 'vue';
// // import { useRouter } from 'vue-router';

    const { getCart, cartProducts, finalTotal, deleteCartProduct } = useApiModal();

//     // 購物車下拉表單
    const cartDropdown = ref(null);
    function toggleCartDropdown() {
      cartDropdown.value.classList.toggle('hidden');
    }

//     // const router = useRouter();
    function goToOrdersView() {
      toggleCartDropdown();
      navigateTo({ path: '/orders' });
    }

    onMounted(() => {
      getCart();
    });

</script>


<style scoped lang="scss" src="@/assets/styles/default_layout.scss" />
