<template>
  <div class="w-full h-[678px] bg-white p-8 rounded shadow">
    <div class="mb-4">
      <nav
        class="mt-1 p-2 border text-black-300 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
      >
        <div>
          <h2>Site Information</h2>
        </div>

        <div
          class="text-black text-base font-normal font-['Source Sans Pro'] text-center absolute left-[1598px]"
        >
          Oct 30, 2023 11:35 AM
        </div>
      </nav>
    </div>
    <div class="">
      <!-- <div class="col-span-1"> -->
      <div class="flex flex-row">
        <div class="mb-4 mt-1 p-2 border w-1/2 rounded-md">
          Customer Name:
        </div>
        <div class="mb-3 w-1/2">
          <input
            type="readonly"
            id="field3"
            name="field3"
            class="mt-1 p-2 border w-full rounded-md"
            :value="routeWorkData.customer_name"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="mb-4 mt-1 p-2 border w-1/2 rounded-md">
          Customer Address:
        </div>
        <div class="mb-3 w-1/2">
          <input
            :value="routeWorkData.address"
            type="readonly"
            id="field3"
            name="field3"
            class="mt-1 p-2 border w-1/2 rounded-md"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="mb-4 mt-1 p-2 border w-1/2 rounded-md">
          GPS Coordinates:
        </div>
        <div class="mb-3 w-1/2">
          <input
            :value="`${routeWorkData.gps_coordinates.latitude} ${routeWorkData.gps_coordinates.longitude}`"
            type="readonly"
            id="field3"
            name="field3"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="mb-4 mt-1 p-2 border w-1/2 rounded-md">
          Installer:
        </div>
        <div class="mb-3 w-1/2">
          <input
            :value="routeWorkData.installer"
            type="readonly"
            id="field3"
            name="field3"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="mb-4 mt-1 p-2 border w-1/2 rounded-md">
          Proposed Splitter:
        </div>
        <div class="mb-3 w-1/2">
          <input
            :value="routeWorkData.proposed_splitter"
            type="readonly"
            id="field3"
            name="field3"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="mb-4 mt-1 p-2 border w-1/2 rounded-md">
          Accuracy:
        </div>
        <div class="mb-3 w-1/2">
          <input
            :value="routeWorkData.accuracy"
            type="readonly"
            id="field3"
            name="field3"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="mb-4 mt-1 p-2 border w-1/2 rounded-md">
          Pick Point:
        </div>
        <div class="mb-3 w-1/2">
          <input
            :value="routeWorkData.pickup_point"
            type="readonly"
            id="field3"
            name="field3"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
      </div>
      <div class="flex flex-row w-full">
        <div class="mb-4 mt-1 p-2 border w-1/2 rounded-md">
          Pick Point Coordinates:
        </div>
        <div class="mb-3 w-1/2">
          <input
            :value="`${routeWorkData.gps_coordinates.latitude} ${routeWorkData.gps_coordinates.longitude}`"
            type="readonly"
            id="field3"
            name="field3"
            class="mt-1 p-2 border w-full rounded-md"
          />
        </div>
      </div>
      <!-- </div> -->

      <!-- <div class="col-span-1"> -->
    </div>
  </div>
  <!-- </div> -->
  <div
    class="w-full h-[650px] bg-white p-8 gap-5 rounded shadow flex-col inline-flex my-1"
  >
    <nav
      class="mt-1 p-2 border text-black-300 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      <div>
        <h2>New Splitters/ FATs</h2>
      </div>

      <div
        class="text-black text-base font-normal font-['Source Sans Pro'] text-center absolute left-[1598px]"
      >
        Oct 30, 2023 11:35 AM
      </div>
    </nav>
    <table
      class="bg-[#ffffff] rounded-[5px] h-[45px]"
      style="
        box-shadow: var(
          --card-shadow-box-shadow,
          2px 3px 10px 0px rgba(34, 41, 46, 0.05)
        );
      "
    >
      <thead
        class="text-legend-black text-left uppercase w-6 h-[65px]"
        style="font: 700 12px/15px 'SourceSansPro-Bold', sans-serif;"
      >
        <tr>
          <th scope="col" class="px-6 py-3">S/N:</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3">Location</th>
          <th scope="col" class="px-6 py-3">Latitude</th>
          <th scope="col" class="px-6 py-3">Longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in routeWorkData.new_splitter_and_fats" :key="index">
          <td scope="col" class="px-6 py-3">
            {{ index + 1 }}
          </td>
          <td scope="col" class="px-6 py-3">
            {{ item.name }}
          </td>
          <td scope="col" class="px-6 py-3">
            {{ item.type }}
          </td>
          <td scope="col" class="px-6 py-3">
            {{ item.location }}
          </td>
          <td scope="col" class="px-6 py-3">
            {{ item.latitude }}
          </td>
          <td scope="col" class="px-6 py-3">
            {{ item.longitude }}
          </td>
        </tr>
      </tbody>
    </table>

    <img
      class="h-auto w-full transition-all duration-300 rounded-lg cursor"
      :src="routeWorkData.image"
      alt="image description"
    />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import workplaceRequestsv2 from "../service/workplaceRequestsv2";
const route = useRoute();

onMounted(() => {
  getRouteDiagram();
});

const routeWorkData = ref({
  id: null,
  customer_name: "",
  address: "",
  gps_coordinates: {
    latitude: "",
    longitude: "",
  },
  customer_contact: "",
  installer: "",
  proposed_splitter: "",
  accuracy: "",
  pickup_point: "",
  image: "",
  new_splitter_and_fats: [
    {
      id: null,
      name: "",
      type: "",
      location: "",
      latitude: "",
      longitude: ""
    },
  ],
});

const getRouteDiagram = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `operations/sd/routediagram/${route.params.id}`
    );
    if (status == 200) {
      routeWorkData.value = data?.data?.data;
    }
  } catch (e) {
    alert(e.message);
  }
};
//import DiagnosisDate from '../components/DiagnosisDate'
</script>
