<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="static min-h-screen w-screen bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-5">
          <div>
            <TopBar @setActiveTab="(value)=>{activeTab=value}" :items="navItems" class="mx-10 mt-5 w-screen" />
          </div>
          <div v-if="activeTab==1">
            <ScheduleList1 class="m-10 w-screen" />
          </div>
          <div v-if="activeTab==1">
            <ScheduleList2 class="mx-10 my-36 w-screen" />
          </div>
          <div v-if="activeTab==2" class="my-10">
            <ObligationConfirmationList ></ObligationConfirmationList>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
// import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import { ref } from 'vue'
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
//import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import ScheduleList1 from '@/components/ScheduleList1.vue'
import ScheduleList2 from '@/components/ScheduleList2.vue'
import TopBar from '@/components/TopBar.vue'
import ObligationConfirmationList from '@/components/ObligationConfirmationList.vue'
const activeTab=ref(1);
const navItems = [
    { id: 1, label: "My Schedule" },
    { id: 2, label: "Confirmations" },
  
  ];
</script>
<style scoped></style>
