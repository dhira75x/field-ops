<template>
  <div class="w-full h-[678px] bg-white p-8 rounded shadow">
    <div class="mb-4">
      <nav
        class="mt-1 p-2 border text-gray-300 font-bold font-[Source Sans Pro] text-[25px] w-full rounded-md"
      >
        <h2>Confirmation Request</h2>
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
            placeholder="Activity"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Activity
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Requested for"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Requested for
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Address"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Address
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Status"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Status
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Requested Status"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Requested Status
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Expected Start"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Expected Start
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Start Date"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Start Date
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Expected Completion"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
          Expected Completion
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
  <div class="w-full h-[310px] bg-white p-8 gap-5 rounded shadow flex-col inline-flex my-1">
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
      <button type="submit" class="bg-orange-500 text-white py-2 px-4 rounded-md">Submit</button>
    </div>
  </div>
</template>
