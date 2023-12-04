<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import workplaceRequests from '@/service/workplaceRequests'

const router = useRouter()
const store = useUserStore()
const notAuth = ref(false)
const loginFailed = ref(false)
const loading = ref(false)
const email = ref('')
const password = ref('')

const login = async () => {
  try {
    if (!email.value || !password.value || loading.value) {
      return
    }

    loading.value = true
    const { status, data } = await workplaceRequests('post', 'login', {
      email: email.value,
      password: password.value
    })

    if (status != 200) {
      loginFailed.value = true
      loading.value = false
      setTimeout(() => (loginFailed.value = false), 4000)
    }
    if (data.data === 'undefined') {
      loginFailed.value = true
      loading.value = false
      setTimeout(() => (loginFailed.value = false), 4000)
    }

    if (data.data != null && !store.hasRole(data.data?.role)) {
      loading.value = false
      store.updateIsAuthenicated(false)
      notAuth.value = true
      setTimeout(() => (notAuth.value = true), 3000)
      alert(data.data.role + ' not permitted')
      return
    }
    let category = data.data?.category
    if (category === 'BOTH' || category === 'LEGEND USER') {
      loading.value = false
      store.updateIsAuthenicated(true)
      store.$state.token = data.token
      store.$state.user = data.data
      router.push({ name: 'home' })
    } else if (status === 200 && (category === '' || category === 'SUBURBAN USER')) {
      loading.value = false
      store.updateIsAuthenicated(false)
      notAuth.value = true
      setTimeout(() => (notAuth.value = false), 3000)
      alert('not a legend user')
    }
  } catch (e) {
    alert(e.message)
  }

  // if (status === 401) {
  //   loginFailed.value = true
  //   loading.value = false
  //   setTimeout(() => (loginFailed.value = false), 4000)
  // }
}
</script>

<template>
  <main
    class="relative grid h-screen place-content-center place-items-center"
    style="
      background-image: url('../assets//loginbg.svg');
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <svg
      class="h-[auto] w-full absolute left-0 top-[537px] overflow-visible"
      style=""
      width="full"
      height="487"
      viewBox="0 0 1440 487"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0L1512 344.227V477H24V0Z" fill="#FD4F00" />
      <path d="M0 2L1512 352V487H0V2Z" fill="#F0E3DE" />
      <path d="M297.85 66L1186.15 271.67V351H297.85V66Z" fill="#F0E3DE" />
    </svg>
    <div
      v-if="loginFailed"
      class="bg-[url('@/assets/login-bg1.svg')] absolute top-20 right-32 grid h-14 w-40 place-content-center bg-gray-700 text-lg font-medium text-white"
    >
      <span>Login failed</span>
    </div>
    <img src="@/assets/legend.svg" alt="Legend home page" />

    <form class="mt-8 w-full bg-white px-20 py-14 shadow-md" @submit.prevent="login">
      <h1 class="mb-2 text-center text-2xl font-bold">WorkPlace</h1>
      <p class="mb-8 text-center">Enter your credentials below</p>
      <div class="my-6 w-[369px]">
        <label class="mb-1 block font-semibold">Email</label>
        <input
          v-model="email"
          type="text"
          placeholder="name@legend.ng"
          class="block w-full rounded border border-gray-300 p-2 focus:outline-none"
        />
      </div>
      <div class="relative my-6">
        <label class="mb-1 block font-semibold">Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="*************"
          class="block w-full rounded border border-gray-300 p-2 focus:outline-none"
        />
      </div>
      <div class="my-3 flex items-center justify-between text-sm">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2" />
          <label>Remember me</label>
        </div>
        <!-- <a href="#">Recover Password?</a> -->
      </div>
      <button
        class="bg-orange-500 w-[340px] h-[50px] items-center rounded-md py-3 mt-10 cursor cursor-pointer text-center text-white"
      >
        <label for="submit">LOGIN</label>
        <input
          type="submit"
          :value="loading ? 'Loading...' : 'Login'"
          :disabled="loading"
          :class="{ 'cursor-not-allowed bg-orange-500 text-white': loading }"
        />
      </button>
    </form>
  </main>
</template>
