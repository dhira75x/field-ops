<template>
  <section
    class="w-[1440px] h-[780px] relative bg-stone-50 bg-opacity-5flex justify-center min-h-screen place-items-center dark:bg-primary-white-900"
  >
    <div class="bg-gray-200 flex items-center justify-center h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-4 my-5">Add Splice Plan</h2>
        <!-- Your form goes here -->
        <form>
          <div class="mb-4 my-3">
            <label for="dropdown" class="block text-gray-600 text-sm font-medium mb-2"
              >Select Type</label
            >
            <select
              id="dropdown"
              name="dropdown"
              class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            >
              <option value="option1">Joint Box Closure</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div class="mb-4">
            <!-- <label for="name" class="block text-sm font-semibold text-gray-600">Name</label> -->
            <input
              type="text"
              id="name"
              name="name"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Name"
            />
          </div>

          <div class="mb-4">
            <!-- <label for="email" class="block text-sm font-semibold text-gray-600">Email</label> -->
            <input
              type="email"
              id="email"
              name="location"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Location"
            />
          </div>

          <h2 class="text-lg font-bold mb-4 my-5">GPS Coordinates:</h2>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <!-- <label for="input1" class="block text-sm font-medium text-gray-600">Input 1</label> -->
              <input
                type="text"
                id="input1"
                name="input1"
                class="mt-1 p-2 block w-full border rounded-md bg-white-100"
                placeholder="Enter Latitude"
              />
            </div>

            <div>
              <!-- <label for="input2" class="block text-sm font-medium text-gray-600">Input 2</label> -->
              <input
                type="text"
                id="input2"
                name="input2"
                class="mt-1 p-2 block w-full border rounded-md bg-white-100"
                placeholder="Enter Longtitude"
              />
            </div>
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
<script>
import '../assets/tailwind.css'

export default {
  name: 'AddSplicePlan',
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {}
  }
}
</script>
<style scoped></style>
