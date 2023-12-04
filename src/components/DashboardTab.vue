<template>
  <div class="grid grid-cols-2 w-full h-[51px] bg-white">
    <div class="relative max-w-sm">
      <div class="mx-2 relative max-w-sm justify-items-center">
        <img src="../assets/fi_chevron-left.svg" alt="" />
      </div>

      <div class="relative max-w-sm text-black mx-8 text-lg font-normal font-['Source Sans Pro']">
        July 29, 2023
      </div>
    </div>
    <div class="flex flex-row-reverse mr-10 gap-[20px]">
      <div class="relative max-w-sm">
        <input
          type="search"
          placeholder="Search"
          class="border p-2 w-full bg-gray-300 rounded-md"
        />
      </div>
      <div class="relative max-w-sm">
        <input type="date" class="border p-2 w-full bg-gray-300 rounded-md" />
      </div>
    </div>
  </div>
</template>
