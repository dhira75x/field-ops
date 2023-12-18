<template>
  <div class="w-full">
    <div class="w-full h-[250px] bg-white p-8 rounded shadow mx-1">
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
        </div>
      </div>
    </div>

    <div class="max-w-md mx-10 mt-8">
      <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
        >Number of Cores:</label
      >
      <div class="flex items-center justify-between mb-4">
        <button @click="decrement" class="bg-gray-500 text-white px-4 py-2">-</button>
        <input v-model="count" type="text" class="border p-2 text-center w-16" />
        <button @click="increment" class="bg-orange-500 text-white px-4 py-2">+</button>
      </div>
      <div>
        <div v-for="tab in tabs" :key="tab.id" v-show="tab.id === count">
          <div
            class="grid grid-cols-1 lg:grid-cols-4 my-8 gap-4 mb-4"
            v-for="(field, index) in tab.fields"
            :key="index"
          >
            <div class="mb-4">
              <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
                >Buffer</label
              >
              <input
                v-model="tab.field"
                type="text"
                id="field1"
                name="field1"
                class="p-2 border w-full rounded-md h-[60px]"
                placeholder="Enter Buffer + (index + 1)"
              />
            </div>
            <div class="mb-4">
              <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
                >Core</label
              >
              <input
                type="text"
                id="field2"
                name="field2"
                class="p-2 border w-full rounded-md h-[60px]"
                placeholder="Enter Core"
              />
            </div>
            <div class="mb-4">
              <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
                >Power Level</label
              >
              <input
                type="text"
                id="field3"
                name="field3"
                class="p-2 border w-full rounded-md h-[60px]"
                placeholder="Enter Power Level"
              />
            </div>
            <div class="mb-4">
              <label for="picture" class="block text-sm font-semibold text-black-800 mb-2"
                >Power Level</label
              >
              <input
                type="file"
                id="file"
                name="file"
                class="w-[270px] p-2 border border-gray-400 rounded-md h-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-4 mx-10">
      <div>
        <label for="name" class="font-semibold">Comment</label>
      </div>
      <textarea
        id="comment"
        rows="6"
        class="w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-black dark:placeholder-gray-400 dark:bg-white rounded-md"
        placeholder="input setbacks and delay comments .."
        required
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(1)
const maxTabs = 999

const increment = () => {
  if (count.value < maxTabs) {
    count.value += 1
  }
}

const decrement = () => {
  if (count.value > 1) {
    count.value -= 1
  }
}

const tabs = Array.from({ length: maxTabs }, (_, index) => ({
  id: index + 1,
  fields: Array.from({ length: index + 1 }, () => '')
}))
</script>
