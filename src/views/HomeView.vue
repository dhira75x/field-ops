<script setup>
import AppHorizontalNavigation from "@/components/AppHorizontalNavigation.vue";
</script>

<template>
  <div>
    <app-layout>
      <template v-slot:main-content>
        <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
          <AppHorizontalNavigation />
        </main>
      </template>
    </app-layout>
  </div>
</template>
