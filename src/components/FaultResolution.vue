<template>
  <div class="w-full h-[1900px] bg-white p-8 rounded shadow">
    <h2 class="text-lg font-bold mb-4 my-5">GPS Coordinates:</h2>

    <div class="grid grid-cols-6 gap-4">
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
      Market Information
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="mb-4">
        <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
          >Location Type</label
        >
        <select
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">Residence</option>
          <option value="option2">Commercial</option>
          <option value="option3">Sub-Commercial</option>
        </select>
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Is it an MDU?</label>

          <label class="relative inline-flex items-center mx-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"
            ></div>
            <span class="ms-3 text-sm font-semibold text-black-900 dark:text-black-300">Yes</span>
          </label>
        </div>
        <div>
          <label for="name" class="font-semi-bold">If Yes, Number of MDU</label>
        </div>
        <input
          type="text"
          class="border p-2 w-[120px] h-[60px] rounded-md"
          placeholder="insert value"
        />
      </div>
      <div class="mb-4">
        <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
          >Type of Buildings</label
        >
        <select
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">Duplex</option>
          <option value="option2">Bungalow</option>
          <option value="option3">Plaza</option>
        </select>
      </div>
    </div>
    <h2
      class="p-2 text-black-300 my-16 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      Node Verification
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Number of Cable and Type</label>
        </div>
        <input
          type="text"
          class="border p-2 w-[120px] h-[60px] rounded-md"
          placeholder="insert value"
        />
      </div>
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
      <h2 class="text-lg font-bold mb-4 my-2">GPS Coordinates:</h2>
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
    <div class="grid-cols-1 lg:grid-cols- gap-4">
      <div class="mb-4 mx-16">
        <label for="picture" class="block text-sm font-semibold text-gray-600 mb-2"
          >Upload Picture</label
        >
        <input type="file" id="picture" name="picture" class="w-[1012px] p-2 border rounded-md" />
      </div>
    </div>

    <h2
      class="p-2 text-black-300 my-16 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      Resolution Status
    </h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="mb-4">
        <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
          >POF Node</label
        >
        <select
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">OLT</option>
          <option value="option2">OPP</option>
          <option value="option3">Undecided</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
          >POF Segment</label
        >
        <select
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">Lastmile</option>
          <option value="option2">Kilometer</option>
          <option value="option3">Undecided</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script setup>
//import FaultRest from '../components/FaultRest.vue'
</script>
