<template>
  <section class="grid grid-cols-3 gap-4 m-10">
    <div
      class="bg-[#f5d3c3] border border-[#fd4f00] border-solid font-semibold text-black w-[354px] h-[64px] flex place-items-center justify-center text-center cursor-pointer rounded-tl-2xl rounded-tr-2xl shadow-inner"
    >
      Diagnosis
    </div>

    <router-link to="/pages/ResourceWorkOrder">
      <div
        class="bg-[#f5d3c3] text-black w-[354px] h-[64px] font-semibold text-center cursor-pointer flex place-items-center justify-center rounded-tl-2xl rounded-tr-2xl shadow-inner"
      >
        Work Order
      </div>
    </router-link>
  </section>
</template>
