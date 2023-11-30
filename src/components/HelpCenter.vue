<template>
  <div class="w-full h-[2000px] flex-col justify-start items-center gap-[15px] inline-flex">
    <div class="container mx-auto my-8">
      <!-- Item List -->
      <div class="w-[1101px]">
        <!-- Row 1 -->
        <div
          @click="firstTab = !firstTab"
          class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
        >
          <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto">
            Inaccurate data on Network Map (DNI)</span
          >
          <!-- <router-link :to="{ path: '/' }"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path></svg
          ></router-link> -->
          <a href="#" class="text-red-500">
            <!-- Right-side chevron button -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>

        <div v-if="firstTab" class="bg-white my-4 mx-20">
          <HelpToggle />
        </div>

        <!-- Row 2 -->

        <!-- Add more rows as needed -->
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Delay Diagnosis</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Inaccurate Diagnosis</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Incomplete Diagnosis</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Inability to use Tools (IDP, Coordinates, e.t.c)</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Lack of Compliance to SOPs</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Lack of Logistics</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Equipment and material avialiability</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Lack of access to locations</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Lack of labelling</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Lack of leadership</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="w-[1101px] h-[132px]">
          <div
            class="shadow-lg bg-white flex items-center justify-between gap-5 mt-5 pl-12 pr-11 pt-7 pb-5 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span class="text-black text-2xl font-semibold leading-7 grow shrink basis-auto my-auto"
              >Inability to interprete data</span
            >
            <a href="#" class="text-red-500">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const firstTab = ref(false)
import HelpToggle from '@/components/HelpToggle.vue'

// const HelpData = defineProps({
//   tag: { dafault: '' },
//   title: { dafault: '' },
//   content: { dafault: '' },
//   id: { dafault: '' }
// })
</script>
