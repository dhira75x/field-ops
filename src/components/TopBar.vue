<template>
  <div
    class="w-[1400px] h-[50px] px-[18px] py-2 bg-white rounded-sm shadow border border-zinc-300 items-center gap-[43px] inline-flex"
  >
    <router-link to="/pages/ObligationSchedule">
      <div class="text-neutral-600 text-base font-semibold font-['Source Sans Pro']">
        My Schedule
      </div>
    </router-link>

    <router-link to="/pages/ObligationConfirmationProvisioning">
      <div class="text-orange-600 text-base font-semibold font-['Source Sans Pro']">
        Confirmations
      </div>
    </router-link>
  </div>
</template>
