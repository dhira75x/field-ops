<template>
  <div class="w-full h-[678px] bg-white p-8 rounded shadow">
    <div class="mb-4">
      <nav
        class="mt-1 p-2 border text-black-300 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
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
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1">
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field1"
            name="field1"
            placeholder="Customer's Name"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Customer Name:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Customer Address"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Customer Address:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="GPS Coordinates"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          GPS Coordinates:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Installer"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Installer:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Proposed Splitter"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Proposed Splitter:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Accuracy"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Accuracy:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- 
          <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Pick Point"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Pick Point:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Pick Point Coordinates"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Pick Point Coordinates:
        </div>
      </div>

      <div class="col-span-1">
        <div class="mb-3">
          <input type="text" id="field3" name="field3" class="mt-1 p-2 border w-full rounded-md" />
        </div>
        <div class="mb-3">
          <input type="text" id="field3" name="field3" class="mt-1 p-2 border w-full rounded-md" />
        </div>
        <div class="mb-3">
          <input type="text" id="field3" name="field3" class="mt-1 p-2 border w-full rounded-md" />
        </div>
        <div class="mb-3">
          <input type="text" id="field3" name="field3" class="mt-1 p-2 border w-full rounded-md" />
        </div>
        <div class="mb-3">
          <input type="text" id="field3" name="field3" class="mt-1 p-2 border w-full rounded-md" />
        </div>
        <div class="mb-3">
          <input type="text" id="field3" name="field3" class="mt-1 p-2 border w-full rounded-md" />
        </div>
        <div class="mb-3">
          <input type="text" id="field3" name="field3" class="mt-1 p-2 border w-full rounded-md" />
        </div>
        <div class="mb-3">
          <input type="text" id="field3" name="field3" class="mt-1 p-2 border w-full rounded-md" />
        </div>
        <div class="mb-3">
          <input type="text" id="field3" name="field3" class="mt-1 p-2 border w-full rounded-md" />
        </div>
      </div>
    </div>
  </div>
  <div class="w-full h-[650px] bg-white p-8 gap-5 rounded shadow flex-col inline-flex my-1">
    <nav
      class="mt-1 p-2 border text-black-300 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      <div>
        <h2>New Splitters/ FATs</h2>
      </div>

      <div
        class="text-black text-base font-normal font-['Source Sans Pro'] text-center absolute left-[1598px]"
      >
        Oct 30, 2023 11:35 AM
      </div>
    </nav>
    <table
      class="bg-[#ffffff] rounded-[5px] h-[45px]"
      style="box-shadow: var(--card-shadow-box-shadow, 2px 3px 10px 0px rgba(34, 41, 46, 0.05))"
    >
      <thead
        class="text-legend-black text-left uppercase w-6 h-[65px]"
        style="
          font:
            700 12px/15px 'SourceSansPro-Bold',
            sans-serif;
        "
      >
        <tr>
          <th scope="col" class="px-6 py-3">S/N:</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3">Location</th>
          <th scope="col" class="px-6 py-3">Latitude</th>
          <th scope="col" class="px-6 py-3">Longitude</th>
        </tr>
      </thead>
      <!-- <tbody
        class="rounded-[5px] h-[45px]"
        style="box-shadow: var(--card-shadow-box-shadow, 2px 3px 10px 0px rgba(34, 41, 46, 0.05))"
      >
        <tr
          class="text-legend-black text-left w-6 h-[65px]"
          style="
            font:
              700 12px/15px 'SourceSansPro-Bold',
              sans-serif;
          "
        >
         
        </tr>
      </tbody> -->
    </table>

    <img
      class="h-auto w-full transition-all duration-300 rounded-lg cursor"
      src="../assets/TonmaSecondus_1699452328 1.png"
      alt="image description"
    />
  </div>
</template>
<script setup>
//import DiagnosisDate from '../components/DiagnosisDate'
</script>
