<template>
  <!-- <body class="bg-gray-100 p-8 w-full min-h-screen"> -->
  <div>
    <app-layout>
      <template v-slot:main-content>
        <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
          <AppHorizontalNavigation />

          <div class="w-[1101px] h-[629px] bg-white p-8 rounded shadow my-20">
            <div class="mb-4">
              <nav
                class="mt-1 p-2 border text-gray-300 font-bold font-[Source Sans Pro] text-[25px] w-full rounded-md"
              >
                <h2>Confirmation Request</h2>
              </nav>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-1">
                <div class="mb-4">
                  <input
                    type="text"
                    id="field1"
                    name="field1"
                    placeholder="ID"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>

                <div class="mb-4">
                  <input
                    type="text"
                    id="field2"
                    name="field2"
                    placeholder="Activity"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field2"
                    name="field2"
                    placeholder="Requested for"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field2"
                    name="field2"
                    placeholder="Address"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field2"
                    name="field2"
                    placeholder="Status"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field2"
                    name="field2"
                    placeholder="Requested Status"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field2"
                    name="field2"
                    placeholder="Expected Start"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field2"
                    name="field2"
                    placeholder="Start Date"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field2"
                    name="field2"
                    placeholder="Expected Completion"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
              </div>

              <div class="col-span-1">
                <div class="mb-4">
                  <input
                    type="text"
                    id="field3"
                    name="field3"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field3"
                    name="field3"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field3"
                    name="field3"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field3"
                    name="field3"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field3"
                    name="field3"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field3"
                    name="field3"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field3"
                    name="field3"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field3"
                    name="field3"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    id="field3"
                    name="field3"
                    class="mt-1 p-2 border w-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-[1101px] h-[310px] bg-white p-8 gap-5 rounded shadow flex-col inline-flex my-10"
          >
            <div class="mb-4">
              <label for="comment" class="block text-sm font-medium text-gray-600">Comments</label>
              <textarea
                id="comment"
                name="comment"
                rows="3"
                class="mt-1 p-2 border w-full rounded-md"
              ></textarea>
            </div>
            <div>
              <button type="submit" class="bg-orange-500 text-white py-2 px-4 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </main>
      </template>
    </app-layout>
  </div>
</template>
<script setup>
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import '../assets/tailwind.css'
</script>
<style scoped></style>
