<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <div class="grid grid-cols-2 my-3">
          <div>
            <ChevronBack />
          </div>
          <div>
            <ButtonSubmit />
          </div>
        </div>
        <div>
          <ActRest class="mx-10" />
        </div>
        <div>
          <ActivationResolutionForm class="mx-10" />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import ButtonSubmit from '../components/ButtonSubmit.vue'
import ChevronBack from '../components/ChevronBack.vue'
import ActRest from '../components/ActRest.vue'
import ActivationResolutionForm from '../components/ActivationResolutionForm.vue'
</script>
