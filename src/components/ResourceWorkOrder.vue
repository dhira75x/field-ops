<template>
  <div class="w-full h-[1500px] bg-white p-8 rounded shadow">
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
            placeholder="ID"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          ID
        </div>

        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Customer's Name"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Customer's Name:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Date"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Date:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Network Segment"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Network Segment
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Affected Node"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Affected Node:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Class of fault"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Class of Fault:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Type of Fault"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Type of Fault:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="DNI Image"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          DNI Image:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Comment"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Comment:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Splitter"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Splitter
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Splitter port"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Splitter Port:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="OLT"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          OLT
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="OLT port"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          OLT Port
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Latitude"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Latitude:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Longtitude"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Longitude:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Action required"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Action Required:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Distance affected to meters"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Distance Affected to Meters:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Number of core to splice"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Number of Core to Splice:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Estimated time of resolution"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Estimated Time of Resolution:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Produced by"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Produced by:
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Approved to"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Approved to:
        </div>
        <div
          class="mb-4 mt-1 p-2 border w-full font-normal font-['Source Sans Pro'] rounded-md gap-3"
        >
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Approved by"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Approved by:
        </div>
      </div>

      <div class="col-span-1">
        <div class="mb-3">
          <input type="text" id="field3" name="field3" class="mt-1 p-2 border w-full rounded-md" />
        </div>
        <div class="mb-3">
          <div class="relative w-full">
            <!-- <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </div> -->
            <input type="date" class="border p-2 w-full rounded-md" />
            <!-- <input
              type="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date"
            /> -->
          </div>
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
</template>
