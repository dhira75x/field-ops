<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <div>
          <AppVerticalNavigation />
          <TopBar class="my-10 mx-10" />
        </div>
        <div class="m-10 w-full">
          <ScheduleList1 />
        </div>
        <div class="mx-10 my-24 w-full">
          <ScheduleList2 />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
// import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import ScheduleList1 from '../components/ScheduleList1.vue'
import ScheduleList2 from '../components/ScheduleList2.vue'
import TopBar from '../components/TopBar.vue'
</script>
<style scoped></style>
