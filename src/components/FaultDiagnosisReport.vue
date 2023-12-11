<template>
  <div class="w-full">
    <div class="w-[1278px] h-[329px] bg-white p-8 rounded shadow mx-10">
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1">
          <div class="mb-4 mt-1 p-2 border w-full rounded-md">
            <!-- <input
            type="text"
            id="field1"
            name="field1"
            placeholder="Splitter Name"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
            Customer Name
          </div>

          <div class="mb-4 mt-1 p-2 border w-full rounded-md">
            <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Customer Address"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
            Customer ID
          </div>
          <div class="mb-4 mt-1 p-2 border w-full rounded-md">
            <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="GPS Coordinates"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
            Phone Number
          </div>
          <div class="mb-4 mt-1 p-2 border w-full rounded-md">
            <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Fault Segmentation"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
            Customer Address
          </div>
          <div class="mb-4 mt-1 p-2 border w-full rounded-md">
            <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="POF"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
            Email
          </div>
        </div>

        <div class="col-span-1">
          <div class="mb-3">
            <input
              type="text"
              id="field3"
              name="field3"
              class="mt-1 p-2 border w-full rounded-md"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              id="field3"
              name="field3"
              class="mt-1 p-2 border w-full rounded-md"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              id="field3"
              name="field3"
              class="mt-1 p-2 border w-full rounded-md"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              id="field3"
              name="field3"
              class="mt-1 p-2 border w-full rounded-md"
            />
          </div>
          <div class="mb-3">
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
    <div class="m-10 w-full">
      <h2
        class="p-2 text-black-300 my-16 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
      >
        Node Verification
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="mb-4 mx-2">
          <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
            >Node Type</label
          >
          <select
            id="dropdown2"
            name="dropdown2"
            class="w-[410px] h-[60px] p-2 border bg-white-500 rounded-md"
          >
            <option value="option1">Splitter</option>
            <option value="option2">Router</option>
            <option value="option3">Cable</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
            >Splitter</label
          >
          <input
            type="text"
            id="field3"
            name="field3"
            class="p-2 border w-full rounded-md h-[60px]"
            placeholder="BUA Court"
          />
        </div>
        <div class="mb-4">
          <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
            >Splitter Port</label
          >
          <input
            type="text"
            id="field3"
            name="field3"
            class="p-2 border w-[390px] rounded-md h-[60px]"
            placeholder="Port 5"
          />
        </div>
      </div>
      <div class="mb-4 mx-2">
        <div>
          <label for="name" class="font-semibold">NGP Breach:</label>

          <label class="relative inline-flex items-center mx-10 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"
            ></div>
            <span class="ms-3 text-sm font-semibold text-black-900 dark:text-black-300">Yes</span>
          </label>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="mb-4 mx-2">
          <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2">OLT</label>
          <input
            type="text"
            id="field3"
            name="field3"
            class="p-2 border w-full rounded-md h-[60px]"
            placeholder="BUA Court"
          />
        </div>

        <div class="mb-4">
          <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
            >OLT Port</label
          >
          <input
            type="text"
            id="field3"
            name="field3"
            class="p-2 border w-full rounded-md h-[60px]"
            placeholder="Port5"
          />
        </div>
        <div class="mb-4">
          <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
            >Number of Cables</label
          >
          <input
            type="text"
            id="field3"
            name="field3"
            class="p-2 border w-[260px] rounded-md h-[60px]"
            placeholder="Insert Value"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 my-6 gap-4">
        <div class="mb-4 mx-2">
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
        <div class="mb-4 mx-2">
          <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
            >OTDR</label
          >
          <input
            type="text"
            id="field3"
            name="field3"
            class="p-2 border w-[461px] rounded-md h-[60px]"
            placeholder="Enter OTDR"
          />
        </div>
        <div class="mb-4 mx-5">
          <label for="picture" class="block text-sm font-semibold text-gray-600 mb-2"
            >OTDR Image</label
          >
          <input
            type="file"
            id="picture"
            name="picture"
            class="w-[460px] p-2 border border-gray-400 rounded-md h-[60px]"
          />
        </div>
        <div class="mb-4 mx-2">
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
        <div class="mb-4 mx-2">
          <div>
            <label for="name" class="font-semibold">Resolution Date</label>
          </div>
          <input
            type="date"
            class="border p-2 w-[461px] h-[60px] my-2 rounded-md"
            placeholder="30/11/2023"
          />
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold">Resolution Time</label>
          </div>
          <input
            type="time"
            class="border p-2 w-[461px] h-[60px] my-2 rounded-md"
            placeholder="00:00"
          />
        </div>
      </div>
    </div>
  </div>
</template>
