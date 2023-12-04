<template>
  <table
    class="bg-[#ffffff] rounded-[5px] w-full h-[550px] mx-11 ml-"
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
        <td
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          01"
        </td>
        <td class="px-6 py-4">Ugochukwu Abraham</td>
        <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
        <td class="px-6 py-4">Fault Provisioning</td>
        <td class="px-6 py-4">08:30:00</td>
        <td class="px-6 py-4">09:30:00</td>
        <td class="px-6 py-4">Completed</td>
        <td class="bg-white-200">
          <router-link to="/pages/ViewConfirmationRequest">
            <a>View Confirmation Request</a>
          </router-link>
        </td>
      </tr>
      <tr
        class="odd:bg-white odd:dark:bg-white-900 h-[14px] even:bg-white-50 even:dark:bg-whiteS-800 border-b dark:border-gray-500"
      >
        <td
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          02
        </td>
        <td class="px-6 py-4">Ugochukwu Abraham</td>
        <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
        <td class="px-6 py-4">Fault Provisioning</td>
        <td class="px-6 py-4">09:30:00</td>
        <td class="px-6 py-4">10:30:00</td>
        <td class="px-6 py-4">Pending</td>
        <td class="bg-white-200">
          <router-link to="/pages/ViewConfirmationRequest">
            <a>View Confirmation Request</a>
          </router-link>
        </td>
      </tr>
      <tr
        class="odd:bg-white odd:dark:bg-white-900 h-[14px] even:bg-white-50 even:dark:bg-white-800 border-b dark:border-gray-700"
      >
        <td
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          03
        </td>
        <td class="px-6 py-4">Anthony Adeyi</td>
        <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
        <td class="px-6 py-4">Activation Provisioning</td>
        <td class="px-6 py-4">10:30:00</td>
        <td class="px-6 py-4">11:30:00</td>
        <td class="px-6 py-4">Pending</td>
        <td class="bg-white-200">
          <router-link to="/pages/ViewConfirmationRequest">
            <a>View Confirmation Request</a>
          </router-link>
        </td>
      </tr>
      <tr
        class="odd:bg-white odd:dark:bg-white-900 h-[14px] even:bg-white-50 even:dark:bg-white-800 border-b dark:border-gray-700"
      >
        <td
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          04
        </td>
        <td class="px-6 py-4">Ugochukwu Abraham</td>
        <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
        <td class="px-6 py-4">Fault Provisioning</td>
        <td class="px-6 py-4">08:30:00</td>
        <td class="px-6 py-4">09:30:00</td>
        <td class="px-6 py-4">Completed</td>
        <td class="bg-white-200">
          <router-link to="/pages/ViewConfirmationRequest">
            <a>View Confirmation Request</a>
          </router-link>
        </td>
      </tr>
      <tr
        class="odd:bg-white odd:dark:bg-white-900 h-[14px] even:bg-white-50 even:dark:bg-white-800 border-b dark:border-gray-700"
      >
        <td
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          05
        </td>
        <td class="px-6 py-4">Ugochukwu Abraham</td>
        <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
        <td class="px-6 py-4">Fault Provisioning</td>
        <td class="px-6 py-4">09:30:00</td>
        <td class="px-6 py-4">10:30:00</td>
        <td class="px-6 py-4">Pending</td>
        <td class="bg-white-200">
          <router-link to="/pages/ViewConfirmationRequest">
            <a>View Confirmation Request</a>
          </router-link>
        </td>
      </tr>
      <tr
        class="odd:bg-white h-[14px] odd:dark:bg-white-900 even:bg-white-50 even:dark:bg-white-800 border-b dark:border-gray-700"
      >
        <td
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          06
        </td>
        <td class="px-6 py-4">Anthony Adeyi</td>
        <td class="px-6 py-4">15 Malcolm Fraser Street,Asokoro, Abuja</td>
        <td class="px-6 py-4">Fault Provisioning</td>
        <td class="px-6 py-4">10:30:00</td>
        <td class="px-6 py-4">11:30:00</td>
        <td class="px-6 py-4">Pending</td>
        <td class="bg-white-200">
          <router-link to="/pages/ViewConfirmationRequest">
            <a>View Confirmation Request</a>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>
