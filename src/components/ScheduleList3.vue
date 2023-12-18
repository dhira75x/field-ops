<template>
  <div class="h-[464px] w-full">
    <div>
      <AssignmentDate7 />
    </div>

    <table
      class="bg-[#ffffff] rounded-[5px] h-[457px] w-full"
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
          <th scope="col" class="px-6 py-3">Address</th>
          <th scope="col" class="px-6 py-3">Phone Number</th>
          <th scope="col" class="px-6 py-3">Activity</th>
          <th scope="col" class="px-6 py-3">Schedule Start Time</th>
          <th scope="col" class="px-6 py-3">Schedule Completion</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Resources</th>
          <th scope="col" class="px-6 py-3">Report</th>
        </tr>
      </thead>
      <tbody
        class="rounded-[5px] h-[457px]"
        style="box-shadow: var(--card-shadow-box-shadow, 2px 3px 10px 0px rgba(34, 41, 46, 0.05))"
      >
        <tr
          class="text-legend-black text-left w-6 h-[65px]"
          style="
            font:
              700 12px/15px 'SourceSansPro-Bold',
              sans-serif;
          "
        >
          <td
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-blue-200 dark:text-black"
            scope="row"
          >
            01
          </td>
          <td class="px-6 py-4 bg-blue-200">Anthony Adeyi</td>
          <td class="px-6 py-4 bg-blue-200">15 Malcolm Fraser Street,Asokoro, Abuja</td>
          <td class="px-6 py-4 bg-blue-200">081848849663</td>
          <td class="px-6 py-4 bg-blue-200">Survey</td>
          <td class="px-6 py-4 bg-blue-200">10:30:00</td>
          <td class="px-6 py-4 bg-blue-200">11:30:00</td>
          <td class="px-6 py-4 bg-blue-200">Completed</td>
          <td class="bg-blue-200">
            <router-link to="/pages/ResourceRoute">
              <a>View Resources</a>
            </router-link>
          </td>
          <td class="bg-blue-200">
            <router-link to="/pages/SurveyReport">
              <a>Upload Report</a>
            </router-link>
          </td>
        </tr>
        <tr
          class="text-black text-left w-[130.28px] h-14"
          style="
            font:
              400 12px/15px 'SourceSansPro-Regular',
              sans-serif;
          "
        >
          <th
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-blue-200 dark:text-black"
            scope="row"
          >
            02
          </th>
          <td class="px-6 py-4 bg-blue-200">Anthony Adeyi</td>
          <td class="px-6 py-4 bg-blue-200">15 Malcolm Fraser Street,Asokoro, Abuja</td>
          <td class="px-6 py-4 bg-blue-200">081848849663</td>
          <td class="px-6 py-4 bg-blue-200">Survey</td>
          <td class="px-6 py-4 bg-blue-200">10:30:00</td>
          <td class="px-6 py-4 bg-blue-200">11:30:00</td>
          <td class="px-6 py-4 bg-blue-200">Completed</td>
          <td class="bg-blue-200">
            <router-link to="/pages/ResourceRoute">
              <a>View Resources</a>
            </router-link>
          </td>
          <td class="bg-blue-200">
            <router-link to="/pages/SurveyReport">
              <a>Upload Report</a>
            </router-link>
          </td>
        </tr>
        <tr
          class="text-black text-left w-[130.28px] h-14"
          style="
            font:
              400 12px/15px 'SourceSansPro-Regular',
              sans-serif;
          "
        >
          <th
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-blue-200 dark:text-black"
            scope="row"
          >
            03
          </th>
          <td class="px-6 py-4 bg-blue-200">Anthony Adeyi</td>
          <td class="px-6 py-4 bg-blue-200">15 Malcolm Fraser Street,Asokoro, Abuja</td>
          <td class="px-6 py-4 bg-blue-200">081848849663</td>
          <td class="px-6 py-4 bg-blue-200">Survey</td>
          <td class="px-6 py-4 bg-blue-200">10:30:00</td>
          <td class="px-6 py-4 bg-blue-200">11:30:00</td>
          <td class="px-6 py-4 bg-blue-200">Completed</td>
         <td class="bg-blue-200">
            <router-link to="/pages/ResourceRoute">
              <a>View Resources</a>
            </router-link>
          </td>
          <td class="bg-blue-200">
            <router-link to="/pages/SurveyReport">
              <a>Upload Report</a>
            </router-link>
          </td>
        </tr>
        <tr
          class="text-black text-left w-[130.28px] h-14"
          style="
            font:
              400 12px/15px 'SourceSansPro-Regular',
              sans-serif;
          "
        >
          <th
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-green-200 dark:text-black"
            scope="row"
          >
            04
          </th>
          <td class="px-6 py-4 bg-green-200">Anthony Adeyi</td>
          <td class="px-6 py-4 bg-green-200">15 Malcolm Fraser Street,Asokoro, Abuja</td>
          <td class="px-6 py-4 bg-green-200">081848849663</td>
          <td class="px-6 py-4 bg-green-200">Survey</td>
          <td class="px-6 py-4 bg-green-200">10:30:00</td>
          <td class="px-6 py-4 bg-green-200">11:30:00</td>
          <td class="px-6 py-4 bg-green-200">Completed</td>
          <td class="bg-green-200">
            <router-link to="/pages/ResourceRoute">
              <a>View Resources</a>
            </router-link>
          </td>
          <td class="bg-green-200">
            <router-link to="/pages/SurveyReport">
              <a>Upload Report</a>
            </router-link>
          </td>
        </tr>
        <tr
          class="text-black text-left w-[130.28px] h-14"
          style="
            font:
              400 12px/15px 'SourceSansPro-Regular',
              sans-serif;
          "
        >
          <th
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-green-200 dark:text-black"
            scope="row"
          >
            05
          </th>
          <td class="px-6 py-4 bg-green-200">Anthony Adeyi</td>
          <td class="px-6 py-4 bg-green-200">15 Malcolm Fraser Street,Asokoro, Abuja</td>
          <td class="px-6 py-4 bg-green-200">081848849663</td>
          <td class="px-6 py-4 bg-green-200">Survey</td>
          <td class="px-6 py-4 bg-green-200">10:30:00</td>
          <td class="px-6 py-4 bg-green-200">11:30:00</td>
          <td class="px-6 py-4 bg-green-200">Completed</td>
          <td class="bg-green-200">
            <a
              href="#"
              class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
              >View Resources</a
            >
          </td>
          <td class="bg-green-200">
            <a
              href="#"
              class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
              >Upload Report</a
            >
          </td>
        </tr>
        <tr
          class="text-black text-left w-[130.28px] h-14"
          style="
            font:
              400 12px/15px 'SourceSansPro-Regular',
              sans-serif;
          "
        >
          <th
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-green-200 dark:text-black"
            scope="row"
          >
            06
          </th>
          <td class="px-6 py-4 bg-green-200">Anthony Adeyi</td>
          <td class="px-6 py-4 bg-green-200">15 Malcolm Fraser Street,Asokoro, Abuja</td>
          <td class="px-6 py-4 bg-green-200">081848849663</td>
          <td class="px-6 py-4 bg-green-200">Survey</td>
          <td class="px-6 py-4 bg-green-200">10:30:00</td>
          <td class="px-6 py-4 bg-green-200">11:30:00</td>
          <td class="px-6 py-4 bg-green-200">Completed</td>
          <td class="bg-green-200">
            <a
              href="#"
              class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
              >View Resources</a
            >
          </td>
          <td class="bg-green-200">
            <a
              href="#"
              class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
              >Upload Report</a
            >
          </td>
        </tr>
        <tr
          class="text-black text-left w-[130.28px] h-14"
          style="
            font:
              400 12px/15px 'SourceSansPro-Regular',
              sans-serif;
          "
        >
          <th
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-red-200 dark:text-black"
            scope="row"
          >
            07
          </th>
          <td class="px-6 py-4 bg-red-200">Anthony Adeyi</td>
          <td class="px-6 py-4 bg-red-200">15 Malcolm Fraser Street,Asokoro, Abuja</td>
          <td class="px-6 py-4 bg-red-200">081848849663</td>
          <td class="px-6 py-4 bg-red-200">Outdoor Installation</td>
          <td class="px-6 py-4 bg-red-200">10:30:00</td>
          <td class="px-6 py-4 bg-red-200">11:30:00</td>
          <td class="px-6 py-4 bg-red-200">Completed</td>
          <td class="bg-red-200">
            <a
              href="#"
              class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
              >View Resources</a
            >
          </td>
          <td class="bg-red-200">
            <a
              href="#"
              class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
              >Upload Report</a
            >
          </td>
        </tr>
        <tr
          class="text-black text-left w-[130.28px] h-14"
          style="
            font:
              400 12px/15px 'SourceSansPro-Regular',
              sans-serif;
          "
        >
          <th
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-red-200 dark:text-black"
            scope="row"
          >
            08
          </th>
          <td class="px-6 py-4 bg-red-200">Anthony Adeyi</td>
          <td class="px-6 py-4 bg-red-200">15 Malcolm Fraser Street,Asokoro, Abuja</td>
          <td class="px-6 py-4 bg-red-200">081848849663</td>
          <td class="px-6 py-4 bg-red-200">Indoor Installation</td>
          <td class="px-6 py-4 bg-red-200">10:30:00</td>
          <td class="px-6 py-4 bg-red-200">11:30:00</td>
          <td class="px-6 py-4 bg-red-200">Completed</td>
          <td class="bg-red-200">
            <a
              href="#"
              class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
              >View Resources</a
            >
          </td>
          <td class="bg-red-200">
            <a
              href="#"
              class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
              >Upload Report</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import AssignmentDate7 from './AssignmentDate7.vue'
</script>
