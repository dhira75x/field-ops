<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const expandWorkplaceTab = ref(false)
const expandObligationTab = ref(false)
const expandBPD = ref(false)
const isAdmin = ref(false)

onMounted(() => {
  userStore.checkRole()
  isAdmin.value = userStore.isAdmin
})
</script>

<template lang="">
  <aside class="fixed top-0 left-0 h-screen w-[260px] bg-[#0F151F] px-4 py-12">
    <img src="../assets/legend_rev.svg" alt="Home" />
    <div class="mt-5 text-center text-gray-500 flex items-center justify-center my-2">
      <img src="../assets/Fiber Technician.svg" />
      {{ userStore.$state.user ? userStore.$state.user.role.toUpperCase() : null }}
    </div>
    <ul class="font-sm mt-10 text-[#B3B3B3] h-full overflow-y-scroll">
      <li class="cursor-pointer p-4">
        <div class="flex items-center justify-between">
          <router-link :to="{ path: '/pages/MyWorkPlace' }">
            <div class="flex items-center">
              <img src="../assets/dashboard.svg" alt="dashboard" />
              <span class="ml-3">My Workplace</span>
            </div>
          </router-link>
          <img src="@/assets/chevron.svg" :class="{ 'rotate-180': expandWorkplaceTab === false }" />
        </div>
        <ul v-if="expandWorkplaceTab" class="mt-4 text-start">
          <li class="rounded-lg bg-opacity-10 p-3" :class="{ 'bg-white': $route.name === 'home' }">
            <router-link :to="{ path: '/' }">Reports</router-link>
          </li>
          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'collaboration' }"
          >
            <router-link :to="{ path: '/' }">Collaboration</router-link>
          </li>

          <!-- <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'approvals' }"
          >
            <router-link :to="{ path: '/' }">Approvals</router-link>
          </li> -->

          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{
              'bg-white': $route.name === 'requests' || $route.name === 'expenditureRequest'
            }"
          >
            <router-link :to="{ path: '/' }">Requests</router-link>
          </li>

          <!-- <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'closeout-report' }"
          >
            <router-link :to="{ path: '/' }">Close Out Reports</router-link>
          </li> -->
        </ul>
      </li>

      <li v-if="userStore.userHasRole('BPU')" class="cursor-pointer p-4">
        <div class="flex items-center justify-between" @click="expandBPD = !expandBPD">
          <div class="flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3190_67474)">
                <path
                  d="M2.14279 19.2857L17.8571 19.2857C18.6461 19.2857 19.2856 18.6461 19.2856 17.8571L19.2856 2.14285C19.2856 1.35387 18.6461 0.714275 17.8571 0.714275L2.14279 0.714275C1.35381 0.714275 0.714216 1.35387 0.714216 2.14285L0.714216 17.8571C0.714216 18.6461 1.35381 19.2857 2.14279 19.2857Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.28564 4.28571H7.14279M4.28564 7.85713H10.7142M16.4285 7.85713L13.1501 13.3211C12.5904 14.254 11.3875 14.5684 10.4429 14.0286L8.76364 13.069C7.85097 12.5475 6.69034 12.8215 6.10726 13.6961L4.28564 16.4286"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3190_67474">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span class="ml-3">BPAD</span>
          </div>
          <img src="../assets/chevron.svg" :class="{ 'rotate-180': expandBPD === false }" />
        </div>
        <ul v-if="expandBPD" class="mt-4 text-start">
          <li class="rounded-lg bg-opacity-10 p-3" :class="{ 'bg-white': $route.name === 'BPD' }">
            <router-link :to="{ path: '/' }">Analysis & Visualization</router-link>
          </li>
        </ul>
      </li>
      <li
        v-if="userStore.userHasRole('BPU')"
        class="rounded-lg bg-opacity-10 p-3 ml-1"
        :class="{ 'bg-white': $route.name === 'operation-planning' }"
      >
        <router-link :to="{ path: '/' }" class="flex space-x-3">
          <img src="@/assets/barchart.svg" alt="" />
          <span> Operations Planning</span>
        </router-link>
      </li>

      <li
        v-if="userStore.userHasRole('BPU')"
        class="rounded-lg bg-opacity-10 p-3 ml-1"
        :class="{ 'bg-white': $route.name === 'operation-management' }"
      >
        <router-link :to="{ paht: '/' }" class="flex space-x-3">
          <img src="@/assets/barchart.svg" alt="" />
          <span> Operations Management</span>
        </router-link>
      </li>

      <li
        v-if="userStore.userHasRole('Sales Manager') || userStore.userHasRole('Sales Officer')"
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'Sales & Marketing Performance' }"
      >
        <router-link :to="{ path: '/' }" class="flex items-center">
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3">Dashboard</span>
        </router-link>
      </li>

      <li
        v-if="userStore.userHasRole('Key Account Executive/DIP- Medium Enterprise')"
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'My Accounts' }"
      >
        <router-link :to="{ path: '/' }" class="flex items-center">
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3"> Obligations</span>
        </router-link>
      </li>

      <li
        v-if="userStore.userHasRole('Sales Manager') || userStore.userHasRole('Sales Officer')"
        class="cursor-pointer p-4"
      >
        <div
          class="flex items-center justify-between"
          @click="expandObligationTab = !expandObligationTab"
        >
          <div class="flex items-center">
            <img src="../assets/dashbord-icon.svg" alt="dashboard" />
            <span class="ml-3">Obligations</span>
          </div>
          <img
            src="../assets/chevron.svg"
            :class="{ 'rotate-180': expandObligationTab === false }"
          />
        </div>

        <ul v-if="expandObligationTab" class="mt-4 text-start">
          <li class="rounded-lg bg-opacity-10 p-3" :class="{ 'bg-white': $route.name === 'Leads' }">
            <router-link :to="{ path: '/' }">Lead Management</router-link>
          </li>

          <li
            v-if="userStore.userHasRole('Sales Manager')"
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'Account Managers' }"
          >
            <router-link :to="{ path: '/' }">Account Management</router-link>
          </li>

          <li
            v-if="userStore.userHasRole('Sales Officer')"
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'manager details' }"
          >
            <router-link :to="{ path: '/' }">Account Management</router-link>
          </li>

          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'Sales Orders' }"
          >
            <router-link :to="{ name: '/' }">Sales Management</router-link>
          </li>
        </ul>
      </li>

      <li
        v-if="
          userStore.userHasRole('Customer Support Supervisor') ||
          userStore.userHasRole('Customer Support Officers') ||
          userStore.userHasRole('Customer Support')
        "
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'dashboard' }"
      >
        <router-link :to="{ path: isAdmin ? '/' : '/' }" class="flex items-center">
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3">Obligations</span>
        </router-link>
      </li>

      <li
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'customerDatabase' }"
      >
        <router-link :to="{ path: '../pages/ObligationSchedule.vue' }" class="flex items-center">
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3">Obligations</span>
        </router-link>
      </li>
      <li
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'conversations' }"
      >
        <router-link :to="{ path: '../pages/HelpCenter.vue' }" class="flex items-center">
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3">Help Center</span>
        </router-link>
      </li>
      <!-- <li class="rounded-lg bg-opacity-10 p-4">
        <a href="#" class="flex items-center">
          <img src="../assets/user-inactive.svg" alt="Network Management" />
          <span class="ml-3">Notifications</span>
        </a>
      </li> -->
    </ul>
  </aside>
</template>

<style lang=""></style>
