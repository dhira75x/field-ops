<template>
  <section
    class="w-[1440px] h-[780px] relative bg-stone-50 bg-opacity-5flex justify-center min-h-screen place-items-center dark:bg-primary-white-900"
  >
    <div class="bg-gray-200 flex items-center justify-center h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-4 my-5">Confirm Resolution</h2>
        <!-- Your form goes here -->
        <form>
          <div class="mb-4 my-3">
            <label for="dropdown" class="block text-gray-600 text-sm font-medium mb-2"
              >Why was the fault not resolved ?</label
            >
            <select
              id="dropdown"
              name="dropdown"
              class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            >
              <option selected="">Delay Diagnosis</option>
              <option value="FP">Fault Provisioning</option>
              <option value="LI">Late Installation</option>
              <option value="RE">Route Error</option>
              <option value="CI">Connections Interference</option>
            </select>
          </div>

          <h2 class="text-lg font-bold mb-4 my-8">MSST Details:</h2>

          <div class="mb-4">
            <label for="name" class="block text-sm font-semibold text-gray-600"
              >Customer Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Name"
            />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-semibold text-gray-600">Splitter</label>
            <input
              type="email"
              id="email"
              name="location"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Splitter"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="input1" class="block text-sm font-medium text-gray-600"
                >Resolution Date</label
              >
              <input
                type="text"
                id="input1"
                name="input1"
                class="mt-1 p-2 block w-full border rounded-md bg-white-100"
                placeholder="30/11/2023"
              />
            </div>

            <div>
              <label for="input2" class="block text-sm font-medium text-gray-600">Duration</label>
              <input
                type="text"
                id="input2"
                name="input2"
                class="mt-1 p-2 block w-full border rounded-md bg-white-100"
                placeholder="Enter Duration"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="details" class="block text-sm font-semibold text-gray-600"
              >MSST Details</label
            >
            <input
              type="email"
              id="email"
              name="location"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Details"
            />
          </div>
          <div class="mb-4 my-5">
            <label for="comment" class="block text-sm font-medium text-gray-600">Comment</label>
            <textarea
              id="comment"
              name="comment"
              rows="4"
              class="mt-1 p-2 border rounded-md w-full"
              placeholder="Input setbacks / delay comments"
            ></textarea>
          </div>

          <div class="flex justify-center my-4">
            <button
              type="submit"
              class="bg-orange-500 text-white px-4 py-2 rounded-md focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
