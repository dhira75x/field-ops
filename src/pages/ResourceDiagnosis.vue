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
            <ButtonSubmit />
          </div>
        </div>
        <div>
          <DiagnosisButton :id="route?.params?.id2" />
        </div>
        <div class="my-3 mx-10">
          <ResourceDiagnosis />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppVerticalNavigation from '../components/AppHorizontalNavigation.vue'
import DiagnosisButton from '../components/DiagnosisButton.vue'
import ChevronBack from '../components/ChevronBack.vue'
import ButtonSubmit from '../components/ButtonSubmit.vue'
//import FormFill from '../components/FormFill.vue'
import ResourceDiagnosis from '../components/ResourceDiagnosis.vue'
import { useRoute } from 'vue-router'
const route=useRoute();
</script>
