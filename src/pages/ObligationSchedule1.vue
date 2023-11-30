<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <div>
          <TopBar class="my-10 mx-20" />
        </div>
        <div class="my-10 mx-20">
          <ScheduleList3 />
        </div>
        <div class="my-32 mx-20">
          <ScheduleList4 />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
// import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import ScheduleList3 from '../components/ScheduleList3.vue'
import ScheduleList4 from '../components/ScheduleList4.vue'
import TopBar from '../components/TopBar.vue'
</script>
<style scoped></style>
