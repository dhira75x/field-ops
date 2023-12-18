<template>
  <div class="w-full h-[2000px] bg-white p-8 rounded shadow">
    <nav
      class="mt-1 p-2 border text-black-300 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      <div>
        <h2>Site Information</h2>
      </div>

      <div
        class="text-black text-base font-normal font-['Source Sans Pro'] text-center absolute left-[1598px]"
      >
        Oct 30, 2023 11:35 AM
      </div>
    </nav>
    <div class="grid grid-cols-2 my-6 gap-4">
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Customer Name</label>
        </div>
        <input
          type="text"
          class="border p-2 w-[461px] h-[60px] my-2 rounded-md"
          placeholder="enter name"
        />
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Customer Address</label>
        </div>
        <input
          type="text"
          class="border p-2 w-[461px] h-[60px] my-2 rounded-md"
          placeholder="enter address"
        />
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">GPS Coordinates</label>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="input1"
              name="input1"
              class="mt-1 p-2 w-[156px] h-[60px] border rounded-md bg-white-100"
              placeholder="Enter Latitude"
            />
          </div>

          <div>
            <input
              type="text"
              id="input2"
              name="input2"
              class="mt-1 p-2 w-[156px] h-[60px] border rounded-md bg-white-100"
              placeholder="Enter Longitude"
            />
          </div>
        </div>
      </div>
      <div class="mb-4">
        <div>
          <label for="phone" class="font-semibold">Customer Contact</label>
        </div>
        <input
          type="text"
          class="border p-2 w-[461px] h-[60px] my-2 rounded-md"
          placeholder="enter contact"
        />
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Provisioning Team</label>
        </div>
        <input
          type="text"
          class="border p-2 w-[461px] h-[60px] my-2 rounded-md"
          placeholder="enter provisioning team"
        />
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Installer</label>
        </div>
        <input
          type="text"
          class="border p-2 w-[461px] h-[60px] my-2 rounded-md"
          placeholder="enter installer name"
        />
      </div>
    </div>

    <h2 class="text-lg font-bold mb-4 my-5">GPS Coordinates:</h2>

    <div class="grid grid-cols-5 gap-4">
      <div>
        <input
          type="text"
          id="input1"
          name="input1"
          class="mt-1 p-2 w-[156px] h-[60px] border rounded-md bg-white-100"
          placeholder="Enter Latitude"
        />
      </div>

      <div>
        <input
          type="text"
          id="input2"
          name="input2"
          class="mt-1 p-2 w-[156px] h-[60px] border rounded-md bg-white-100"
          placeholder="Enter Longitude"
        />
      </div>
    </div>

    <h2
      class="p-2 text-black-300 my-16 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      Splice Plan Details
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Address</label>
        </div>
        <input
          type="text"
          class="border p-2 w-[461px] h-[60px] my-2 rounded-md"
          placeholder="enter address"
        />
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold mx-1"
            >Expected power level output on splitter: Available ports on splitter
          </label>
        </div>
        <div class="grid grid-cols-3 my-2 gap-4">
          <div>
            <input
              type="text"
              id="input1"
              name="input1"
              class="mt-1 p-2 w-[156px] h-[60px] border rounded-md bg-white-100"
              placeholder="insert value"
            />
          </div>

          <div>
            <input
              type="text"
              id="input2"
              name="input2"
              class="mt-1 p-2 w-[156px] h-[60px] border rounded-md bg-white-100"
              placeholder="insert value"
            />
          </div>
        </div>
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Backbone Splicing:</label>

          <label class="relative inline-flex items-center mx-10 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"
            ></div>
            <span class="ms-3 text-sm font-semibold text-black-900 dark:text-black-300">Yes</span>
          </label>
        </div>
      </div>
    </div>
    <h2
      class="p-2 text-black-300 my-16 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      Node Verification
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-4">
      <div class="mb-4">
        <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
          >Node Type</label
        >
        <select
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">Splitter</option>
          <option value="option2">Router</option>
          <option value="option3">Cable</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 my-3 gap-4">
      <div class="mb-4">
        <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
          >Verification Status</label
        >
        <select
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">Verified</option>
          <option value="option2">Pending</option>
          <option value="option3">Awaiting</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
          >Labelled</label
        >
        <select
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">Yes</option>
          <option value="option2">No</option>
          <option value="option3">Undecided</option>
        </select>
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold mx-1">GPS Coordinates </label>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="input1"
              name="input1"
              class="mt-1 p-2 w-[156px] h-[60px] border rounded-md bg-white-100"
              placeholder="Enter Latitude"
            />
          </div>

          <div>
            <input
              type="text"
              id="input2"
              name="input2"
              class="mt-1 p-2 w-[156px] h-[60px] border rounded-md bg-white-100"
              placeholder="Enter Longitude"
            />
          </div>
        </div>
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Address</label>
        </div>
        <input
          type="text"
          class="border p-2 w-[461px] h-[60px] my-2 rounded-md"
          placeholder="enter address"
        />
      </div>
    </div>

    <div class="grid-cols-1 lg:grid-cols-1 my-10 pb-6 gap-4">
      <div class="mb-4 mx-16">
        <label for="picture" class="block text-sm font-semibold text-gray-600 mb-2"
          >Upload Picture</label
        >
        <input type="file" id="picture" name="picture" class="w-[1012px] p-2 border rounded-md" />
      </div>
    </div>
    <div class="w-full h-[230px] bg-white shadow-sm border-gray-50 my-7">
      <nav
        class="border bg-legend-black font-semibold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
      >
        <div class="text-[white] mx-2 my-2">
          <h2>Splice Plan</h2>
        </div>

        <div
          class="text-[#ff7b00] w-[94px] h-[34px] my-2 pb-2 text-center justify-center bg-white text-base font-normal font-['Source Sans Pro'] text-center rounded-md absolute left-[1689px]"
        >
          <button class="my-2" @click="showAddSplicePlanModal = !showAddSplicePlanModal">
            Add Variance
          </button>
        </div>
      </nav>
      <div>
        <table class="w-full bg-white-300">
          <thead class="mb-3 h-[25px] w-full bg-gray-300 border border-gray-600 items-center">
            <tr>
              <th scope="col" class="px-3 py-3 w-[56px] h-[19px]">S/N:</th>
              <th scope="col" class="px-3 py-3 w-[150px] h-[19px]">Name</th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">Type</th>
              <th scope="col" class="px-3 py-3 w-[450px] h-[19px]">Location</th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">Buffer</th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">Core</th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">Schedule Start Date</th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">Start Date</th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">Schedule End Date</th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">End Date</th>
              <th scope="col" class="px-3 py-3 w-[200px] h-[19px] mx-10">Action</th>
            </tr>
          </thead>
          <tbody class="my-20 pb-5">
            <td class="px-3 py-3 bg-white-200 text-center border border-black">01</td>
            <td class="px-6 py-4 bg-white-200 text-center border border-black">
              20 Tijjani Babangiga Road
            </td>
            <td class="px-6 py-4 bg-white-200 text-center border border-black">Bello Akinyemi</td>
            <td class="px-6 py-4 bg-white-200 text-center border border-black">FAT</td>
            <td class="px-6 py-4 bg-white-200 text-center border border-black">N/A</td>
            <td class="px-6 py-4 bg-white-200 text-center border border-black">N/A</td>
            <td class="px-6 py-4 bg-white-200 text-center border border-black"></td>
            <td class="px-6 py-4 bg-white-200 text-center border border-black"></td>
            <td class="px-6 py-4 bg-white-200 text-center border border-black"></td>
            <td class="px-6 py-4 bg-white-200 text-center border border-black"></td>
            <td class="border border-black">
              <div class="flex flex-row-reverse gap-4">
                <router-link to="/pages/ProvideReport">
                  <button
                    class="bg-legend-orange pl-2 pr-2 rounded-md border-solid border-[transparent] border w-[145px] h-[41px]"
                  >
                    Provide Report
                  </button>
                </router-link>
              </div>
            </td>
          </tbody>
        </table>
        <div class="border-b"></div>
      </div>
    </div>
    <!--  -->
    <AppModal
      v-if="showAddSplicePlanModal"
      @click="showAddSplicePlanModal = !showAddSplicePlanModal"
    >
      <template #modal-content>
        <AddSplicePlan />
      </template>
    </AppModal>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const showAddSplicePlanModal = ref(false)
//import { ref } from 'vue'
//import { useRouter } from 'vue-router'
import AppModal from '../components/AppModal.vue'
import AddSplicePlan from '../pages/AddSplicePlan.vue'
</script>
