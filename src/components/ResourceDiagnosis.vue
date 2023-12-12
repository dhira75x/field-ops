<template>
  <div class="w-full h-[529px] bg-white p-8 rounded shadow">
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
    <!-- <div class=""> -->
    <div class="w-full">
      <div class="mb-4 flex flex-row mt-1 p-2 border w-full rounded-md">
        <div class="w-1/2">
          Splitter Name
        </div>
        <div class="w-1/2">
          {{ diagnosis.splitter }} 
        </div>
      </div>
      <div class="mb-4 mt-1 p-2 flex flex-row border w-full rounded-md">
        <div class="w-1/2">
          Customer Address
        </div>
        <div class="w-1/2">
          {{ diagnosis.customer_address }}
        </div>
      </div>
      <div class="mb-4 mt-1 p-2 flex flex-row border w-full rounded-md">
        <div class="w-1/2">
          GPS Coordinates
        </div>
        <div class="w-1/2">
          {{ diagnosis.latitude }} {{ diagnosis.longitude }}
        </div>
      </div>
      <div class="mb-4 mt-1 p-2 flex flex-row border w-full rounded-md">
        <div class="w-1/2">
          Fault Segmentation
        </div>
        <div class="w-1/2">
          {{ diagnosis.fault_segmentation }}
        </div>
      </div>
      <div class="mb-4 mt-1 p-2 flex flex-row border w-full rounded-md">
        <div class="w-1/2">
          POF
        </div>
        <div class="w-1/2">
          {{ diagnosis.affected_node }}
        </div>
      </div>
      <div class="mb-4 mt-1 p-2 border flex flex-row w-full rounded-md">
        <div class="w-1/2">
          Possible POF
        </div>
        <div class="w-1/2">
          {{ diagnosis.affected_node }}
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import workplaceRequestsv2 from "@/service/workplaceRequestsv2.js";
import { useRoute } from "vue-router";

const diagnosis = ref({
  id: 4,
  customer: "Ashenafi Habetwold",
  customer_address:
    "Flat P5 Setraco Estate Lifecamp , \\n Life Camp, \\nAbuja.",
  fault_type: null,
  status: "Incomplete",
  reason: "Inaccurate Diagnosis",
  comment: "hihihih",
  affected_node: "Lifecamp",
  splitter: "LIFECAMP",
  splitter_port: "Port 20",
  olt: "GWARINPA",
  olt_port: "Port 3",
  latitude: "9.073256",
  longitude: "7.403876",
  fault_segmentation: "Access",
  cause_of_fault: "Dirty Connector",
  otdr_reading: "0908890",
  team: null,
  date: "2022-08-02T14:58:05.000000Z",
  duration: null,
  diagnosis: "500m of cable damage",
});
const route = useRoute();
onMounted(() => {
  getReport();
});
const getReport = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `network/maintenance/maintencance-diagnosis-reports/${route.params.id}`
    );
    if (status == 200) {
      /* empty */
      diagnosis.value = data.data.data;
    }
    console.log("diagnosi", data);
  } catch (e) {
    /* empty */

    console.log(e);
  }
};
</script>
