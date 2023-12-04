<template>
  <div class="w-full h-[1300px] bg-white p-8 rounded shadow">
    <div class="mb-4">
      <nav
        class="mt-1 p-2 border text-black-300 bg-white-600 font-semibold font-[Source Sans Pro] text-[15px] w-full flex flex-row rounded-md"
      >
        <div class="mx-10 cursor-pointer">
          <h2>Outdoor Installation</h2>
        </div>
        <div class="text-[red] cursor-pointer">Indoor Installation</div>

        <div
          class="text-black text-base font-normal font-['Source Sans Pro'] text-center absolute left-[1598px]"
        >
          Oct 30, 2023 11:35 AM
        </div>
      </nav>
      <nav
        class="mt-1 p-2 border text-black-300 bg-white-600 font-bold font-[Source Sans Pro] text-[15px] w-full flex flex-row rounded-md"
      >
        <router-link to="/pages/InstallationReport">
          <div class="mx-10">Outdoor Installation</div>
        </router-link>
        <router-link to="/pages/InstallationReport">
          <div class="text-[red]">Indoor Installation</div>
        </router-link>

        <div
          class="text-black text-base font-normal font-['Source Sans Pro'] text-center absolute left-[1598px]"
        >
          Nov 30, 2023 11:35 AM
        </div>
      </nav>
    </div>
    <div class="grid grid-cols-1 gap-4">
      <div class="col-span-1">
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <input
            type="text"
            id="field1"
            name="field1"
            placeholder=" Full Name"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>

        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Customer ID"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Phone"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Address"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md">
          <input
            type="text"
            id="field2"
            name="field2"
            placeholder="E-mail"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
      </div>
    </div>
    <div class="w-full h-[530px] bg-white p-8 rounded shadow">
      <form action="#" method="POST" class="grid grid-cols-1 lg:grid-cols-2 my-5 gap-8">
        <!-- Column 1 -->
        <div class="mb-4">
          <!-- Row 1 -->
          <div class="mb-4">
            <label for="picture" class="block text-sm font-semibold text-gray-600 mb-2"
              >Upload Picture</label
            >
            <input
              type="file"
              id="picture"
              name="picture"
              class="w-[689px] p-2 border rounded-md"
            />
          </div>

          <!-- Row 2 -->
        </div>
        <div class="mb-4">
          <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
            >Issues Encounted</label
          >
          <select
            id="dropdown2"
            name="dropdown2"
            class="w-[420px] p-2 border bg-white-500 rounded-md"
          >
            <option value="option1">Lastmile</option>
            <option value="option2">Advancedmile</option>
            <option value="option3">Distance</option>
          </select>
        </div>
      </form>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="mb-4">
          <div><label for="name">Installation Date</label></div>
          <input type="date" class="border p-2 w-[400px] rounded-md" />
        </div>
        <div class="mb-4">
          <div><label for="name">Installation Time</label></div>
          <input type="time" class="border p-2 w-[400px] rounded-md" />
        </div>
        <div class="mb-4">
          <label for="dropdown1" class="block text-sm font-semibold text-gray-600 mb-2"
            >Installation Status</label
          >
          <select id="dropdown1" name="dropdown1" class="w-[400px] p-2 border rounded-md">
            <option value="option1">Completed</option>
            <option value="option2">Incomplete</option>
            <option value="option3">Ongoing</option>
          </select>
        </div>
      </div>
      <div class="mb-4">
        <label for="comment" class="block text-sm font-medium text-gray-600">Comments</label>
        <textarea
          id="comment"
          name="comment"
          placeholder="input comments"
          rows="3"
          class="mt-1 p-2 border w-full h-[190px] rounded-md"
        ></textarea>
      </div>
    </div>
  </div>
</template>
