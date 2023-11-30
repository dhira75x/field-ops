<script setup>
import AppHorizontalNavigation from "@/components/AppHorizontalNavigation.vue";
import AppModal from "@/components/AppModal.vue";
import { ref } from "vue";
const newLog = ref(false);
</script>

<template>
  <div>
    <app-layout>
      <template v-slot:main-content>
        <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
          <AppHorizontalNavigation />
          <button @click="newLog=!newLog">
            Open Modal
          </button>
          <AppModal v-if="newLog" class="flex flex-row w-2/4">
            <template #modal-content>
              <form @submit.prevent="saveConversation" class="w-full">
                <button
                  class="ml-auto grid h-10 w-10 place-content-center rounded-full my-6 border border-primary text-xl text-primary"
                  type="button"
                  @click="newLog=!newLog"
                >
                  𝖷
                </button>
                <div class="flex justify-center items-center my-5 space-x-6">
                  <button
                    type="submit"
                    id="createLeadButton"
                    class="bg-red-600 text-white px-6 py-2 rounded-md"
                  >
                    <p>Save</p>
                  </button>
                  <button
                    @click="$emit('toggleCommentForm', false)"
                    class="border border-gray-400 px-6 py-2 rounded-md"
                  >
                    <p>Cancel</p>
                  </button>
                </div>
              </form>
            </template>
          </AppModal>
        </main>
      </template>
    </app-layout>
  </div>
</template>
