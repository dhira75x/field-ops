<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { RouterLink } from 'vue-router'
const viewProfileOption = ref(false)
const store = useUserStore()

const logout = () => {
  store.logout()
  // router.push({ name: 'home' })
}
</script>

<template lang="">
  <header
    class="sticky top-0 z-40 flex w-full items-center justify-between bg-white py-7 px-10 shadow-md"
  >
    <h1 class="text-2xl font-bold">Obligations</h1>
    <div class="relative flex items-center">
      <div class="relative">
        <img src="../assets/bell.svg" alt="notifications" />
        <div
          class="min-w-5 absolute -top-3 -right-2 grid h-5 place-content-center rounded-full bg-red-600 p-1 text-xs text-white"
        >
          26
        </div>
      </div>
      <div
        class="ml-10 mr-3 h-10 w-10 rounded-full border-2 border-gray-400"
        @click.stop="viewProfileOption = !viewProfileOption"
      ></div>

      <div
        v-if="store.$state.user"
        class="mx-4"
        @click.stop="viewProfileOption = !viewProfileOption"
      >
        <div class="text-lg font-semibold">
          {{ store.$state.user ? store.$state.user.name : null }}
        </div>
        <div class="text-xs font-semibold capitalize text-primary">
          {{ store.$state.user.position }}
        </div>
      </div>

      <img
        src="../assets/chevron-black.svg"
        alt="veiw profile"
        class="w-3"
        @click.stop="viewProfileOption = !viewProfileOption"
      />
      <ul
        v-if="viewProfileOption"
        class="absolute top-full right-0 w-40 cursor-pointer rounded border border-gray-300 bg-white capitalize"
      >
        <li class="p-3" :class="{ 'text-red-600': $route.name === 'myProfile' }">
          <router-link :to="{ name: 'myProfile' }">profile</router-link>
        </li>
        <li class="cursor-pointer py-2 px-3 text-primary hover:bg-gray-200" @click="logout">
          logout
        </li>
      </ul>
    </div>
  </header>
</template>
