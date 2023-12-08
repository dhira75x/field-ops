<template>
  <section class="bg-white">
    <div class="mb-4 bg-gray-200">
      <nav class="mt-1 p-2 border text-black-300 rounded-md">
        <div class="grid grid-cols-1">
          <div class="font-bold font-[Source Sans Pro] text-[25px]">
            Operational Readiness Reading
          </div>
          <div class="font-normal font-[Source Sans Pro]">
            29/11/2023
          </div>
        </div>
        <!-- <div
          class="text-black text-base font-normal font-['Source Sans Pro'] w-[15px] h-[15px] text-center mr-10 gap-[89px]"
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
        </div> -->
      </nav>
    </div>
    <div class="w-full h-[600px]">
      <div class="grid grid-cols-4 border-b border-b-gray-300 mx-3 my-3">
        <div class="mb-4 my-8">
          <GaugeChart
            :size="300"
            :id="`gaugeChart${1}`"
            department=""
            :gauge="90"
          />
        </div>
        <div class="grid grid-cols-1 justify-items-end my-8">
          <div class="font-normal mx-3 mb-6">28/11/2023</div>
          <div class="font-normal mx-3 mb-6">29/11/2023</div>
          <div class="font-normal mx-3 mb-6">30/11/2023</div>
          <div class="font-normal mx-3 mb-6">01/12/2023</div>
        </div>
        <div class="grid grid-cols-1 my-8 justify-items-center">
          <div
            class="w-[165px] h-[13px] bg-gray-200 rounded-full dark:bg-green-700"
          >
            <div
              class="bg-green-600 h-2.5 rounded-full"
              style="width: 100%;"
            ></div>
          </div>

          <div
            class="w-[165px] h-[13px] bg-gray-200 rounded-full dark:bg-green-700"
          >
            <div
              class="bg-green-600 h-2.5 rounded-full"
              style="width: 100%;"
            ></div>
          </div>

          <div
            class="w-[165px] h-[13px] bg-gray-200 rounded-full dark:bg-green-700"
          >
            <div
              class="bg-green-600 h-2.5 rounded-full"
              style="width: 100%;"
            ></div>
          </div>

          <div
            class="w-[165px] h-[13px] bg-gray-200 rounded-full dark:bg-green-700"
          >
            <div
              class="bg-green-600 h-2.5 rounded-full"
              style="width: 100%;"
            ></div>
          </div>
        </div>
        <div class="mb-16 grid grid-cols-1 text-[white]">
          <button
            class="mx-3 mb-6 bg-slate-700 text-center w-[150px] h-[58px] rounded-lg"
          >
            Approved
          </button>
          <button
            class="mx-3 mb-6 bg-slate-700 text-center w-[150px] h-[58px] rounded-lg"
          >
            Approved
          </button>
          <button
            class="mx-3 mb-6 bg-slate-700 text-center w-[150px] h-[58px] rounded-lg"
          >
            Approved
          </button>
          <button
            class="mx-3 mb-6 bg-slate-700 text-center w-[150px] h-[58px] rounded-lg"
          >
            Approved
          </button>
        </div>
      </div>

      <div
        v-for="(item, index) in dataList"
        :key="index"
      >
        <div class="shadow-2xl py-10 mx-10 my-10 justify-items-center">
          <div class="flex flex-row">
            <div class="w-3/12 cursor-pointer">
              <input type="checkbox" class="w-full h-[40px]" />
            </div>

            <div class="w-6/12">
              <div class="font-light font-['Source Sans Pro']">
                {{ item.tag }}
              </div>
              <div class="font-semibold font-['Source Sans Pro']">
                {{ item.description }}
              </div>
            </div>

            <div
              @click="dataList[index].opened = !dataList[index].opened"
              class="text-[black] w-3/12 flex flex-row-reverse mx-20 my-11"
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
            </div>
          </div>
          <div v-if="item.opened" class="my-10 mx-24 text-black">
            <CheckList
              class=""
              :checklists="item.questions"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import AppLayout from "@/layouts/AppLayout.vue";
import CheckList from "./CheckList.vue";
import GaugeChart from "@/components/GaugeChart.vue";
import HorizontalNavigation from "@/components/AppHorizontalNavigation.vue";
const isVisible = ref(true);

const dataList = ref([
  {
    tag: "OPERATION CHECKLIST",
    description: "Equipment & Material checklist",
    opened: false,
    questions: [
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
    ],
  },
  {
    tag: "OPERATION CHECKLIST",
    description: "Task checklist",
    opened: false,
    questions: [
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
    ],
  },
  {
    tag: "OPERATION CHECKLIST",
    description: "Transportation & Logistics checklist",
    opened: false,
    questions: [
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
    ],
  },
  {
    tag: "OPERATION CHECKLIST",
    description: "Schedule checklist",
    opened: false,
    questions: [
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
      "Ask For Permission to record the session",
    ],
  },
]);

const visibilityToggle = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style scope>
.hidden {
  display: none;
}
</style>
