<template>
  <div class="flex flex-row-reverse mr-10 gap-4">
    <button
      class="rounded-md border-solid border-suburbanblack border w-[121px] h-[51px] pt-3.5 pr-7 pb-3.5 pl-7 shrink-0"
    >
      Cancel
    </button>
    <button
    @click="$emit('submit', true)"
      class="bg-legend-orange rounded-md border-solid border-[transparent] border w-[121px] h-[51px] pt-3.5 pr-7 pb-3.5 pl-7"
    >
      Submit
    </button>
  </div>
</template>
