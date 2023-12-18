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
        <div>
          <SurveyReportForm />
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
import SurveyReportForm from "../components/SurveyReportForm.vue";
import ResourceWorkOrder from "../components/ResourceWorkOrder.vue";
import { onMounted, ref } from "vue";
import workplaceRequestsv2 from "@/service/workplaceRequestsv2.js";
import { useRoute } from "vue-router";
const work_order = ref({
  id: 1,
  ID: "",
  cutomer_name: "",
  date: "",
  address: "",
  network_segment: "",
  affected_nodes: "",
  class_of_fault: "",
  type_of_fault: "",
  dni_image:
    "",
  comment: "",
  splitter: "",
  splitter_port: "",
  olt: "",
  olt_port: "",
  Latitude: "",
  Longitude: "",
  actions_required: null,
  distance_affected: "",
  no_of_core_to_splice: "",
  etr: "",
  prepared_by: "",
  assigned_to: "",
  approved_by: "",
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
