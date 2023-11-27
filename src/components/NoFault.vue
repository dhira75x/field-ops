<template>
  <div class="w-[1440px] h-[1245px] relative bg-slate-50 shadow">
    <div
      class="w-[1061px] h-[1235px] left-[316px] top-[215px] absolute bg-white border border-zinc-950 border-opacity-20"
    ></div>
    <div
      class="w-[461px] h-[89px] left-[856px] top-[747px] absolute justify-center items-center inline-flex"
    >
      <div class="mb-4 w-[461px] h-[89px] justify-center items-center inline-flex">
        <label for="name" class="block text-sm font-semibold text-gray-600">Address</label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter Address"
        />
        <!-- <div class="w-[461px] h-14 left-0 top-[33px] absolute">
          <div class="w-[461px] h-14 left-0 top-0 absolute rounded-md border border-zinc-800"></div>
          <div
            class="w-[92px] left-[25px] top-[19px] absolute text-center text-zinc-400 text-[15px] font-normal font-['Source Sans Pro']"
          >
            Enter Address
          </div>
        </div> -->
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="input1" class="block text-sm font-medium text-gray-600">Resolution Date</label>
        <input
          type="text"
          id="input1"
          name="input1"
          class="mt-1 p-2 block w-full border rounded-md bg-white-100"
          placeholder="30/11/2023"
        />
      </div>

      <div>
        <label for="input2" class="block text-sm font-medium text-gray-600">Duration</label>
        <input
          type="text"
          id="input2"
          name="input2"
          class="mt-1 p-2 block w-full border rounded-md bg-white-100"
          placeholder="Enter Duration"
        />
      </div>
    </div>
    <div
      class="h-[88px] left-[856px] top-[629px] absolute flex-col justify-start items-start gap-[13px] inline-flex"
    >
      <div class="self-stretch text-black text-base font-medium font-['Roboto']">Labelled</div>
      <div
        class="self-stretch h-14 p-4 bg-white rounded-md border border-zinc-800 flex-col justify-start items-start gap-2.5 flex"
      >
        <div class="self-stretch justify-start items-start gap-2 inline-flex">
          <div class="grow shrink basis-0 text-gray-900 text-base font-normal font-['Roboto']">
            Yes
          </div>
          <div class="w-6 h-6 relative"></div>
        </div>
      </div>
    </div>
    <div
      class="h-[94px] left-[380px] top-[866px] absolute flex-col justify-start items-start gap-[11px] inline-flex"
    >
      <div class="text-black text-base font-medium font-['Roboto']">Upload picture:</div>
      <div class="w-[914px] h-16 relative">
        <div
          class="w-[914px] h-16 left-0 top-0 absolute bg-zinc-100 rounded-md border border-neutral-600"
        ></div>
        <div class="w-[32.98px] h-7 left-[21.20px] top-[18px] absolute"></div>
        <div
          class="w-[208.48px] left-[57.71px] top-[24.02px] absolute text-black text-base font-normal font-['Roboto']"
        >
          Click to drag to drop files
        </div>
      </div>
    </div>
    <div
      class="w-[372px] left-[345px] top-[460px] absolute text-black text-[25px] font-bold font-['Roboto']"
    >
      Node Verification
    </div>
    <div
      class="w-[372px] left-[345px] top-[280px] absolute text-black text-[25px] font-bold font-['Roboto']"
    >
      Faults
    </div>
    <div
      class="w-[372px] left-[345px] top-[1015px] absolute text-black text-[25px] font-bold font-['Roboto']"
    >
      Resolution Status
    </div>
    <div
      class="w-[461px] left-[355px] top-[511px] absolute flex-col justify-center items-start gap-[30px] inline-flex"
    >
      <div class="h-[88px] flex-col justify-start items-start gap-[13px] inline-flex">
        <div class="self-stretch text-black text-base font-medium font-['Roboto']">Node type</div>
        <div
          class="self-stretch h-14 p-4 bg-white rounded-lg border border-zinc-800 flex-col justify-start items-start gap-2.5 flex"
        >
          <div class="self-stretch justify-start items-start gap-2 inline-flex">
            <div class="grow shrink basis-0 text-gray-900 text-base font-normal font-['Roboto']">
              Splitter
            </div>
            <div class="w-6 h-6 relative"></div>
          </div>
        </div>
      </div>
      <div class="h-[88px] flex-col justify-start items-start gap-[13px] inline-flex">
        <div class="self-stretch text-black text-base font-medium font-['Roboto']">
          Verification Status
        </div>
        <div
          class="self-stretch h-14 p-4 bg-white rounded-md border border-zinc-800 flex-col justify-start items-start gap-2.5 flex"
        >
          <div class="self-stretch justify-start items-start gap-2 inline-flex">
            <div class="grow shrink basis-0 text-gray-900 text-base font-normal font-['Roboto']">
              Verified
            </div>
            <div class="w-6 h-6 relative"></div>
          </div>
        </div>
      </div>
      <div class="w-[318.87px] grow shrink basis-0 justify-center items-center inline-flex">
        <div class="w-[318.87px] h-[89px] relative">
          <h2 class="text-lg font-bold mb-4 my-5">GPS Coordinates:</h2>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <!-- <label for="input1" class="block text-sm font-medium text-gray-600">Input 1</label> -->
              <input
                type="text"
                id="input1"
                name="input1"
                class="mt-1 p-2 block w-full border rounded-md bg-white-100"
                placeholder="Enter Latitude"
              />
            </div>

            <div>
              <!-- <label for="input2" class="block text-sm font-medium text-gray-600">Input 2</label> -->
              <input
                type="text"
                id="input2"
                name="input2"
                class="mt-1 p-2 block w-full border rounded-md bg-white-100"
                placeholder="Enter Longtitude"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[453px] h-[94px] pr-[77px] left-[355px] top-[318px] absolute justify-start items-center inline-flex"
    >
      <input
        type="text"
        id="name"
        name="name"
        class="w-[480px] h-[64px]flex flex-col gap-[11px] items-start justify-start absolute left-[calc(50%_-_226.5px)] top-[calc(50%_-_48px)] px-3 py-2 my-6 focus:outline-none focus:border-blue-500 rounded-md border border-zinc-800"
        placeholder="Fiber cut"
      />
      <!-- <div class="mb-12 top-[14px]">
      
      </div> -->
    </div>
    <div class="left-[856px] top-[510px] absolute">
      <div
        class="left-0 top-0 absolute text-black text-base font-semibold font-['Source Sans Pro']"
      >
        Number of Cables and type
      </div>
      <div class="w-[120px] h-14 left-0 top-[33px] absolute">
        <div class="w-[120px] h-14 left-0 top-0 absolute rounded-md border border-zinc-800"></div>
        <div
          class="left-[23px] top-[19px] absolute text-zinc-400 text-[15px] font-normal font-['Source Sans Pro']"
        >
          Insert value
        </div>
      </div>
    </div>
    <div class="left-[320px] top-[139px] absolute justify-start items-center inline-flex">
      <div class="w-10 h-10 relative"></div>
      <div class="text-black text-[25px] font-medium font-['Roboto']">Back</div>
    </div>
    <div
      class="left-[1142px] top-[132px] absolute justify-start items-center gap-[15px] inline-flex"
    >
      <div class="justify-start items-start gap-[5px] flex">
        <div
          class="px-[27px] pt-[9px] pb-2.5 rounded-md border border-gray-900 justify-center items-center flex"
        >
          <div class="text-gray-900 text-lg font-normal font-['Roboto'] capitalize leading-loose">
            Cancel
          </div>
        </div>
        <div
          class="pl-[26px] pr-[38px] pt-[9px] pb-2.5 bg-orange-600 rounded-md border justify-start items-center flex"
        >
          <div class="text-white text-lg font-normal font-['Roboto'] capitalize leading-loose">
            Submit
          </div>
        </div>
      </div>
    </div>
    <div class="w-[1061px] h-[46px] left-[316px] top-[201px] absolute">
      <div
        class="w-[1061px] h-[43px] pl-5 pr-[27px] py-2.5 left-0 top-0 absolute bg-neutral-800 shadow"
      ></div>
      <div
        class="w-[1026px] h-[46px] p-2.5 left-[15px] top-0 absolute justify-between items-center inline-flex"
      >
        <div class="text-white text-xl font-semibold font-['Source Sans Pro'] leading-7">
          Fault Resolution Report
        </div>
        <div class="text-white text-base font-normal font-['Source Sans Pro'] leading-normal">
          Oct 30, 2023 11:35 AM
        </div>
      </div>
    </div>
    <div
      class="w-[453px] h-[94px] left-[355px] top-[1070px] absolute justify-center items-center inline-flex"
    >
      <div class="flex-col justify-start items-start gap-[11px] inline-flex">
        <div class="text-black text-base font-medium font-['Roboto']">POF NODE</div>
        <div class="w-[453px] h-16 relative">
          <div
            class="w-[453px] h-16 left-0 top-0 absolute rounded-[1px] border border-neutral-600"
          ></div>
          <div class="w-[29.36px] h-7 left-[405px] top-[18px] absolute"></div>
          <div
            class="left-[12.19px] top-[21.02px] absolute text-gray-900 text-base font-normal font-['Roboto']"
          >
            OLT
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[453px] h-[94px] left-[856px] top-[1070px] absolute justify-center items-center inline-flex"
    >
      <div class="flex-col justify-start items-start gap-[11px] inline-flex">
        <div class="text-black text-base font-medium font-['Roboto']">POF Segment</div>
        <div class="w-[453px] h-16 relative">
          <div
            class="w-[453px] h-16 left-0 top-0 absolute rounded-[1px] border border-neutral-600"
          ></div>
          <div class="w-[29.36px] h-7 left-[405px] top-[18px] absolute"></div>
          <div
            class="left-[12.19px] top-[21.02px] absolute text-gray-900 text-base font-normal font-['Roboto']"
          >
            Lastmile
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[453px] h-[94px] left-[860px] top-[317px] absolute justify-center items-center inline-flex"
    >
      <div class="flex-col justify-start items-start gap-[11px] inline-flex">
        <div class="text-black text-base font-semibold font-['Source Sans Pro']">
          Cause of Fault
        </div>
        <div class="w-[464.25px] h-16 relative">
          <div
            class="w-[464.25px] h-16 left-0 top-0 absolute rounded-lg border border-neutral-600"
          ></div>
          <div class="w-[21.88px] h-6 left-[422.21px] top-[26px] absolute"></div>
          <div
            class="w-[171.77px] left-[13.15px] top-[21.50px] absolute text-gray-900 text-base font-normal font-['Source Sans Pro']"
          >
            Theft/Vandalism
          </div>
        </div>
      </div>
    </div>
    <div class="w-[1183px] h-[102px] left-[257px] top-0 absolute">
      <div class="w-[1183px] h-[102px] left-0 top-0 absolute bg-white shadow"></div>
      <div
        class="w-[267.94px] h-12 left-[852px] top-[27px] absolute justify-start items-center gap-6 inline-flex"
      >
        <div class="w-[30.11px] h-8 relative">
          <img
            class="w-[21.60px] h-6 left-0 top-[8px] absolute"
            src="https://via.placeholder.com/22x24"
          />
          <div
            class="w-[18px] h-[18px] left-[12.11px] top-[2px] absolute bg-orange-600 rounded-full"
          ></div>
          <div
            class="left-[16.11px] top-0 absolute text-center text-white text-[13px] font-medium font-['Public Sans'] uppercase leading-tight"
          >
            4
          </div>
        </div>
        <div class="w-12 h-12 relative">
          <div class="w-12 h-12 left-0 top-0 absolute bg-stone-300 rounded-full"></div>
          <img
            class="w-[54px] h-[50px] left-[-3px] top-[-2px] absolute"
            src="https://via.placeholder.com/54x50"
          />
          <img
            class="w-[119px] h-[79px] left-[-35.60px] top-[-2px] absolute"
            src="https://via.placeholder.com/119x79"
          />
          <img
            class="w-[114px] h-[76px] left-[-38.11px] top-[-1px] absolute"
            src="https://via.placeholder.com/114x76"
          />
        </div>
        <div class="text-gray-900 text-lg font-bold font-['Roboto']">Victor Ade</div>
        <div class="w-[32.82px] h-[33px] relative"></div>
      </div>
      <div class="left-[78px] top-[46px] absolute text-black text-[25px] font-bold font-['Roboto']">
        Obligations
      </div>
    </div>
    <div class="w-[290px] h-[1482px] left-0 top-0 absolute">
      <div class="w-[290px] h-[1482px] left-0 top-0 absolute bg-neutral-800 shadow"></div>
      <div
        class="w-[262px] h-14 left-[14px] top-[228px] absolute opacity-10 bg-white rounded-[10px]"
      ></div>
      <div
        class="w-7 h-7 left-[229px] top-[221px] absolute origin-top-left -rotate-90 justify-start items-start inline-flex"
      >
        <div class="p-1 rounded-tl-md rounded-bl-md justify-center items-center gap-2 flex">
          <div class="w-5 h-5 relative"></div>
        </div>
      </div>
      <div
        class="w-[163px] h-[310px] left-[48px] top-[195px] absolute flex-col justify-start items-start gap-[21px] inline-flex"
      >
        <div class="self-stretch flex-col justify-start items-start gap-[25px] flex">
          <div class="justify-center items-center gap-[15px] inline-flex">
            <div class="w-[22.16px] h-[22.16px] relative">
              <div
                class="w-[22.16px] h-[22.16px] left-0 top-0 absolute justify-start items-start gap-[9.23px] inline-flex"
              >
                <div class="w-[22.16px] h-[22.16px] relative"></div>
              </div>
              <div
                class="w-[20.46px] h-[20.46px] left-[0.92px] top-[-0px] absolute opacity-20 blur-[27.23px] justify-start items-start gap-[8.53px] inline-flex"
              >
                <div class="w-[20.46px] h-[20.46px] relative"></div>
              </div>
            </div>
            <div class="text-center text-white text-base font-bold font-['Roboto'] leading-normal">
              My Workplace
            </div>
          </div>
          <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
            <div
              class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal"
            >
              Reports
            </div>
          </div>
          <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
            <div
              class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal"
            >
              Collaboration
            </div>
          </div>
          <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
            <div
              class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal"
            >
              Requests
            </div>
          </div>
        </div>
        <div class="justify-center items-center gap-[15px] inline-flex">
          <div class="w-6 h-6 relative"></div>
          <div class="text-center text-white text-base font-bold font-['Roboto'] leading-normal">
            Obligations
          </div>
          <div class="origin-top-left -rotate-90 justify-start items-start flex">
            <div class="p-1 rounded-tl-md rounded-bl-md justify-center items-center gap-2 flex">
              <div class="w-5 h-5 relative"></div>
            </div>
          </div>
        </div>
        <div class="justify-center items-center gap-[15px] inline-flex">
          <div class="w-6 h-6 relative"></div>
          <div
            class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal"
          >
            Help Center
          </div>
        </div>
        <div class="justify-center items-center gap-[15px] inline-flex">
          <div class="w-6 h-6 relative"></div>
          <div
            class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal"
          >
            Notification
          </div>
        </div>
      </div>
      <img
        class="w-[194px] h-6 left-[48.50px] top-[88.57px] absolute"
        src="https://via.placeholder.com/194x24"
      />
      <div
        class="left-[91px] top-[131px] absolute opacity-40 text-center text-zinc-400 text-[15px] font-normal font-['Roboto'] capitalize"
      >
        Fiber Technician
      </div>
    </div>
    <div class="w-[290px] h-[1275px] left-0 top-0 absolute">
      <div class="w-[290px] h-[1275px] left-0 top-0 absolute bg-neutral-800 shadow"></div>
      <div
        class="w-[262px] h-14 left-[14px] top-[372px] absolute opacity-10 bg-white rounded-[10px]"
      ></div>
      <div
        class="w-7 h-7 left-[229px] top-[221px] absolute origin-top-left -rotate-90 justify-start items-start inline-flex"
      >
        <div class="p-1 rounded-tl-md rounded-bl-md justify-center items-center gap-2 flex">
          <div class="w-5 h-5 relative"></div>
        </div>
      </div>
      <div
        class="w-[138.16px] h-[261px] left-[48px] top-[195px] absolute flex-col justify-start items-start gap-[21px] inline-flex"
      >
        <div class="self-stretch flex-col justify-start items-start gap-[25px] flex">
          <div class="justify-center items-center gap-[15px] inline-flex">
            <div class="w-[22.16px] h-[22.16px] relative">
              <div
                class="w-[22.16px] h-[22.16px] left-0 top-0 absolute justify-start items-start gap-[9.23px] inline-flex"
              >
                <div class="w-[22.16px] h-[22.16px] relative"></div>
              </div>
              <div
                class="w-[20.46px] h-[20.46px] left-[0.92px] top-[-0px] absolute opacity-20 blur-[27.23px] justify-start items-start gap-[8.53px] inline-flex"
              >
                <div class="w-[20.46px] h-[20.46px] relative"></div>
              </div>
            </div>
            <div class="text-center text-white text-base font-bold font-['Roboto'] leading-normal">
              My Workplace
            </div>
          </div>
          <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
            <div
              class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal"
            >
              Reports
            </div>
          </div>
          <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
            <div
              class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal"
            >
              Collaboration
            </div>
          </div>
          <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
            <div
              class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal"
            >
              Requests
            </div>
          </div>
        </div>
        <div class="justify-center items-center gap-[15px] inline-flex">
          <div class="w-6 h-6 relative"></div>
          <div
            class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal"
          >
            Obligations
          </div>
        </div>
        <div class="justify-center items-center gap-[15px] inline-flex">
          <div class="w-6 h-6 relative"></div>
          <div
            class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal"
          >
            Help Center
          </div>
        </div>
      </div>
      <img
        class="w-[194px] h-6 left-[48.50px] top-[88.57px] absolute"
        src="https://via.placeholder.com/194x24"
      />
      <div
        class="left-[91px] top-[131px] absolute opacity-40 text-center text-zinc-400 text-[15px] font-normal font-['Roboto'] capitalize"
      >
        Fiber Technician
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/tailwind.css'
export default {
  name: 'NoFault',
  components: {},
  props: {},
  data() {
    return {}
  }
}
</script>
<style scoped></style>

<!-- <div class="w-[1440px] h-[1245px] relative bg-slate-50 shadow">
    <div class="w-[1061px] h-[1235px] left-[316px] top-[215px] absolute bg-white border border-zinc-950 border-opacity-20"></div>
    <div class="w-[461px] h-[89px] left-[856px] top-[747px] absolute justify-center items-center inline-flex">
        <div class="grow shrink basis-0 self-stretch relative">
            <div class="left-0 top-0 absolute text-black text-base font-semibold font-['Source Sans Pro']">Address:</div>
            <div class="w-[461px] h-14 left-0 top-[33px] absolute">
                <div class="w-[461px] h-14 left-0 top-0 absolute rounded-md border border-zinc-800"></div>
                <div class="w-[92px] left-[25px] top-[19px] absolute text-center text-zinc-400 text-[15px] font-normal font-['Source Sans Pro']">Enter Address </div>
            </div>
        </div>
    </div>
    <div class="h-[88px] left-[856px] top-[629px] absolute flex-col justify-start items-start gap-[13px] inline-flex">
        <div class="self-stretch text-black text-base font-medium font-['Roboto']">Labelled</div>
        <div class="self-stretch h-14 p-4 bg-white rounded-md border border-zinc-800 flex-col justify-start items-start gap-2.5 flex">
            <div class="self-stretch justify-start items-start gap-2 inline-flex">
                <div class="grow shrink basis-0 text-gray-900 text-base font-normal font-['Roboto']">Yes</div>
                <div class="w-6 h-6 relative"></div>
            </div>
        </div>
    </div>
    <div class="h-[94px] left-[380px] top-[866px] absolute flex-col justify-start items-start gap-[11px] inline-flex">
        <div class="text-black text-base font-medium font-['Roboto']">Upload picture:</div>
        <div class="w-[914px] h-16 relative">
            <div class="w-[914px] h-16 left-0 top-0 absolute bg-zinc-100 rounded-md border border-neutral-600"></div>
            <div class="w-[32.98px] h-7 left-[21.20px] top-[18px] absolute"></div>
            <div class="w-[208.48px] left-[57.71px] top-[24.02px] absolute text-black text-base font-normal font-['Roboto']">Click to drag to drop files</div>
        </div>
    </div>
    <div class="w-[372px] left-[345px] top-[460px] absolute text-black text-[25px] font-bold font-['Roboto']">Node Verification</div>
    <div class="w-[372px] left-[345px] top-[280px] absolute text-black text-[25px] font-bold font-['Roboto']">Faults</div>
    <div class="w-[372px] left-[345px] top-[1015px] absolute text-black text-[25px] font-bold font-['Roboto']">Resolution Status</div>
    <div class="w-[461px] left-[355px] top-[511px] absolute flex-col justify-center items-start gap-[30px] inline-flex">
        <div class="h-[88px] flex-col justify-start items-start gap-[13px] inline-flex">
            <div class="self-stretch text-black text-base font-medium font-['Roboto']">Node type</div>
            <div class="self-stretch h-14 p-4 bg-white rounded-lg border border-zinc-800 flex-col justify-start items-start gap-2.5 flex">
                <div class="self-stretch justify-start items-start gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-gray-900 text-base font-normal font-['Roboto']">Splitter</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
            </div>
        </div>
        <div class="h-[88px] flex-col justify-start items-start gap-[13px] inline-flex">
            <div class="self-stretch text-black text-base font-medium font-['Roboto']">Verification Status</div>
            <div class="self-stretch h-14 p-4 bg-white rounded-md border border-zinc-800 flex-col justify-start items-start gap-2.5 flex">
                <div class="self-stretch justify-start items-start gap-2 inline-flex">
                    <div class="grow shrink basis-0 text-gray-900 text-base font-normal font-['Roboto']">Verified</div>
                    <div class="w-6 h-6 relative"></div>
                </div>
            </div>
        </div>
        <div class="w-[318.87px] grow shrink basis-0 justify-center items-center inline-flex">
            <div class="w-[318.87px] h-[89px] relative">
                <div class="left-0 top-0 absolute text-black text-base font-semibold font-['Source Sans Pro']">GPS Coordinates:</div>
                <div class="w-[142px] h-14 left-0 top-[33px] absolute">
                    <div class="w-[142px] h-14 left-0 top-0 absolute rounded-md border border-zinc-800"></div>
                    <div class="w-[92px] left-[25px] top-[19px] absolute text-center text-zinc-400 text-[15px] font-normal font-['Source Sans Pro']">Enter Latitude </div>
                </div>
                <div class="w-[153.87px] h-14 left-[165px] top-[33px] absolute">
                    <div class="w-[153.87px] h-14 left-0 top-0 absolute rounded-md border border-zinc-800"></div>
                    <div class="w-[109px] left-[22px] top-[19px] absolute text-center text-zinc-400 text-[15px] font-normal font-['Source Sans Pro']">Enter Longitude</div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-[453px] h-[94px] pr-[77px] left-[355px] top-[318px] absolute justify-start items-center inline-flex">
        <div class="w-[376px] flex-col justify-start items-start gap-[11px] inline-flex">
            <div class="text-black text-base font-semibold font-['Source Sans Pro']">Fault Type</div>
            <div class="w-[453px] h-16 relative">
                <div class="w-[453px] h-16 left-0 top-0 absolute rounded-lg border border-neutral-600"></div>
                <div class="w-[21.88px] h-6 left-[412.58px] top-[26.50px] absolute"></div>
                <div class="w-[99.14px] left-[12.39px] top-[21.50px] absolute text-gray-900 text-base font-normal font-['Source Sans Pro']">Fiber Cut</div>
            </div>
        </div>
    </div>
    <div class="left-[856px] top-[510px] absolute">
        <div class="left-0 top-0 absolute text-black text-base font-semibold font-['Source Sans Pro']">Number of Cables and type</div>
        <div class="w-[120px] h-14 left-0 top-[33px] absolute">
            <div class="w-[120px] h-14 left-0 top-0 absolute rounded-md border border-zinc-800"></div>
            <div class="left-[23px] top-[19px] absolute text-zinc-400 text-[15px] font-normal font-['Source Sans Pro']">Insert value</div>
        </div>
    </div>
    <div class="left-[320px] top-[139px] absolute justify-start items-center inline-flex">
        <div class="w-10 h-10 relative"></div>
        <div class="text-black text-[25px] font-medium font-['Roboto']">Back</div>
    </div>
    <div class="left-[1142px] top-[132px] absolute justify-start items-center gap-[15px] inline-flex">
        <div class="justify-start items-start gap-[5px] flex">
            <div class="px-[27px] pt-[9px] pb-2.5 rounded-md border border-gray-900 justify-center items-center flex">
                <div class="text-gray-900 text-lg font-normal font-['Roboto'] capitalize leading-loose">Cancel</div>
            </div>
            <div class="pl-[26px] pr-[38px] pt-[9px] pb-2.5 bg-orange-600 rounded-md border justify-start items-center flex">
                <div class="text-white text-lg font-normal font-['Roboto'] capitalize leading-loose">Submit</div>
            </div>
        </div>
    </div>
    <div class="w-[1061px] h-[46px] left-[316px] top-[201px] absolute">
        <div class="w-[1061px] h-[43px] pl-5 pr-[27px] py-2.5 left-0 top-0 absolute bg-neutral-800 shadow"></div>
        <div class="w-[1026px] h-[46px] p-2.5 left-[15px] top-0 absolute justify-between items-center inline-flex">
            <div class="text-white text-xl font-semibold font-['Source Sans Pro'] leading-7">Fault Resolution Report</div>
            <div class="text-white text-base font-normal font-['Source Sans Pro'] leading-normal">Oct 30, 2023       11:35 AM </div>
        </div>
    </div>
    <div class="w-[453px] h-[94px] left-[355px] top-[1070px] absolute justify-center items-center inline-flex">
        <div class="flex-col justify-start items-start gap-[11px] inline-flex">
            <div class="text-black text-base font-medium font-['Roboto']">POF NODE</div>
            <div class="w-[453px] h-16 relative">
                <div class="w-[453px] h-16 left-0 top-0 absolute rounded-[1px] border border-neutral-600"></div>
                <div class="w-[29.36px] h-7 left-[405px] top-[18px] absolute"></div>
                <div class="left-[12.19px] top-[21.02px] absolute text-gray-900 text-base font-normal font-['Roboto']">OLT</div>
            </div>
        </div>
    </div>
    <div class="w-[453px] h-[94px] left-[856px] top-[1070px] absolute justify-center items-center inline-flex">
        <div class="flex-col justify-start items-start gap-[11px] inline-flex">
            <div class="text-black text-base font-medium font-['Roboto']">POF Segment</div>
            <div class="w-[453px] h-16 relative">
                <div class="w-[453px] h-16 left-0 top-0 absolute rounded-[1px] border border-neutral-600"></div>
                <div class="w-[29.36px] h-7 left-[405px] top-[18px] absolute"></div>
                <div class="left-[12.19px] top-[21.02px] absolute text-gray-900 text-base font-normal font-['Roboto']">Lastmile</div>
            </div>
        </div>
    </div>
    <div class="w-[453px] h-[94px] left-[860px] top-[317px] absolute justify-center items-center inline-flex">
        <div class="flex-col justify-start items-start gap-[11px] inline-flex">
            <div class="text-black text-base font-semibold font-['Source Sans Pro']">Cause of Fault</div>
            <div class="w-[464.25px] h-16 relative">
                <div class="w-[464.25px] h-16 left-0 top-0 absolute rounded-lg border border-neutral-600"></div>
                <div class="w-[21.88px] h-6 left-[422.21px] top-[26px] absolute"></div>
                <div class="w-[171.77px] left-[13.15px] top-[21.50px] absolute text-gray-900 text-base font-normal font-['Source Sans Pro']">Theft/Vandalism</div>
            </div>
        </div>
    </div>
    <div class="w-[1183px] h-[102px] left-[257px] top-0 absolute">
        <div class="w-[1183px] h-[102px] left-0 top-0 absolute bg-white shadow"></div>
        <div class="w-[267.94px] h-12 left-[852px] top-[27px] absolute justify-start items-center gap-6 inline-flex">
            <div class="w-[30.11px] h-8 relative">
                <img class="w-[21.60px] h-6 left-0 top-[8px] absolute" src="https://via.placeholder.com/22x24" />
                <div class="w-[18px] h-[18px] left-[12.11px] top-[2px] absolute bg-orange-600 rounded-full"></div>
                <div class="left-[16.11px] top-0 absolute text-center text-white text-[13px] font-medium font-['Public Sans'] uppercase leading-tight">4</div>
            </div>
            <div class="w-12 h-12 relative">
                <div class="w-12 h-12 left-0 top-0 absolute bg-stone-300 rounded-full"></div>
                <img class="w-[54px] h-[50px] left-[-3px] top-[-2px] absolute" src="https://via.placeholder.com/54x50" />
                <img class="w-[119px] h-[79px] left-[-35.60px] top-[-2px] absolute" src="https://via.placeholder.com/119x79" />
                <img class="w-[114px] h-[76px] left-[-38.11px] top-[-1px] absolute" src="https://via.placeholder.com/114x76" />
            </div>
            <div class="text-gray-900 text-lg font-bold font-['Roboto']">Victor Ade</div>
            <div class="w-[32.82px] h-[33px] relative"></div>
        </div>
        <div class="left-[78px] top-[46px] absolute text-black text-[25px] font-bold font-['Roboto']">Obligations</div>
    </div>
    <div class="w-[290px] h-[1482px] left-0 top-0 absolute">
        <div class="w-[290px] h-[1482px] left-0 top-0 absolute bg-neutral-800 shadow"></div>
        <div class="w-[262px] h-14 left-[14px] top-[228px] absolute opacity-10 bg-white rounded-[10px]"></div>
        <div class="w-7 h-7 left-[229px] top-[221px] absolute origin-top-left -rotate-90 justify-start items-start inline-flex">
            <div class="p-1 rounded-tl-md rounded-bl-md justify-center items-center gap-2 flex">
                <div class="w-5 h-5 relative"></div>
            </div>
        </div>
        <div class="w-[163px] h-[310px] left-[48px] top-[195px] absolute flex-col justify-start items-start gap-[21px] inline-flex">
            <div class="self-stretch flex-col justify-start items-start gap-[25px] flex">
                <div class="justify-center items-center gap-[15px] inline-flex">
                    <div class="w-[22.16px] h-[22.16px] relative">
                        <div class="w-[22.16px] h-[22.16px] left-0 top-0 absolute justify-start items-start gap-[9.23px] inline-flex">
                            <div class="w-[22.16px] h-[22.16px] relative">
                            </div>
                        </div>
                        <div class="w-[20.46px] h-[20.46px] left-[0.92px] top-[-0px] absolute opacity-20 blur-[27.23px] justify-start items-start gap-[8.53px] inline-flex">
                            <div class="w-[20.46px] h-[20.46px] relative">
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white text-base font-bold font-['Roboto'] leading-normal">My Workplace</div>
                </div>
                <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
                    <div class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal">Reports</div>
                </div>
                <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
                    <div class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal">Collaboration</div>
                </div>
                <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
                    <div class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal">Requests</div>
                </div>
            </div>
            <div class="justify-center items-center gap-[15px] inline-flex">
                <div class="w-6 h-6 relative"></div>
                <div class="text-center text-white text-base font-bold font-['Roboto'] leading-normal">Obligations</div>
                <div class="origin-top-left -rotate-90 justify-start items-start flex">
                    <div class="p-1 rounded-tl-md rounded-bl-md justify-center items-center gap-2 flex">
                        <div class="w-5 h-5 relative"></div>
                    </div>
                </div>
            </div>
            <div class="justify-center items-center gap-[15px] inline-flex">
                <div class="w-6 h-6 relative"></div>
                <div class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal">Help Center</div>
            </div>
            <div class="justify-center items-center gap-[15px] inline-flex">
                <div class="w-6 h-6 relative"></div>
                <div class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal">Notification</div>
            </div>
        </div>
        <img class="w-[194px] h-6 left-[48.50px] top-[88.57px] absolute" src="https://via.placeholder.com/194x24" />
        <div class="left-[91px] top-[131px] absolute opacity-40 text-center text-zinc-400 text-[15px] font-normal font-['Roboto'] capitalize">Fiber Technician</div>
    </div>
    <div class="w-[290px] h-[1275px] left-0 top-0 absolute">
        <div class="w-[290px] h-[1275px] left-0 top-0 absolute bg-neutral-800 shadow"></div>
        <div class="w-[262px] h-14 left-[14px] top-[372px] absolute opacity-10 bg-white rounded-[10px]"></div>
        <div class="w-7 h-7 left-[229px] top-[221px] absolute origin-top-left -rotate-90 justify-start items-start inline-flex">
            <div class="p-1 rounded-tl-md rounded-bl-md justify-center items-center gap-2 flex">
                <div class="w-5 h-5 relative"></div>
            </div>
        </div>
        <div class="w-[138.16px] h-[261px] left-[48px] top-[195px] absolute flex-col justify-start items-start gap-[21px] inline-flex">
            <div class="self-stretch flex-col justify-start items-start gap-[25px] flex">
                <div class="justify-center items-center gap-[15px] inline-flex">
                    <div class="w-[22.16px] h-[22.16px] relative">
                        <div class="w-[22.16px] h-[22.16px] left-0 top-0 absolute justify-start items-start gap-[9.23px] inline-flex">
                            <div class="w-[22.16px] h-[22.16px] relative">
                            </div>
                        </div>
                        <div class="w-[20.46px] h-[20.46px] left-[0.92px] top-[-0px] absolute opacity-20 blur-[27.23px] justify-start items-start gap-[8.53px] inline-flex">
                            <div class="w-[20.46px] h-[20.46px] relative">
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white text-base font-bold font-['Roboto'] leading-normal">My Workplace</div>
                </div>
                <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
                    <div class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal">Reports</div>
                </div>
                <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
                    <div class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal">Collaboration</div>
                </div>
                <div class="pl-[39px] justify-center items-center gap-[15px] inline-flex">
                    <div class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal">Requests</div>
                </div>
            </div>
            <div class="justify-center items-center gap-[15px] inline-flex">
                <div class="w-6 h-6 relative"></div>
                <div class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal">Obligations</div>
            </div>
            <div class="justify-center items-center gap-[15px] inline-flex">
                <div class="w-6 h-6 relative"></div>
                <div class="text-center text-zinc-400 text-base font-normal font-['Roboto'] leading-normal">Help Center</div>
            </div>
        </div>
        <img class="w-[194px] h-6 left-[48.50px] top-[88.57px] absolute" src="https://via.placeholder.com/194x24" />
        <div class="left-[91px] top-[131px] absolute opacity-40 text-center text-zinc-400 text-[15px] font-normal font-['Roboto'] capitalize">Fiber Technician</div>
    </div>
</div> -->
