<template>
  <div class="h-[930]">
    <div class="mb-10" v-for="(item, index) in restructureData" :key="index">
      <div class="">
        <AssignmentDate7
          :data="item.label"
          :count="item?.values?.length"
          class="px-10"
        />
      </div>

      <table
        class="bg-[#ffffff] rounded-[5px] px-10"
        style="
          box-shadow: var(
            --card-shadow-box-shadow,
            2px 3px 10px 0px rgba(34, 41, 46, 0.05)
          );
        "
      >
        <thead
          class="text-legend-black text-left uppercase w-6"
          style="font: 700 12px/15px 'SourceSansPro-Bold', sans-serif;"
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
          class="rounded-[5px]"
          style="
            box-shadow: var(
              --card-shadow-box-shadow,
              2px 3px 10px 0px rgba(34, 41, 46, 0.05)
            );
          "
        >
          <tr
            v-for="(it, i) in item.values"
            :key="i"
            class="text-legend-black text-left w-6"
            style="font: 700 12px/15px 'SourceSansPro-Bold', sans-serif;"
          >
            <td
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-blue-200 dark:text-black"
              scope="row"
            >
              {{ it.id }}
            </td>
            <td class="px-6 py-4 bg-blue-200">{{ it.customer_name }}</td>
            <td class="px-6 py-4 bg-blue-200">
              {{ it.address }}
            </td>
            <td class="px-6 py-4 bg-blue-200">{{ it.phone_number }}</td>
            <td class="px-6 py-4 bg-blue-200">{{ it.activity }}</td>
            <td class="px-6 py-4 bg-blue-200">{{ it.request_date }}</td>
            <td class="px-6 py-4 bg-blue-200">{{ it.exp_start_date }}</td>
            <td class="px-6 py-4 bg-blue-200">{{ it.status }}</td>
            <td class="bg-blue-200">
              <router-link
                :to="{ name: 'ResourceDiagnosis', params: { id: it.id } }"
              >
                View Resources
              </router-link>
            </td>
            <td class="bg-blue-200">
              <a
                href="#"
                class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
                @click="
                  showYesFaultConfirmationModal = !showYesFaultConfirmationModal
                "
                >Upload Report</a
              >
            </td>
          </tr>
          <!-- <tr
            class="text-black text-left w-[130.28px] h-14"
            style="font: 400 12px/15px 'SourceSansPro-Regular', sans-serif;"
          >
            <th
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-blue-200 dark:text-black"
              scope="row"
            >
              02
            </th>
            <td class="px-6 py-4 bg-blue-200">Anthony Adeyi</td>
            <td class="px-6 py-4 bg-blue-200">
              15 Malcolm Fraser Street,Asokoro, Abuja
            </td>
            <td class="px-6 py-4 bg-blue-200">081848849663</td>
            <td class="px-6 py-4 bg-blue-200">Activation Provisioning</td>
            <td class="px-6 py-4 bg-blue-200">10:30:00</td>
            <td class="px-6 py-4 bg-blue-200">11:30:00</td>
            <td class="px-6 py-4 bg-blue-200">Completed</td>
            <td class="bg-blue-200">
              <router-link to="/pages/ResourceDiagnosis">
                <a>View Resources</a>
              </router-link>
            </td>
            <td class="bg-blue-200">
              <a
                href="#"
                class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
                @click="
                  showYesFaultConfirmationActModal = !showYesFaultConfirmationActModal
                "
                >Upload Report</a
              >
            </td>
          </tr>
          <tr
            class="text-black text-left w-[130.28px] h-14"
            style="font: 400 12px/15px 'SourceSansPro-Regular', sans-serif;"
          >
            <th
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-blue-200 dark:text-black"
              scope="row"
            >
              03
            </th>
            <td class="px-6 py-4 bg-blue-200">Anthony Adeyi</td>
            <td class="px-6 py-4 bg-blue-200">
              15 Malcolm Fraser Street,Asokoro, Abuja
            </td>
            <td class="px-6 py-4 bg-blue-200">081848849663</td>
            <td class="px-6 py-4 bg-blue-200">Fault Provisioning</td>
            <td class="px-6 py-4 bg-blue-200">10:30:00</td>
            <td class="px-6 py-4 bg-blue-200">11:30:00</td>
            <td class="px-6 py-4 bg-blue-200">Completed</td>
            <td class="bg-blue-200">
              <router-link to="/pages/ResourceDiagnosis">
                <a>View Resources</a>
              </router-link>
            </td>
            <td class="bg-blue-200">
              <a
                href="#"
                class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
                @click="
                  showYesFaultConfirmationActModal = !showYesFaultConfirmationModal
                "
                >Upload Report</a
              >
            </td>
          </tr>
          <tr
            class="text-black text-left w-[130.28px] h-14"
            style="font: 400 12px/15px 'SourceSansPro-Regular', sans-serif;"
          >
            <th
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-green-200 dark:text-black"
              scope="row"
            >
              04
            </th>
            <td class="px-6 py-4 bg-green-200">Anthony Adeyi</td>
            <td class="px-6 py-4 bg-green-200">
              15 Malcolm Fraser Street,Asokoro, Abuja
            </td>
            <td class="px-6 py-4 bg-green-200">081848849663</td>
            <td class="px-6 py-4 bg-green-200">Activation Provisioning</td>
            <td class="px-6 py-4 bg-green-200">10:30:00</td>
            <td class="px-6 py-4 bg-green-200">11:30:00</td>
            <td class="px-6 py-4 bg-green-200">Completed</td>
            <td class="bg-green-200">
              <router-link to="/pages/ResourceDiagnosis">
                <a>View Resources</a>
              </router-link>
            </td>
            <td class="bg-green-200">
              <a
                href="#"
                class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
                @click="
                  showYesFaultConfirmationActModal = !showYesFaultConfirmationActModal
                "
                >Upload Report</a
              >
            </td>
          </tr>
          <tr
            class="text-black text-left w-[130.28px] h-14"
            style="font: 400 12px/15px 'SourceSansPro-Regular', sans-serif;"
          >
            <th
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-green-200 dark:text-black"
              scope="row"
            >
              05
            </th>
            <td class="px-6 py-4 bg-green-200">Anthony Adeyi</td>
            <td class="px-6 py-4 bg-green-200">
              15 Malcolm Fraser Street,Asokoro, Abuja
            </td>
            <td class="px-6 py-4 bg-green-200">081848849663</td>
            <td class="px-6 py-4 bg-green-200">Fault Provisioning</td>
            <td class="px-6 py-4 bg-green-200">10:30:00</td>
            <td class="px-6 py-4 bg-green-200">11:30:00</td>
            <td class="px-6 py-4 bg-green-200">Completed</td>
            <td class="bg-green-200">
              <router-link to="/pages/ResourceDiagnosis">
                <a>View Resources</a>
              </router-link>
            </td>
            <td class="bg-green-200">
              <a
                href="#"
                class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
                @click="
                  showYesFaultConfirmationModal = !showYesFaultConfirmationModal
                "
                >Upload Report</a
              >
            </td>
          </tr>
          <tr
            class="text-black text-left w-[130.28px] h-14"
            style="font: 400 12px/15px 'SourceSansPro-Regular', sans-serif;"
          >
            <th
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-green-200 dark:text-black"
              scope="row"
            >
              06
            </th>
            <td class="px-6 py-4 bg-green-200">Anthony Adeyi</td>
            <td class="px-6 py-4 bg-green-200">
              15 Malcolm Fraser Street,Asokoro, Abuja
            </td>
            <td class="px-6 py-4 bg-green-200">081848849663</td>
            <td class="px-6 py-4 bg-green-200">Activation Provisioning</td>
            <td class="px-6 py-4 bg-green-200">10:30:00</td>
            <td class="px-6 py-4 bg-green-200">11:30:00</td>
            <td class="px-6 py-4 bg-green-200">Completed</td>
            <td class="bg-green-200">
              <router-link to="/pages/ResourceDiagnosis">
                <a>View Resources</a>
              </router-link>
            </td>
            <td class="bg-green-200">
              <a
                href="#"
                class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
                @click="
                  showYesFaultConfirmationActModal = !showYesFaultConfirmationActModal
                "
                >Upload Report</a
              >
            </td>
          </tr>
          <tr
            class="text-black text-left w-[130.28px] h-14"
            style="font: 400 12px/15px 'SourceSansPro-Regular', sans-serif;"
          >
            <th
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-red-200 dark:text-black"
              scope="row"
            >
              07
            </th>
            <td class="px-6 py-4 bg-red-200">Anthony Adeyi</td>
            <td class="px-6 py-4 bg-red-200">
              15 Malcolm Fraser Street,Asokoro, Abuja
            </td>
            <td class="px-6 py-4 bg-red-200">081848849663</td>
            <td class="px-6 py-4 bg-red-200">Fault Provisioning</td>
            <td class="px-6 py-4 bg-red-200">10:30:00</td>
            <td class="px-6 py-4 bg-red-200">11:30:00</td>
            <td class="px-6 py-4 bg-red-200">Completed</td>
            <td class="bg-red-200">
              <router-link to="/pages/ResourceDiagnosis">
                <a>View Resources</a>
              </router-link>
            </td>
            <td class="bg-red-200">
              <a
                href="#"
                class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
                @click="
                  showYesFaultConfirmationModal = !showYesFaultConfirmationModal
                "
                >Upload Report</a
              >
            </td>
          </tr>
          <tr
            class="text-black text-left w-[130.28px] h-14"
            style="font: 400 12px/15px 'SourceSansPro-Regular', sans-serif;"
          >
            <th
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-red-200 dark:text-black"
              scope="row"
            >
              08
            </th>
            <td class="px-6 py-4 bg-red-200">Anthony Adeyi</td>
            <td class="px-6 py-4 bg-red-200">
              15 Malcolm Fraser Street,Asokoro, Abuja
            </td>
            <td class="px-6 py-4 bg-red-200">081848849663</td>
            <td class="px-6 py-4 bg-red-200">Fault Provisioning</td>
            <td class="px-6 py-4 bg-red-200">10:30:00</td>
            <td class="px-6 py-4 bg-red-200">11:30:00</td>
            <td class="px-6 py-4 bg-red-200">Completed</td>
            <td class="bg-red-200">
              <router-link to="/pages/ResourceDiagnosis">
                <a>View Resources</a>
              </router-link>
            </td>
            <td class="bg-red-200">
              <a
                href="#"
                class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
                @click="
                  showYesFaultConfirmationModal = !showYesFaultConfirmationModal
                "
                >Upload Report</a
              >
            </td>
          </tr> -->
        </tbody>
      </table>
      <AppPagination
        class="mt-10"
        @@fetchRecords="getSchedules"
        :pagination="pagination"
      />
      <AppModal
        v-if="showYesFaultConfirmationModal"
        @click="showYesFaultConfirmationModal = !showYesFaultConfirmationModal"
      >
        <template #modal-content>
          <YesFaultConfirmation />
        </template>
      </AppModal>
      <AppModal
        v-if="showYesFaultConfirmationActModal"
        @click="
          showYesFaultConfirmationActModal = !showYesFaultConfirmationActModal
        "
      >
        <template #modal-content>
          <YesFaultConfirmationAct />
        </template>
      </AppModal>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import workplaceRequestsv2 from "../service/workplaceRequestsv2.js";
import AppModal from "../components/AppModal.vue";
import YesFaultConfirmationAct from "../pages/YesFaultConfirmationAct.vue";
import YesFaultConfirmation from "../pages/YesFaultConfirmation.vue";
import AssignmentDate7 from "./AssignmentDate7.vue";
import AppPagination from "@/components/AppPagination.vue";

const showYesFaultConfirmationModal = ref(false);
const showYesFaultConfirmationActModal = ref(false);
const from = ref(0);
const to = ref(0);
const pages = ref(1);
const total = ref(0);
const current = ref(1);
const recordsPerPage = ref(20);
const restructureData = ref([
  {
    label: "",
    values: [],
  },
]);
onMounted(() => {
  getSchedules(current.value);
});

const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
    recordsPerPage: recordsPerPage.value,
  };
});

const schedules = ref([]);
const getSchedules = async (pageNumber) => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `operations/sd/installer/schedules?per_page=${recordsPerPage.value}&page=${pageNumber}`
    );
    if (status == 200) {
      schedules.value = data.data.data;
      restructureData.value = Object.entries(schedules.value).map((v, k) => {
        return { label: v[0], values: v[1] };
      });
      total.value = data.data.pagination.total;
      current.value = data.data.pagination.current;
      from.value = data.data.pagination.from;
      to.value = data.data.pagination.to;
      pages.value = data.data.pagination.pages;
    }
  } catch (e) {
    alert(e.message);
  }
};
</script>
