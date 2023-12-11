<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <div class="grid grid-cols-2 my-3">
          <router-link to="/pages/ObligationSchedule">
            <ChevronBack />
          </router-link>
          <div>
            <ButtonSubmit />
          </div>
        </div>
        <div>
          <FaultDiagnosisTab class="mx-10" />
        </div>
        <div>
          <FaultDiagnosisReport />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import ButtonSubmit from '../components/ButtonSubmit.vue'
import ChevronBack from '../components/ChevronBack.vue'
import FaultDiagnosisTab from '../components/FaultDiagnosisTab.vue'
import FaultDiagnosisReport from '../components/FaultDiagnosisReport.vue'
</script>
