<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppVerticalNavigation />
        <div class="grid grid-cols-2 my-3">
          <div>
            <ChevronBack />
          </div>
          <div>
            <ButtonSubmit @submit="(value)=>{submitForm=value}" />
          </div>
        </div>
        <div>
          <ButtonOrder :id="route.params.id" />
        </div>
        <div class="my-3 mx-10">
          <SurveyReportForm :submitForm="submitForm" />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppVerticalNavigation from '../components/AppHorizontalNavigation.vue'
import ButtonOrder from '../components/ButtonOrder.vue'
import ChevronBack from '../components/ChevronBack.vue'
import ButtonSubmit from '../components/ButtonSubmit.vue'
import SurveyReportForm from '../components/SurveyReportForm.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const submitForm=ref(false);
const route=useRoute();
</script>
