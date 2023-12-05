<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="static min-h-screen w-screen bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10">
          <div>
            <TopBar class="mx-10 mt-16 w-screen" />
          </div>
          <div>
            <ScheduleList1 class="m-10 w-screen" />
          </div>
          <div>
            <ScheduleList2 class="mx-10 my-36 w-screen" />
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
// import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
//import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import ScheduleList1 from '../components/ScheduleList1.vue'
import ScheduleList2 from '../components/ScheduleList2.vue'
import TopBar from '../components/TopBar.vue'
</script>
<style scoped></style>
