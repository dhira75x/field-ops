<template>
  <div class="w-full h-[1200px] bg-white">
    <div class="mb-4 bg-gray-200">
      <nav class="mt-1 p-2 border text-black-300 w-full flex flex-row rounded-md">
        <div class="grid grid-cols-1">
          <div class="font-bold font-[Source Sans Pro] text-[25px]">
            Operational Readiness Reading
          </div>
          <div class="font-normal font-[Source Sans Pro]">29/11/2023</div>
        </div>
        <div
          class="text-black text-base font-normal font-['Source Sans Pro'] w-[15px] h-[15px] text-center flex flex-row-reverse mr-10 gap-[89px]"
        >
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="text-white bg-gray-700 my-4 hover:bg-gray-800 absolute left-[1800px] items-center focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            type="button"
          >
            All
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >All</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Small</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >In</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Sign</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="w-full h-[600px]">
      <div class="grid grid-cols-4 border-b border-b-gray-300 mx-3 my-3">
        <div class="mb-4 my-8">
          <img src="../assets/curve.svg" />
        </div>
        <div class="grid grid-cols-1 justify-items-end my-8">
          <div class="font-normal mx-3 mb-6">28/11/2023</div>
          <div class="font-normal mx-3 mb-6">29/11/2023</div>
          <div class="font-normal mx-3 mb-6">30/11/2023</div>
          <div class="font-normal mx-3 mb-6">01/12/2023</div>
        </div>
        <div class="grid grid-cols-1 my-8 justify-items-center">
          <div class="w-[165px] h-[13px] bg-gray-200 rounded-full dark:bg-green-700">
            <div class="bg-green-600 h-2.5 rounded-full" style="width: 100%"></div>
          </div>

          <div class="w-[165px] h-[13px] bg-gray-200 rounded-full dark:bg-green-700">
            <div class="bg-green-600 h-2.5 rounded-full" style="width: 100%"></div>
          </div>

          <div class="w-[165px] h-[13px] bg-gray-200 rounded-full dark:bg-green-700">
            <div class="bg-green-600 h-2.5 rounded-full" style="width: 100%"></div>
          </div>

          <div class="w-[165px] h-[13px] bg-gray-200 rounded-full dark:bg-green-700">
            <div class="bg-green-600 h-2.5 rounded-full" style="width: 100%"></div>
          </div>
        </div>
        <div class="mb-16 grid grid-cols-1 text-[white]">
          <button class="mx-3 mb-6 bg-slate-700 text-center w-[150px] h-[58px] rounded-lg">
            Approved
          </button>
          <button class="mx-3 mb-6 bg-slate-700 text-center w-[150px] h-[58px] rounded-lg">
            Approved
          </button>
          <button class="mx-3 mb-6 bg-slate-700 text-center w-[150px] h-[58px] rounded-lg">
            Approved
          </button>
          <button class="mx-3 mb-6 bg-slate-700 text-center w-[150px] h-[58px] rounded-lg">
            Approved
          </button>
        </div>
      </div>

      <div class="w-full my-20 justify-center">
        <form class="w-full h-[2300px] flex-col justify-start items-center gap-[15px] inline-flex">
          <div class="shadow-2xl w-full h-[250px] mx-28 justify-items-center">
            <div class="flex flex-row">
              <div class="mx-8 my-24 cursor-pointer">
                <svg
                  width="102"
                  height="46"
                  viewBox="0 0 102 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="44"
                    height="44"
                    rx="5"
                    stroke="#CCCCCC"
                    stroke-width="2"
                  />
                </svg>
              </div>

              <div class="my-20 justify-start">
                <div class="font-light font-['Source Sans Pro']">OPERATIONAL CHECKLIST</div>
                <div class="font-semibold font-['Source Sans Pro']">
                  Transport and Logistics Checklist
                </div>
              </div>

              <button
                @click="visibilityToggle"
                class="text-[black] items-center my-11 absolute left-[1380px]"
                id="dropdownDefaultCheckbox"
                data-dropdown-toggle="dropdownDefaultCheckbox"
              >
                <svg
                  width="28"
                  height="14"
                  viewBox="0 0 28 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 1L13 13L1 1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div>
                <CheckList />
              </div>
            </div>
          </div>
          <div class="shadow-2xl w-full h-[250px] mx-28 my-16 justify-items-center">
            <div class="flex flex-row">
              <div class="mx-8 my-24">
                <svg
                  width="102"
                  height="46"
                  viewBox="0 0 102 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="44"
                    height="44"
                    rx="5"
                    stroke="#CCCCCC"
                    stroke-width="2"
                  />
                </svg>
              </div>

              <div class="my-20 justify-start">
                <div class="font-light font-['Source Sans Pro']">OPERATIONAL CHECKLIST</div>
                <div class="font-semibold font-['Source Sans Pro']">Schedule Checklist</div>
              </div>

              <button
                @click="visibilityToggle"
                class="text-[black] items-center my-11 absolute left-[1380px]"
                id="dropdownDefaultCheckbox"
                data-dropdown-toggle="dropdownDefaultCheckbox"
              >
                <svg
                  width="28"
                  height="14"
                  viewBox="0 0 28 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 1L13 13L1 1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div>
                <CheckList />
              </div>
            </div>
          </div>
          <div class="shadow-2xl w-full h-[250px] mx-28 my-16 justify-items-center">
            <div class="flex flex-row">
              <div class="mx-8 my-24">
                <svg
                  width="102"
                  height="46"
                  viewBox="0 0 102 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="44"
                    height="44"
                    rx="5"
                    stroke="#CCCCCC"
                    stroke-width="2"
                  />
                </svg>
              </div>

              <div class="my-20 justify-start">
                <div class="font-light font-['Source Sans Pro']">OPERATIONAL CHECKLIST</div>
                <div class="font-semibold font-['Source Sans Pro']">Schedule Checklist</div>
              </div>

              <button
                @click="visibilityToggle"
                class="text-[black] items-center my-11 absolute left-[1380px]"
                id="dropdownDefaultCheckbox"
                data-dropdown-toggle="dropdownDefaultCheckbox"
              >
                <svg
                  width="28"
                  height="14"
                  viewBox="0 0 28 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 1L13 13L1 1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div>
                <CheckList />
              </div>
            </div>
          </div>
          <div class="shadow-2xl w-full h-[250px] mx-28 my-16 justify-items-center">
            <div class="flex flex-row">
              <div class="mx-8 my-24">
                <svg
                  width="102"
                  height="46"
                  viewBox="0 0 102 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="44"
                    height="44"
                    rx="5"
                    stroke="#CCCCCC"
                    stroke-width="2"
                  />
                </svg>
              </div>

              <div class="my-20 justify-start">
                <div class="font-light font-['Source Sans Pro']">OPERATIONAL CHECKLIST</div>
                <div class="font-semibold font-['Source Sans Pro']">Schedule Checklist</div>
              </div>

              <button
                @click="visibilityToggle"
                class="text-[black] items-center my-11 absolute left-[1380px]"
                id="dropdownDefaultCheckbox"
                data-dropdown-toggle="dropdownDefaultCheckbox"
              >
                <svg
                  width="28"
                  height="14"
                  viewBox="0 0 28 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 1L13 13L1 1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div>
                <CheckList />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import CheckList from './CheckList.vue'

const isVisible = ref(true)

const visibilityToggle = () => {
  isVisible.value = !isVisible.value
}
</script>
