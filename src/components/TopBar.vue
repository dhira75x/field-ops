<template>
  <div
    class="bg-white rounded-sm shadow border border-zinc-300 items-center inline-flex"
  >
    <div
      class="cursor-pointer"
      @click="switchTab(item.id)"
      v-for="(item, index) in props.items"
      :key="index"
    >
      <div
        class="mx-5 text-base font-semibold font-['Source Sans Pro']"
        :class="[activeTab == item.id ? 'text-orange-600' : 'text-neutral-600']"
      >
        {{ item.label }}
      </div>
    </div>

    <!-- <router-link to="/pages/ObligationConfirmationProvisioning">
      <div class="text-orange-600 text-base font-semibold font-['Source Sans Pro']">
        Confirmations
      </div>
    </router-link> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({ items: { type: [], dafault: [] } });
const activeTab = ref(1);
const emit=defineEmits(['setActiveTab'])
const switchTab=(id)=>{
  try{
    activeTab.value=id;
    emit('setActiveTab', id)
  }catch(e){
    console.log(e);
  }
}
</script>
