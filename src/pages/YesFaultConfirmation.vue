<template>
  <div class="flex justify-center min-h-screen place-items-center">
    <div class="w-[628px] shadow-2xl min-h-[900px] flex justify-center">
      <div class="w-3/4">
        <div
          class="text-legend-black text-left justify-start text-2xl font-bold font-['Source Sans Pro']"
        >
          Confirm Resolution
        </div>
        <div class="w-full justify-center items-center">
          <div
            class="text-center text-base text-black text-[25px] my-16 font-semibold font-['Source Sans Pro'] leading-normal"
          >
            What is the status of the work?
          </div>
        </div>
        <div class="my-16">
          <div class="w-full flex justify-center">
            <button
              class="focus:outline-none w-[300px] h-[60px] my-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-semibold font-['Source Sans Pro'] rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Completed
            </button>
          </div>
          <div class="w-full flex justify-center">
            <button
              class="focus:outline-none w-[300px] h-[60px] my-2 text-white bg-yellow-500 hover:bg-yellow-200 focus:ring-4 focus:ring-yellow-300 font-semibold font-['Source Sans Pro'] rounded-lg text-lg px-7 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Ongoing
            </button>
          </div>
          <div class="w-full flex justify-center">
            <button
              class="focus:outline-none w-[295px] h-[60px] my-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-semibold font-['Source Sans Pro'] rounded-lg text-lg px-7 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Not Completed
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <svg class="rounded-none w-[628px] h-[1045px] absolute left-[calc(50%_-_-98px)] top-0 overflow-visible" style=""
            width="788" height="1220" viewBox="0 0 788 1205" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_5_101)">
                <path
                    d="M56 48C56 43.5817 59.5817 40 64 40H676C680.418 40 684 43.5817 684 48V1077C684 1081.42 680.418 1085 676 1085H64C59.5817 1085 56 1081.42 56 1077V48Z"
                    fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_5_101" x="0" y="0" width="788" height="1205" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dx="24" dy="40" />
                    <feGaussianBlur stdDeviation="40" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.133333 0 0 0 0 0.160784 0 0 0 0 0.180392 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_101" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_101" result="shape" />
                </filter>
            </defs>
        </svg>

         <div class="w-[295px] left-[969px] top-[200px] absolute justify-center items-center gap-4 inline-flex">
            <div class="text-center text-black text-[25px] font-semibold font-['Source Sans Pro'] leading-normal">What is the status of the work?</div>
        </div>
        <div class="grid gap-7 grid-cols-1 grid-rows-3 items-start justify-start absolute left-[calc(50%_-_-225px)] top-[270px]">
            <div class="rounded-lg border-solid border-[transparent] border pt-[18px] pr-[102px] pb-[18px] pl-[102px] flex flex-row gap-2.5 items-center justify-start shrink-0 w-[374px] relative"
                style="background: linear-gradient(to left, #00b454, #00b454)">
                <div class="shrink-0 w-11 h-11 static">
                    <div class="p-2.5 flex flex-row gap-2.5 items-start justify-start absolute left-[102px] top-[18px]">
                        <svg class="shrink-0 w-6 h-6 relative overflow-visible" style="" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_5_107)">
                                <path
                                    d="M11.0005 16.5556L17.7783 9.7778L16.2227 8.22217L11.0005 13.4444L8.77829 11.2222L7.22266 12.7778L11.0005 16.5556Z"
                                    fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_5_107">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="text-[#ffffff] text-center relative flex items-center justify-center"
                    style="font: 600 25px 'SourceSansPro-SemiBold', sans-serif">
                    Completed
                </div>
            </div>
            <div class="rounded-lg border-solid border-[transparent] border pt-[18px] pr-102 pb-[18px] pl-102 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[374px] relative"
                style="background: linear-gradient(to left, #f39d1c, #f39d1c)">
                <div class="shrink-0 w-11 h-11 static">
                    <div class="p-2.5 flex flex-row gap-2.5 items-start justify-start absolute left-[115px] top-[18px]">
                        <svg class="shrink-0 w-6 h-6 relative overflow-visible" style="" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2 2H8V4L16 4V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2ZM6 20V18H4V20H6ZM8 18H16V16H18V8H16V6L8 6V8H6V16H8V18ZM18 18V20H20V18H18ZM18 6V4H20V6H18ZM6 4V6H4V4H6Z"
                                fill="white" />
                        </svg>
                    </div>
                </div>
                <div class="text-[#ffffff] text-center relative flex items-center justify-center"
                    style="font: 600 25px 'SourceSansPro-SemiBold', sans-serif">
                    Ongoing
                </div>
            </div>
            <div class="rounded-lg border-solid border-[transparent] border pt-[18px] pr-102 pb-[18px] pl-102 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[374px] relative"
                style="background: linear-gradient(to left, #ff0000, #ff0000)">
                <div class="shrink-0 w-11 h-11 static">
                    <div class="p-2.5 flex flex-row gap-2.5 items-start justify-start absolute left-[80.5px] top-[18px]">
                        <div class="shrink-0 w-6 h-6 relative overflow-hidden">
                            <svg class="shrink-0 w-6 h-6 relative overflow-visible" style="" width="24" height="24"
                                viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12ZM22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z"
                                    fill="white" />
                            </svg>

                            <svg class="h-[auto] absolute left-[7px] top-2 overflow-visible" style="" width="12" height="11"
                                viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 1L1.5 10" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M1.5 1L10.5 10" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="text-[#ffffff] text-center relative flex items-center justify-center"
                    style="font: 600 25px 'SourceSansPro-SemiBold', sans-serif">
                    Not Completed
                </div>
            </div>
        </div>
        <svg class="rounded w-[34px] h-[34px] absolute left-[1370px] top-[26px] overflow-visible" style="" width="42"
            height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_5_123)">
                <rect x="4" y="1" width="34" height="34" rx="4" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.9826 24.0104C9.87615 25.1169 9.87615 26.9109 10.9826 28.0174C12.0891 29.1238 13.8831 29.1238 14.9896 28.0174L21 22.007L27.0104 28.0174C28.1169 29.1239 29.9108 29.1239 31.0173 28.0174C32.1238 26.9109 32.1238 25.1169 31.0173 24.0104L25.0069 18L31.0173 11.9896C32.1238 10.8831 32.1238 9.08915 31.0173 7.98267C29.9108 6.87618 28.1169 6.87618 27.0104 7.98267L21 13.9931L14.9896 7.98269C13.8831 6.8762 12.0891 6.8762 10.9826 7.98269C9.87615 9.08917 9.87615 10.8831 10.9826 11.9896L16.993 18L10.9826 24.0104Z"
                    fill="#FD4F00" />
            </g>
            <defs>
                <filter id="filter0_d_5_123" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_123" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_123" result="shape" />
                </filter>
            </defs>
        </svg>

        <div class="text-legend-black text-left absolute left-[843px] top-[77px] bottom-[50px]"
            style="font: 700 30px/25px 'SourceSansPro-Bold', sans-serif">
            Confirm Resolution
        </div>
        <svg class="h-[auto] absolute left-[678px] top-[426px] overflow-visible" style="" width="18" height="18"
            viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2L2 16" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2 2L16 16" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg> -->
  </div>
</template>
<script>
import '../assets/tailwind.css'
export default {
  name: 'YesFaultConfirmation',
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {}
  }
}
</script>
<style scoped></style>
