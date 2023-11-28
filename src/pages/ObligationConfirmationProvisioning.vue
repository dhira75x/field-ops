<template>
  <body class="bg-gray-100">
    <!-- Navigation Bar -->
    <nav class="w-[1183px] h-[102px] bg-white shadow">
      <div
        class="shadow-lg bg-white flex w-full justify-between gap-5 pl-16 pr-16 py-7 max-md:max-w-full max-md:flex-wrap max-md:px-5"
      >
        <div class="text-black text-2xl font-bold leading-7 mt-6">Technicians</div>
        <div class="items-start self-stretch flex justify-between gap-5 max-md:justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecdd86c8-49ae-47fc-8d41-69faa346419a?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&"
            class="aspect-[0.94] object-contain object-center w-[30px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          /><img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/383bbbc7-2258-4cbc-8a7d-02684922b8ac?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/383bbbc7-2258-4cbc-8a7d-02684922b8ac?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/383bbbc7-2258-4cbc-8a7d-02684922b8ac?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/383bbbc7-2258-4cbc-8a7d-02684922b8ac?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/383bbbc7-2258-4cbc-8a7d-02684922b8ac?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/383bbbc7-2258-4cbc-8a7d-02684922b8ac?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/383bbbc7-2258-4cbc-8a7d-02684922b8ac?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/383bbbc7-2258-4cbc-8a7d-02684922b8ac?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&"
            class="aspect-square object-contain object-center w-12 overflow-hidden self-stretch shrink-0 max-w-full"
          />
          <div class="text-gray-900 text-lg font-bold leading-5 self-center my-auto">
            Victor Ade
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/74696208-79e3-4b51-b8d2-c89783e303fd?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&"
            class="aspect-square object-contain object-center w-[33px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </nav>
    <br />

    <div
      class="w-[1057px] h-[39px] px-[18px] py-2.5 my-35 left-[32.31px] bg-white rounded-sm shadow border border-zinc-300 justify-start items-center gap-[43px] inline-flex"
    >
      <div class="text-neutral-600 text-base font-semibold font-['Roboto']">My Schedule</div>
      <div class="text-orange-600 text-base font-semibold font-['Roboto']">Confirmations</div>
    </div>

    <div
      class="w-[1109px] h-[1820px] flex-col justify-start items-center gap-[15px] inline-flex left-[32.31px]"
    >
      <div class="w-[1109px] h-[408px] relative my-52">
        <table class="w-full text-sm text-left rtl:text-right text-black-500 dark:text-black-400">
          <thead
            class="text-xs text-white-700 uppercase bg-white-50 dark:bg-white-700 dark:text-black-400 h-[18px]"
          >
            <tr>
              <th scope="col" class="px-6 py-3">S/N:</th>
              <th scope="col" class="px-6 py-3">Customer Name</th>
              <th scope="col" class="px-6 py-3">Phone Number</th>
              <th scope="col" class="px-6 py-3">Activity</th>
              <th scope="col" class="px-6 py-3">Schedule Start Time</th>
              <th scope="col" class="px-6 py-3">Schedule Completion</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white odd:dark:bg-white-900 h-[14px] even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-black-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                01"
              </th>
              <td class="px-6 py-4">Ugochukwu Abraham</td>
              <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
              <td class="px-6 py-4">Fault Provisioning</td>
              <td class="px-6 py-4">08:30:00</td>
              <td class="px-6 py-4">09:30:00</td>
              <td class="px-6 py-4">Completed</td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >View Confirmation Request</a
                >
              </td>
            </tr>
            <tr
              class="odd:bg-white odd:dark:bg-white-900 h-[14px] even:bg-white-50 even:dark:bg-whiteS-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                02
              </th>
              <td class="px-6 py-4">Ugochukwu Abraham</td>
              <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
              <td class="px-6 py-4">Fault Provisioning</td>
              <td class="px-6 py-4">09:30:00</td>
              <td class="px-6 py-4">10:30:00</td>
              <td class="px-6 py-4">Pending</td>
              <td
                class="w-[204px] h-[38px] px-[22px] py-2.5 rounded-[5px] border border-black justify-center items-center gap-2.5 inline-flex"
              >
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >View Confirmation Request</a
                >
              </td>
            </tr>
            <tr
              class="odd:bg-white odd:dark:bg-white-900 h-[14px] even:bg-white-50 even:dark:bg-white-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                03
              </th>
              <td class="px-6 py-4">Anthony Adeyi</td>
              <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
              <td class="px-6 py-4">Activation Provisioning</td>
              <td class="px-6 py-4">10:30:00</td>
              <td class="px-6 py-4">11:30:00</td>
              <td class="px-6 py-4">Pending</td>
              <td
                class="w-[204px] h-[38px] px-[22px] py-2.5 rounded-[5px] border border-black justify-center items-center gap-2.5 inline-flex"
              >
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >View Confirmation Request</a
                >
              </td>
            </tr>
            <tr
              class="odd:bg-white odd:dark:bg-white-900 h-[14px] even:bg-white-50 even:dark:bg-white-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                04
              </th>
              <td class="px-6 py-4">Ugochukwu Abraham</td>
              <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
              <td class="px-6 py-4">Fault Provisioning</td>
              <td class="px-6 py-4">08:30:00</td>
              <td class="px-6 py-4">09:30:00</td>
              <td class="px-6 py-4">Completed</td>
              <td
                class="w-[204px] h-[38px] px-[22px] py-2.5 rounded-[5px] border border-black justify-center items-center gap-2.5 inline-flex"
              >
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >View Confirmation Request</a
                >
              </td>
            </tr>
            <tr
              class="odd:bg-white odd:dark:bg-white-900 h-[14px] even:bg-white-50 even:dark:bg-white-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                05
              </th>
              <td class="px-6 py-4">Ugochukwu Abraham</td>
              <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
              <td class="px-6 py-4">Fault Provisioning</td>
              <td class="px-6 py-4">09:30:00</td>
              <td class="px-6 py-4">10:30:00</td>
              <td class="px-6 py-4">Pending</td>
              <td
                class="w-[204px] h-[38px] px-[22px] py-2.5 rounded-[5px] border border-black justify-center items-center gap-2.5 inline-flex"
              >
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >View Confirmation Request</a
                >
              </td>
            </tr>
            <tr
              class="odd:bg-white h-[14px] odd:dark:bg-white-900 even:bg-white-50 even:dark:bg-white-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                06
              </th>
              <td class="px-6 py-4">Anthony Adeyi</td>
              <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
              <td class="px-6 py-4">Fault Provisioning</td>
              <td class="px-6 py-4">10:30:00</td>
              <td class="px-6 py-4">11:30:00</td>
              <td class="px-6 py-4">Pending</td>
              <td
                class="w-[204px] h-[38px] px-[22px] py-2.5 rounded-[5px] border border-black justify-center items-center gap-2.5 inline-flex"
              >
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >View Confirmation Request</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</template>
<script setup></script>
<style scoped></style>
