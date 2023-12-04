<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <div class="grid grid-cols-2 my-3">
          <div>
            <router-link to="/pages/ObligationSchedule">
              <ChevronBack />
            </router-link>
          </div>
          <div>
            <ButtonSubmit />
          </div>
        </div>
        <div>
          <FaultRest class="mx-10" />
        </div>
        <div>
          <FaultResolution class="mx-10" />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import ButtonSubmit from '../components/ButtonSubmit.vue'
import ChevronBack from '../components/ChevronBack.vue'
import FaultRest from '../components/FaultRest.vue'
import FaultResolution from '../components/FaultResolution.vue'
</script>
