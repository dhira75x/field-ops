<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppVerticalNavigation />
        <div class="grid grid-cols-2 my-3">
          <div>
            <ChevronBack />
          </div>
          <div>
            <ButtonSubmit />
          </div>
        </div>
        <div>
          <ButtonOrder />
        </div>
        <div class="my-3 mx-10">
          <ResourceSplicePlan />
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
import ResourceSplicePlan from '../components/ResourceSplicePlan.vue'

import { onMounted, ref,  } from "vue";
import workplaceRequestsv2 from "@/service/workplaceRequestsv2.js";
import { useRoute } from "vue-router";
const route=useRoute();
onMounted(()=>{
  getReport();
})
  const getReport=async ()=>{
    try{
      const { status, data } = await workplaceRequestsv2(
      "get",
      `operations/sd/spliceplans/${route.params.id}`
    );
    if (status == 200) { /* empty */ }
    }catch(e){ /* empty */ }
  }
</script>
