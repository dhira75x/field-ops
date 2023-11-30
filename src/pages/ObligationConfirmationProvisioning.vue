<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <div>
          <TopBar class="m-10" />
        </div>
        <div>
          <ObligationConfirmationList class="my-10 mx-18" />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
// import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import ObligationConfirmationList from '../components/ObligationConfirmationList.vue'
import TopBar from '../components/TopBar.vue'
</script>
<style scoped></style>
