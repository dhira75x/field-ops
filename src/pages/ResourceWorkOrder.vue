<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppVerticalNavigation />
        <div>
          <ButtonSubmit />
        </div>
        <div>
          <ChevronBack />
        </div>
        <div>
          <ButtonOrder />
        </div>
        <div class="my-3 mx-10">
          <ResourceWorkOrder />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppVerticalNavigation from '../components/AppHorizontalNavigation.vue'
import ButtonOrder from '../components/ButtonOrder.vue'
import ChevronBack from '../components/ChevronBack.vue'
import ButtonSubmit from '../components/ButtonSubmit.vue'
import ResourceWorkOrder from '../components/ResourceWorkOrder.vue'
</script>
