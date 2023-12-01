<template>
  <div class="flex justify-center min-h-screen place-items-center">
    <div class="w-[378px] shadow-2xl min-h-[620px] flex justify-center">
      <div class="w-3/4">
        <div
          class="text-legend-black text-left justify-start text-2xl font-bold font-['Source Sans Pro']"
        >
          Confirm Resolution
        </div>
        <div class="w-full justify-center items-center">
          <div
            class="text-center text-base text-black text-[25px] my-16 font-semibold font-['Source Sans Pro'] leading-normal"
          >
            What is the status of the work?
          </div>
        </div>
        <div class="my-16">
          <div class="w-full flex justify-center">
            <router-link to="/pages/FaultResolutionReport">
              <button
                class="focus:outline-none w-[300px] h-[60px] my-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-semibold font-['Source Sans Pro'] rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Completed
              </button>
            </router-link>
          </div>
          <div class="w-full flex justify-center">
            <router-link to="/pages/FaultResolutionReport">
              <button
                class="focus:outline-none w-[300px] h-[60px] my-2 text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-semibold font-['Source Sans Pro'] rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600"
              >
                Ongoing
              </button>
            </router-link>
          </div>
          <div class="w-full flex justify-center">
            <button
              class="focus:outline-none w-[400px] h-[60px] my-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-semibold font-['Source Sans Pro'] rounded-lg text-lg px-7 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              @click="showNoFaultConfirmationModal = !showNoFaultConfirmationModal"
            >
              Not Completed
            </button>
          </div>
        </div>
      </div>
      <AppModal
        v-if="showNoFaultConfirmationModal"
        @click="showNoFaultConfirmationModal = !showNoFaultConfirmationModal"
      >
        <template #modal-content>
          <NoFaultConfirmation />
        </template>
      </AppModal>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const showNoFaultConfirmationModal = ref(false)
//import { ref } from 'vue'
//import { useRouter } from 'vue-router'
import AppModal from '../components/AppModal.vue'
import NoFaultConfirmation from '../pages/NoFaultConfirmation.vue'
</script>
<style scoped></style>
