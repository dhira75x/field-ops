<template>
  <div class="shadow-lg w-[970px] h-[120px] my-8 mx-24">
    <div class="flex flex-row">
      <div class="mx-8 my-6">
        <svg
          width="102"
          height="46"
          viewBox="0 0 102 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="44" height="44" rx="5" stroke="#CCCCCC" stroke-width="2" />
        </svg>
      </div>

      <div class="my-6 justify-start">
        <div class="font-light font-['Source Sans Pro']">OPERATIONAL CHECKLIST</div>
        <div class="font-semibold font-['Source Sans Pro']">Task Checklist</div>
      </div>

      <button
        class="text-[black] items-center my-11 absolute left-[1380px]"
        id="dropdownDefaultCheckbox"
        data-dropdown-toggle="dropdownDefaultCheckbox"
      >
        <svg
          width="28"
          height="14"
          viewBox="0 0 28 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 1L13 13L1 1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        id="dropdownDefaultCheckbox"
        class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownCheckboxButton"
        >
          <li>
            <div class="flex items-center">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="checkbox-item-1"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Ask for permission to record the session</label
              >
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <input
                checked
                id="checkbox-item-2"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="checkbox-item-2"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Ask for permission to record the session</label
              >
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="checkbox-item-3"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Ask for permission to record the session</label
              >
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="checkbox-item-3"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Ask for permission to record the session</label
              >
            </div>
          </li>
          <div class="flex items-center">
            <label for="comment" class="block text-sm font-medium text-gray-600">Comments</label>
            <textarea
              id="comment"
              name="comment"
              rows="3"
              class="mt-1 p-2 border w-full rounded-md"
            ></textarea>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
