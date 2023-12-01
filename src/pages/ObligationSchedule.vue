<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <div>
          <TopBar class="my-10 mx-20" />
        </div>
        <div class="m-24">
          <ScheduleList1 />
        </div>
        <div class="mx-24 my-36">
          <ScheduleList2 />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
// import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import ScheduleList1 from '../components/ScheduleList1.vue'
import ScheduleList2 from '../components/ScheduleList2.vue'
import TopBar from '../components/TopBar.vue'
</script>
<style scoped></style>
