<template>
  <div class="w-full bg-white p-8 rounded shadow">
    <div class="bg-white grid grid-cols-2 w-full h-[51px] rounded-sm">
      <div
        class="justify-start text-[25px] text-black-300 font-bold font-[Source Sans Pro] text-start"
      >
        Site Information
      </div>
      <div
        class="text-black font-normal font-['Source Sans Pro'] my-2 flex flex-row-reverse"
      >
        Oct 30, 2023 11:35 AM
      </div>
    </div>

    <h2 class="text-lg font-bold mb-4 my-5">GPS Coordinates:</h2>

    <div class="grid grid-cols-5 gap-4">
      <div>
        <input
          v-model="payload.latitutude"
          type="text"
          id="input1"
          name="input1"
          class="mt-1 p-2 w-[156px] h-[60px] border border-gray-800 rounded-md bg-white-100"
          placeholder="Enter Latitude"
        />
      </div>

      <div>
        <input
          v-model="payload.longitude"
          type="text"
          id="input2"
          name="input2"
          class="mt-1 p-2 w-[156px] h-[60px] border border-gray-800 rounded-md bg-white-100"
          placeholder="Enter Longitude"
        />
      </div>
    </div>

    <h2
      class="p-2 text-black-300 my-16 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      Market Information
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="mb-4">
        <label
          for="dropdown2"
          class="block text-md font-semibold text-black-800 mb-2"
          >Location Type</label
        >
        <select
          v-model="payload.location_type"
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border border-gray-800 bg-white-500 rounded-md"
        >
          <option value="option1">Residence</option>
          <option value="option2">Commercial</option>
          <option value="option3">Sub-Commercial</option>
        </select>
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Is it an MDU?</label>

          <label class="relative inline-flex items-center mx-5 cursor-pointer">
            <input
              @change="setRadioValue('is_mdu')"
              type="checkbox"
              id="is_mdu"
              value="yes"
              class="sr-only peer"
            />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"
            ></div>
            <span
              class="ms-3 text-sm font-semibold text-black-900 dark:text-black-300"
              >Yes</span
            >
          </label>
        </div>
        <div v-if="payload.is_mdu == 'yes'">
          <label for="name" class="font-semi-bold">If Yes, Number of MDU</label>
        </div>
        <input
          v-if="payload.is_mdu == 'yes'"
          type="text"
          class="border border-gray-800 p-2 w-[120px] h-[60px] rounded-md"
          placeholder="insert value"
          :required="payload.is_mdu ? true : false"
        />
      </div>
      <div class="mb-4">
        <label
          for="dropdown2"
          class="block text-md font-semibold text-black-800 mb-2"
          >Type of Buildings</label
        >
        <select
          v-model="payload.type_of_buildings"
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border border-gray-800 bg-white-500 rounded-md"
        >
          <option value="option1">Duplex</option>
          <option value="option2">Bungalow</option>
          <option value="option3">Plaza</option>
        </select>
      </div>
    </div>
    <h2
      class="p-2 text-black-300 my-16 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      Node Verification
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="mb-4">
        <label
          for="dropdown2"
          class="block text-md font-semibold text-black-800 mb-2"
          >Node Type</label
        >
        <select
          v-model="payload.node_type"
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border border-gray-800 bg-white-500 rounded-md"
        >
          <option value="option1">Splitter</option>
          <option value="option2">Router</option>
          <option value="option3">Cable</option>
        </select>
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold"
            >Number of Cable and Type</label
          >
        </div>
        <input
          type="text"
          class="border border-gray-800 p-2 w-[120px] h-[60px] rounded-md"
          placeholder="insert value"
        />
      </div>
      <div class="mb-4">
        <label
          for="dropdown2"
          class="block text-md font-semibold text-black-800 mb-2"
          >Verification Status</label
        >
        <select
          v-model="payload.variance_status"
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border border-gray-800 bg-white-500 rounded-md"
        >
          <option value="option1">Verified</option>
          <option value="option2">Pending</option>
          <option value="option3">Awaiting</option>
        </select>
      </div>
      <div class="mb-4">
        <label
          for="dropdown2"
          class="block text-md font-semibold text-black-800 mb-2"
          >Labelled</label
        >
        <select
          v-model="payload.labelled"
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border border-gray-800 bg-white-500 rounded-md"
        >
          <option value="option1">Yes</option>
          <option value="option2">No</option>
          <option value="option3">Undecided</option>
        </select>
      </div>
    </div>
    <div class="">
      <div class="w-full">
        <h2 class="text-lg font-bold mb-4 my-2">GPS Coordinates:</h2>
      </div>
      <div class="flex flex-row">
        <div class="w-1/6">
          <div>
            <label for="name" class="font-semibold">Latitude</label>
          </div>
          <input
            v-model="payload.latitutude"
            type="text"
            id="input1"
            name="input1"
            class="mt-1 p-2 w-[156px] h-[60px] border border-gray-800 rounded-md bg-white-100"
            placeholder="Enter Latitude"
          />
        </div>

        <div class="w-1/6">
          <div>
            <label for="name" class="font-semibold">Longitude</label>
          </div>
          <input
            v-model="payload.longitude"
            type="text"
            id="input2"
            name="input2"
            class="mt-1 p-2 w-[156px] h-[60px] border border-gray-800 rounded-md bg-white-100"
            placeholder="Enter Longitude"
          />
        </div>
        <div class="mb-4 w-4/6">
          <div>
            <label for="name" class="font-semibold">Address</label>
          </div>
          <input
            v-model="payload.address"
            type="text"
            class="border border-gray-800 p-2 w-full h-[60px] my-2 rounded-md"
            placeholder="enter address"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 my-6 gap-4"></div>
    <div class="grid-cols-1 lg:grid-cols-1 my-7 gap-4">
      <div class="mb-4">
        <label
          for="picture"
          class="block text-sm font-semibold text-gray-600 mb-2"
          >Upload Picture</label
        >
        <input
          @change="
            filesChange($event.target.files);
            fileCount = $event.target.files.length;
          "
          type="file"
          id="picture"
          name="picture"
          class="w-full p-2 border border-gray-800 rounded-md"
        />
      </div>
    </div>

    <h2
      class="p-2 text-black-300 my-16 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      Home Network Status
    </h2>
    <div class="grid-cols-1 lg:grid-cols-1 gap-4">
      <div class="mb-4">
        <div>
          <label
            for="name"
            class="font-medium font-['Source Sans Pro'] text-[20px]"
            >LAN</label
          >

          <label class="relative inline-flex items-center mx-10 cursor-pointer">
            <input
              type="checkbox"
              value="yes"
              class="sr-only peer"
              @change="setRadioValue('lan')"
              id="lan"
            />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"
            ></div>
            <span
              class="ms-3 text-sm font-light text-black-900 dark:text-black-300"
              >Available</span
            >
          </label>
        </div>
        <div></div>
      </div>
      <div class="mb-4">
        <div>
          <label
            for="name"
            class="font-medium font-['Source Sans Pro'] text-[20px]"
            >Access Points</label
          >

          <label class="relative inline-flex items-center mx-10 cursor-pointer">
            <input
              type="checkbox"
              value="yes"
              class="sr-only peer"
              @change="setRadioValue('access_points')"
              id="access_points"
            />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"
            ></div>
            <span
              class="ms-3 text-sm font-light text-black-900 dark:text-black-300"
              >Available</span
            >
          </label>
        </div>
        <div></div>
      </div>
      <div class="mb-4">
        <div>
          <label
            for="name"
            class="font-medium font-['Source Sans Pro'] text-[20px]"
            >Routers</label
          >

          <label class="relative inline-flex items-center mx-10 cursor-pointer">
            <input type="checkbox" value="yes" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-white-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-400 peer-checked:bg-white-500"
            ></div>
            <span
              class="ms-3 text-sm font-light text-black-900 dark:text-black-300"
              >Not Available</span
            >
          </label>
        </div>
      </div>
    </div>
    <div class="grid-cols-1 lg:grid-cols-1 gap-4 my-16">
      <div class="mb-4">
        <label
          for="dropdown2"
          class="block text-sm font-semibold text-black-800 mb-2"
          >Wifi Solution Required</label
        >
        <select
          v-model="payload.wifi_solution"
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">None</option>
          <option value="option2">Yes</option>
          <option value="option3">Undecided</option>
        </select>
      </div>
      <h2
        class="p-2 text-black-300 my-8 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
      >
        BOM
      </h2>
      <div class="mb-4 my-2">
        <label
          for="dropdown2"
          class="block text-sm font-semibold text-black-800 mb-2"
          >BOM</label
        >
        <select
          v-model="payload.bom"
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">Lastmile</option>
          <option value="option2">Kilometer</option>
          <option value="option3">Undecided</option>
        </select>
      </div>
    </div>
    <div class="w-full h-[200px] bg-white shadow-sm border-gray-50">
      <nav
        class="border bg-legend-black font-semibold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
      >
        <div class="text-[white] mx-2 my-2">
          <h2>Service Backbone</h2>
        </div>

        <div
          class="text-[#ff7b00] w-[94px] h-[34px] my-2 pb-2 text-center justify-center bg-white text-base font-normal font-['Source Sans Pro'] text-center rounded-md absolute left-[1689px]"
        >
          <button class="my-2">Add Items</button>
        </div>
      </nav>
      <div>
        <table class="w-full bg-white-300">
          <thead
            class="mb-3 h-[35px] w-full bg-gray-300 border border-gray-600 items-center"
          >
            <tr>
              <th scope="col" class="px-3 py-3 w-[56px] h-[19px]">S/N:</th>
              <th scope="col" class="px-3 py-3 w-[550px] h-[19px]">
                Description
              </th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">
                Unit
              </th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">
                Quantity
              </th>
              <th scope="col" class="px-3 py-3 w-[200px] h-[19px] mx-10">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="my-20 items-center pb-5">
            <td class="px-6 py-4 bg-white-200 text-center">01</td>
            <td class="px-6 py-4 bg-white-200 text-center">
              Pulling of FOC & Callibration (without stagger from Suburban)
            </td>
            <td class="px-6 py-4 bg-white-200 text-center">Meter</td>
            <td class="px-6 py-4 bg-white-200 text-center">1</td>
            <td>
              <div class="flex flex-row-reverse mr-10 gap-4">
                <button
                  class="rounded-md border-solid border-suburbanblack border w-[121px] h-[51px] pt-3.5 pr-7 pb-3.5 pl-7 shrink-0"
                >
                  Delete
                </button>
                <button
                  class="bg-legend-orange rounded-md border-solid border-[transparent] border w-[125px] h-[51px] pt-3.5 pr-7 pb-3.5 pl-7"
                >
                  Add Item
                </button>
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </div>
    <div class="w-full h-[200px] bg-white shadow-sm border-gray-50 my-16">
      <nav
        class="border bg-legend-black font-semibold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
      >
        <div class="text-[white] mx-2 my-2">
          <h2>Supply Backbone</h2>
        </div>

        <div
          class="text-[#ff7b00] w-[94px] h-[34px] my-2 pb-2 text-center justify-center bg-white text-base font-normal font-['Source Sans Pro'] text-center rounded-md absolute left-[1689px]"
        >
          <button class="my-2">Add Items</button>
        </div>
      </nav>
      <div>
        <table class="w-full bg-white-300">
          <thead
            class="mb-3 h-[35px] w-full bg-gray-300 border border-gray-600 items-center"
          >
            <tr>
              <th scope="col" class="px-3 py-3 w-[56px] h-[19px]">S/N:</th>
              <th scope="col" class="px-3 py-3 w-[550px] h-[19px]">
                Description
              </th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">
                Unit
              </th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">
                Quantity
              </th>
              <th scope="col" class="px-3 py-3 w-[200px] h-[19px] mx-10">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="my-20 items-center pb-5">
            <td class="px-6 py-4 bg-white-200 text-center">01</td>
            <td class="px-6 py-4 bg-white-200 text-center">
              Pulling of FOC & Callibration (without stagger from Suburban)
            </td>
            <td class="px-6 py-4 bg-white-200 text-center">Meter</td>
            <td class="px-6 py-4 bg-white-200 text-center">1</td>
            <td>
              <div class="flex flex-row-reverse mr-10 gap-4">
                <button
                  class="rounded-md border-solid border-suburbanblack border w-[121px] h-[51px] pt-3.5 pr-7 pb-3.5 pl-7 shrink-0"
                >
                  Delete
                </button>
                <button
                  class="bg-legend-orange rounded-md border-solid border-[transparent] border w-[125px] h-[51px] pt-3.5 pr-7 pb-3.5 pl-7"
                >
                  Add Item
                </button>
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </div>
    <div class="w-full h-[200px] bg-white shadow-sm border-gray-50 my-16">
      <nav
        class="border bg-legend-black font-semibold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
      >
        <div class="text-[white] mx-2 my-2">
          <h2>Service Lastmile</h2>
        </div>

        <div
          class="text-[#ff7b00] w-[94px] h-[34px] my-2 pb-2 text-center justify-center bg-white text-base font-normal font-['Source Sans Pro'] text-center rounded-md absolute left-[1689px]"
        >
          <button class="my-2">Add Items</button>
        </div>
      </nav>
      <div>
        <table class="w-full bg-white-300">
          <thead
            class="mb-3 h-[35px] w-full bg-gray-300 border border-gray-600 items-center"
          >
            <tr>
              <th scope="col" class="px-3 py-3 w-[56px] h-[19px]">S/N:</th>
              <th scope="col" class="px-3 py-3 w-[550px] h-[19px]">
                Description
              </th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">
                Unit
              </th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">
                Quantity
              </th>
              <th scope="col" class="px-3 py-3 w-[200px] h-[19px] mx-10">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="my-20 items-center pb-5">
            <td class="px-6 py-4 bg-white-200 text-center">01</td>
            <td class="px-6 py-4 bg-white-200 text-center">
              Pulling of FOC & Callibration (without stagger from Suburban)
            </td>
            <td class="px-6 py-4 bg-white-200 text-center">Meter</td>
            <td class="px-6 py-4 bg-white-200 text-center">1</td>
            <td>
              <div class="flex flex-row-reverse mr-10 gap-4">
                <button
                  class="rounded-md border-solid border-suburbanblack border w-[121px] h-[51px] pt-3.5 pr-7 pb-3.5 pl-7 shrink-0"
                >
                  Delete
                </button>
                <button
                  class="bg-legend-orange rounded-md border-solid border-[transparent] border w-[125px] h-[51px] pt-3.5 pr-7 pb-3.5 pl-7"
                >
                  Add Item
                </button>
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </div>
    <div class="w-full h-[200px] bg-white shadow-sm border-gray-50 my-16">
      <nav
        class="border bg-legend-black font-semibold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
      >
        <div class="text-[white] mx-2 my-2">
          <h2>Supply Lastmile</h2>
        </div>

        <div
          class="text-[#ff7b00] w-[94px] h-[34px] my-2 pb-2 text-center justify-center bg-white text-base font-normal font-['Source Sans Pro'] text-center rounded-md absolute left-[1689px]"
        >
          <button class="my-2">Add Items</button>
        </div>
      </nav>
      <div>
        <table class="w-full bg-white-300">
          <thead
            class="mb-3 h-[35px] w-full bg-gray-300 border border-gray-600 items-center"
          >
            <tr>
              <th scope="col" class="px-3 py-3 w-[56px] h-[19px]">S/N:</th>
              <th scope="col" class="px-3 py-3 w-[550px] h-[19px]">
                Description
              </th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">
                Unit
              </th>
              <th scope="col" class="px-3 py-3 w-[80px] h-[19px] mx-10">
                Quantity
              </th>
              <th scope="col" class="px-3 py-3 w-[200px] h-[19px] mx-10">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="my-20 items-center pb-5">
            <td class="px-6 py-4 bg-white-200 text-center">01</td>
            <td class="px-6 py-4 bg-white-200 text-center">
              Pulling of FOC & Callibration (without stagger from Suburban)
            </td>
            <td class="px-6 py-4 bg-white-200 text-center">Meter</td>
            <td class="px-6 py-4 bg-white-200 text-center">1</td>
            <td>
              <div class="flex flex-row-reverse mr-10 gap-4">
                <button
                  class="rounded-md border-solid border-suburbanblack border w-[121px] h-[51px] pt-3.5 pr-7 pb-3.5 pl-7 shrink-0"
                >
                  Delete
                </button>
                <button
                  class="bg-legend-orange rounded-md border-solid border-[transparent] border w-[125px] h-[51px] pt-3.5 pr-7 pb-3.5 pl-7"
                >
                  Add Item
                </button>
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import workplaceRequestsv2 from "../service/workplaceRequestsv2";
const route = useRoute();

const payload = ref({
  assignment_id: "",
  latitutude: "",
  longitude: "",
  variance_status: "",
  labelled: "",
  node_type: "",
  address: "",
  node_image: "",
  bom: "",
  wifi_solution: "",
  is_mdu: "",
  no_of_mdu: "",
  location_type: "",
  type_of_buildings: "",
  lan: "",
  wlan: "",
  access_points: "",
});

const props = defineProps(["submitForm"]);
const emit = defineEmits(["formSubmitted"]);

watch(
  () => props.submitForm,
  (newValue) => {
    if (newValue == true) {
      submitReport();
    }
  }
);

const filesChange = async (value) => {
  try {
    payload.value.node_image = value[0];
    console.log(payload);
  } catch (e) {
    alert(e.message);
  }
};

const setRadioValue = (label) => {
  let input = document.getElementById(label);
  if (input.checked) {
    payload.value[label] = "yes";
  } else {
    payload.value[label] = "no";
  }
};

const submitReport = async () => {
  try {
    let formData = new FormData();
    formData.append("assignment_id", route.params.id);
    formData.append("latitutude", payload.value.latitutude);
    formData.append("longitude", payload.value.longitude);
    formData.append("variance_status", payload.value.variance_status);
    formData.append("labelled", payload.value.labelled);
    formData.append("node_type", payload.value.node_type);
    formData.append("address", payload.value.address);
    formData.append("node_image", payload.value.node_image);
    formData.append("bom", payload.value.bom);
    formData.append("wifi_solution", payload.value.wifi_solution);
    formData.append("is_mdu", payload.value.is_mdu);
    formData.append("no_of_mdu", payload.value.no_of_mdu);
    formData.append("location_type", payload.value.location_type);
    formData.append("type_of_buildings", payload.value.type_of_buildings);
    formData.append("lan", payload.value.lan);
    formData.append("wlan", payload.value.wlan);
    formData.append("access_points", payload.value.access_points);
    const { status, data } = await workplaceRequestsv2(
      "post",
      "operations/sd/survey-report/create",
      formData
    );
    console.log(data);
    if (status == 200) {
      alert("successful");
    }
    emit("formSubmitted");
  } catch (e) {
    alert(e.message);
    console.log(e);
  }
};
</script>
