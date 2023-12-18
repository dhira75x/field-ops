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
          v-if="userStore.$state.user.installer_role == 'provisioning'"
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
            :class="timezoneProvisioning(it.end_time)"
            style="font: 700 12px/15px 'SourceSansPro-Bold', sans-serif;"
          >
            <td
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              scope="row"
            >
              {{ it.id }}
            </td>
            <td class="px-6 py-4">{{ it.customer }}</td>
            <td class="px-6 py-4">
              {{ it.address }}
            </td>
            <td class="px-6 py-4">{{ it.phone_number }}</td>
            <td class="px-6 py-4">{{ it.activity }}</td>
            <td class="px-6 py-4">{{ it.start_time }}</td>
            <td class="px-6 py-4">{{ it.end_time }}</td>
            <td class="px-6 py-4">{{ it.status }}</td>
            <td v-if="userStore.$state.user.installer_role == 'provisioning'">
              <router-link
                :to="{
                  name: 'ResourceDiagnosis',
                  params: { id: it.diagnosis_report_id, id2: it.work_order_id },
                }"
              >
                View Resources
              </router-link>
            </td>
            <td>
              <a
                v-if="userStore.$state.user.installer_role == 'provisioning'"
                href="#"
                class="font-semibold text-black-600 text-center dark:text-black-500 hover:underline rounded-md"
                @click="
                  showYesFaultConfirmationModal = !showYesFaultConfirmationModal
                "
                >Upload Report</a
              >
            </td>
          </tr>
        </tbody>
        <tbody
          v-if="userStore.$state.user.installer_role == 'installation'"
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
            :class="timezone(it.end_date)"
            style="font: 700 12px/15px 'SourceSansPro-Bold', sans-serif;"
          >
            <td
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              scope="row"
            >
              {{ it.id }}
            </td>
            <td class="px-6 py-4">{{ it.customer_name }}</td>
            <td class="px-6 py-4">
              {{ it.address }}
            </td>
            <td class="px-6 py-4">{{ it.phone_number }}</td>
            <td class="px-6 py-4">{{ it.activity }}</td>
            <td class="px-6 py-4">{{ getTime(it.exp_start_date) }}</td>
            <td class="px-6 py-4">{{ getTime(it.end_date) }}</td>
            <td class="px-6 py-4">{{ it.status }}</td>
            <td>
              <router-link :to="{ name: 'ResourceRouteWork' }">
                View Resources
              </router-link>
            </td>
            <td>
              <router-link :to="{name:'SurveyReport', params: {id: it.id}}">
                Upload Report
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

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
    <AppPagination
      class="mt-10"
      @@fetchRecords="getSchedules"
      :pagination="pagination"
    />
    <!-- <SurveyReportForm /> -->
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
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
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
// const provisioningData = ref([
//   {
//     label: "",
//     values: [],
//   },
// ]);
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
    if (userStore.$state.user.installer_role == "installation") {
      const { status, data } = await workplaceRequestsv2(
        "get",
        `operations/sd/installer/schedules?per_page=${recordsPerPage.value}&page=${pageNumber}`
      );
      if (status == 200) {
        schedules.value = data.data.data;
        restructureData.value = Object.entries(schedules.value).map((v, k) => {
          return { label: v[0], values: v[1] };
        });
        console.log(restructureData.value);
        total.value = data.data.pagination?.total;
        current.value = data.data.pagination?.current;
        from.value = data.data.pagination?.from;
        to.value = data.data.pagination?.to;
        pages.value = data.data.pagination?.pages;
      }
    }
    if (userStore.$state.user.installer_role == "provisioning") {
      const { status, data } = await workplaceRequestsv2(
        "get",
        `network/work-order/schedules?per_page=${recordsPerPage.value}&page=${pageNumber}`
      );
      if (status == 200) {
        schedules.value = data.data.data;
        restructureData.value = Object.entries(schedules.value).map((v, k) => {
          return { label: v[0], values: v[1] };
        });
        total.value = data.data.pagination?.total;
        current.value = data.data.pagination?.current;
        from.value = data.data.pagination?.from;
        to.value = data.data.pagination?.to;
        pages.value = data.data.pagination?.pages;
      }
    }
  } catch (e) {
    alert(e.message);
  }
};

const timezone = (date) => {
  const time = date.split("T")[1];
  const hr = time.split(":")[0];
  console.log(hr);
  if (hr < 12) {
    return "bg-blue-200";
  }

  if (hr < 16) {
    return "bg-red-200";
  }

  return "bg-green-200";
};
const timezoneProvisioning = (time) => {
  const hr = time.split(":")[0];
  console.log(hr);
  if (hr < 12) {
    return "bg-blue-200";
  }

  if (hr < 16) {
    return "bg-red-200";
  }

  return "bg-green-200";
};

const getTime = (date) => {
  const time = date.split("T")[1];
  return time.substring(0, 8);
};
</script>
