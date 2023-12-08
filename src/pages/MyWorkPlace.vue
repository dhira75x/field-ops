<script setup>
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import DashboardTab from '../components/DashboardTab.vue'
import MyWorkPlace from '../components/MyWorkPlace.vue'
import AppLayout from '../layouts/AppLayout.vue';
</script>

<template>
  <div>
    <AppLayout>
      <template v-slot:main-content>
        <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
          <AppHorizontalNavigation />
          <div>
            <DashboardTab class="my-10 mx-5" />
            <MyWorkPlace class="my-20 mx-5" />
          </div>
          <!-- <AppVerticalNavigation /> -->
        </main>
      </template>
    </AppLayout>
  </div>
</template>
