<template>
  <NuxtLayout>
    <main class="mx-auto px-4 w-full">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<script lang="ts"></script>

<script setup lang="ts">
import 'tw-elements';
import { onMounted } from 'vue'
import store from '@/store'

const { app } = store()
const initApp = () => {
  app.getLanguageBasedOnBrowser()
}

onMounted(() => {
  // avoid hydrate error between server and client
  initApp()
})
</script>
