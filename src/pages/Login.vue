<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import workplaceRequests from "@/service/workplaceRequests";

const router = useRouter();
const store = useUserStore();
const notAuth = ref(false);
const loginFailed = ref(false);
const loading = ref(false);
const email = ref("");
const password = ref("");

const login = async () => {
  try {
    if (!email.value || !password.value || loading.value) {
      return;
    }

    loading.value = true;
    const { status, data } = await workplaceRequests("post", "login", {
      email: email.value,
      password: password.value,
    });

    if (status != 200) {
      loginFailed.value = true;
      loading.value = false;
      setTimeout(() => (loginFailed.value = false), 4000);
    }
    if (data.data === "undefined") {
      loginFailed.value = true;
      loading.value = false;
      setTimeout(() => (loginFailed.value = false), 4000);
    }

    if (data.data != null && !store.hasRole(data.data?.role)) {
      loading.value = false;
      store.updateIsAuthenicated(false);
      notAuth.value = true;
      setTimeout(() => (notAuth.value = true), 3000);
      alert(data.data.role + " not permitted");
      return;
    }
    let category = data.data?.category;
    if (category === "BOTH" || category === "LEGEND USER") {
      loading.value = false;
      store.updateIsAuthenicated(true);
      store.$state.token = data.token;
      store.$state.user = data.data;
      router.push({ name: "home" });
    } else if (
      status === 200 &&
      (category === "" || category === "SUBURBAN USER")
    ) {
      loading.value = false;
      store.updateIsAuthenicated(false);
      notAuth.value = true;
      setTimeout(() => (notAuth.value = false), 3000);
      alert("not a legend user");
    }
  } catch (e) {
    alert(e.message)
  }

  // if (status === 401) {
  //   loginFailed.value = true
  //   loading.value = false
  //   setTimeout(() => (loginFailed.value = false), 4000)
  // }
};
</script>

<template>
  <main class="relative grid h-screen place-content-center place-items-center">
    <div
      v-if="loginFailed"
      class="absolute top-20 right-32 grid h-14 w-40 place-content-center bg-gray-700 text-lg font-medium text-white"
    >
      <span>Login failed</span>
    </div>
    <img src="../assets/legend-logo.svg" alt="Legend home page" />

    <form
      class="mt-8 w-full bg-white px-20 py-14 shadow-md"
      @submit.prevent="login"
    >
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
      <input
        type="submit"
        :value="loading ? 'Loading...' : 'Login'"
        :disabled="loading"
        class="mt-10 block w-full cursor-pointer rounded-md bg-primary py-3 text-center text-white"
        :class="{ 'cursor-not-allowed bg-gray-400 text-white': loading }"
      />
    </form>
  </main>
</template>
