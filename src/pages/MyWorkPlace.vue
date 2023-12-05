<script setup>
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import DashboardTab from '../components/DashboardTab.vue'
import MyWorkPlace from '../components/MyWorkPlace.vue'
</script>

<template>
  <div>
    <app-layout>
      <template v-slot:main-content>
        <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
          <AppHorizontalNavigation />
          <AppVerticalNavigation />
          <DashboardTab class="my-10 mx-10" />
          <MyWorkPlace class="my-20 mx-10" />
        </main>
      </template>
    </app-layout>
  </div>
</template>
