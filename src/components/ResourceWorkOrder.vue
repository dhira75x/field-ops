<template>
  <div class="w-full h-[1500px] bg-white p-8 rounded shadow">
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
      <div class="w-full">
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          ID
          <div></div>
        </div>

        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Customer's Name:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.cutomer_name }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Date:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.date }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Network Segment
          </div>
          <div class="w-1/2">
            {{ props.workOrder.network_segment }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Affected Node:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.affected_nodes }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Class of Fault:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.class_of_fault }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Type of Fault:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.type_of_fault }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            DNI Image:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.dni_image }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Comment:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.comment }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Splitter
          </div>
          <div class="w-1/2">
            {{ props.workOrder.splitter }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Splitter Port:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.splitter_port }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            OLT
          </div>
          <div class="w-1/2">
            {{ props.workOrder.olt }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            OLT Port
          </div>
          <div class="w-1/2">
            {{ props.workOrder.olt_port }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Latitude:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.Latitude }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Longitude:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.Longitude }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Action Required:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.actions_required }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Distance Affected to Meters:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.distance_affected }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Number of Core to Splice:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.no_of_core_to_splice}}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Estimated Time of Resolution:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.etr}}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Produced by:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.prepared_by }}
          </div>
        </div>
        <div class="mb-4 mt-1 p-2 border w-full rounded-md flex flex-row">
          <div class="w-1/2">
            Approved to:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.approved_by }}
          </div>
        </div>
        <div
          class="mb-4 mt-1 p-2 border w-full font-normal font-['Source Sans Pro'] rounded-md gap-3"
        >
          <div class="w-1/2">
            Assigned To:
          </div>
          <div class="w-1/2">
            {{ props.workOrder.assigned_to }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["workOrder"]);
</script>
