<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppVerticalNavigation />
        <div class="grid grid-cols-2 my-3">
          <div>
            <ChevronBack />
          </div>
          <div>
            <ButtonSubmit />
          </div>
        </div>
        <div>
          <ButtonOrder />
        </div>
        <div class="my-3 mx-10">
          <ResourceWorkOrder :workOrder="work_order"/>
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppVerticalNavigation from "../components/AppHorizontalNavigation.vue";
import ButtonOrder from "../components/ButtonOrder.vue";
import ChevronBack from "../components/ChevronBack.vue";
import ButtonSubmit from "../components/ButtonSubmit.vue";
import ResourceWorkOrder from "../components/ResourceWorkOrder.vue";
import { onMounted, ref } from "vue";
import workplaceRequestsv2 from "@/service/workplaceRequestsv2.js";
import { useRoute } from "vue-router";
const work_order = ref({
  id: 1,
  ID: "WO\/(PT,MT,PMO)\/20231212004",
  cutomer_name: "Ashenafi Habetwold",
  date: "2022-08-02T15:00:08.000000Z",
  address: "Flat P5 Setraco Estate Lifecamp , \\n Life Camp, \\nAbuja.",
  network_segment: "Access",
  affected_nodes: "Lifecamp",
  class_of_fault: "Techical Support",
  type_of_fault: "LOS",
  dni_image:
    "public\/files\/maintenance_diagnosis_report_images\/1\/download_1659452285.png",
  comment: "test",
  splitter: "LIFECAMP",
  splitter_port: "Port 20",
  olt: "GWARINPA",
  olt_port: "Port 3",
  Latitude: "9.073256",
  Longitude: "7.403876",
  actions_required: null,
  distance_affected: "500",
  no_of_core_to_splice: "1",
  etr: "01:01",
  prepared_by: "karim benzema",
  assigned_to: "karim benzema",
  approved_by: "karim benzema",
});
const route = useRoute();
onMounted(() => {
  getReport();
});
const getReport = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `network/planing/work-order/${route.params.id}`
    );
    if (status == 200) {
      work_order.value=data.data.data
      /* empty */
    }
  } catch (e) {
    /* empty */
  }
};
</script>
