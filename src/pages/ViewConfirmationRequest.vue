<template>
    <div class="bg-[#f3f3f3] w-[1440px] h-[1275px] relative overflow-hidden"
        style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)">
        <div class="w-[1057px] h-[39px] absolute left-80 top-[139px]">
            <div class="bg-[#ffffff] rounded-sm border-solid border-[#d7d7d7] border pt-2.5 pr-[18px] pb-2.5 pl-[18px] flex flex-row gap-[43px] items-center justify-start w-[1057px] absolute left-0 top-0"
                style="box-shadow: 0px 5px 17px 0px rgba(34, 41, 46, 0.06)">
                <div class="text-[#4b5054] text-left relative" style="font: 600 16px 'Roboto-SemiBold', sans-serif">
                    My Schedule
                </div>
                <div class="text-[#fd4f00] text-left relative" style="font: 600 16px 'Roboto-SemiBold', sans-serif">
                    Confirmations
                </div>
            </div>
        </div>
        <div class="w-[1109px] h-[636px] absolute left-[312px] top-[200px] overflow-hidden">
            <div class="bg-[#ffffff] rounded-[5px] w-[1101px] h-[629px] absolute left-2 top-[7px]" style="
          box-shadow: var(
            --card-shadow-box-shadow,
            2px 3px 10px 0px rgba(34, 41, 46, 0.05)
          );
        "></div>
            <div class="bg-[#f8f8f8] w-[538px] h-14 absolute left-[9px] top-[72px]"></div>
            <div class="bg-[#f8f8f8] w-[538px] h-14 absolute left-[571px] top-[72px]"></div>
            <div class="bg-primary-white w-[538px] h-14 absolute left-[9px] top-32"></div>
            <div class="bg-primary-white w-[538px] h-14 absolute left-[571px] top-32"></div>
            <div class="bg-[#f8f8f8] w-[538px] h-14 absolute left-[9px] top-[184px]"></div>
            <div class="bg-[#f8f8f8] w-[538px] h-14 absolute left-[571px] top-[184px]"></div>
            <div class="bg-primary-white w-[538px] h-14 absolute left-[9px] top-60"></div>
            <div class="bg-primary-white w-[538px] h-14 absolute left-[571px] top-60"></div>
            <div class="bg-[#f8f8f8] w-[538px] h-14 absolute left-[9px] top-[296px]"></div>
            <div class="bg-[#f8f8f8] w-[538px] h-14 absolute left-[571px] top-[296px]"></div>
            <div class="bg-primary-white w-[538px] h-14 absolute left-[9px] top-[352px]"></div>
            <div class="bg-primary-white w-[538px] h-14 absolute left-[571px] top-[352px]"></div>
            <div class="bg-[#f8f8f8] w-[538px] h-14 absolute left-[9px] top-[408px]"></div>
            <div class="bg-[#f8f8f8] w-[538px] h-14 absolute left-[571px] top-[408px]"></div>
            <div class="bg-primary-white w-[538px] h-14 absolute left-[9px] top-[464px]"></div>
            <div class="bg-primary-white w-[538px] h-14 absolute left-[571px] top-[464px]"></div>
            <div class="bg-[#f8f8f8] rounded-br-[5px] rounded-bl-[5px] w-[538px] h-14 absolute left-[9px] top-[520px]">
            </div>
            <div class="absolute" style="inset: 0">
                <div class="text-legend-gray text-left absolute left-[31.62px] top-[537px] w-[443.75px] h-[22.29px]"
                    style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                    Expected Completion
                </div>
            </div>
            <div class="bg-[#f8f8f8] rounded-br-[5px] rounded-bl-[5px] w-[538px] h-14 absolute left-[571px] top-[520px]">
            </div>
            <div class="flex flex-col gap-0 items-start justify-start absolute left-0 top-[72px]">
                <div
                    class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[546px] h-[57px] relative">
                    <div class="shrink-0 w-[439.5px] h-[22px] static">
                        <div class="text-legend-gray text-left absolute left-[33.75px] top-[17.5px] w-[439.5px] h-[22px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            ID
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[546px] h-14 relative">
                    <div class="shrink-0 w-[439.5px] h-[22px] static">
                        <div class="text-legend-gray text-left absolute left-[33.75px] top-[17px] w-[439.5px] h-[22px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            Activity
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[546px] h-14 relative">
                    <div class="shrink-0 w-[444px] h-[25px] static">
                        <div class="text-legend-gray text-left absolute left-[31.5px] top-[15.5px] w-[444px] h-[25px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            Requested for
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[546px] h-14 relative">
                    <div class="shrink-0 w-[442px] h-6 static">
                        <div class="text-legend-gray text-left absolute left-[32.5px] top-4 w-[442px] h-6"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            Address
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[546px] h-14 relative">
                    <div class="shrink-0 w-[443.25px] h-[22.29px] static">
                        <div class="text-legend-gray text-left absolute left-[31.88px] top-[16.85px] w-[443.25px] h-[22.29px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            Status
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[546px] h-14 relative">
                    <div class="shrink-0 w-[443.25px] h-[20.29px] static">
                        <div class="text-legend-gray text-left absolute left-[31.88px] top-[17.85px] w-[443.25px] h-[20.29px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            Requested Status
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[546px] h-14 relative">
                    <div class="shrink-0 w-[443.12px] h-[22.29px] static">
                        <div class="text-legend-gray text-left absolute left-[31.94px] top-[16.85px] w-[443.12px] h-[22.29px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            Expected Start
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[546px] h-14 relative">
                    <div class="shrink-0 w-[443.75px] h-[22.29px] static">
                        <div class="text-legend-gray text-left absolute left-[31.62px] top-[16.85px] w-[443.75px] h-[22.29px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            Start Date
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col gap-0 items-start justify-start w-[538px] absolute left-[calc(50%_-_-16.5px)] top-[74px]">
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[465px] h-14 relative">
                    <div class="shrink-0 w-[377px] h-[23px] static">
                        <div class="text-legend-gray text-left absolute left-[24.5px] top-[16.5px] w-[377px] h-[23px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            9155
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[465px] h-14 relative">
                    <div class="shrink-0 w-[377px] h-[26px] static">
                        <div class="text-legend-gray text-left absolute left-[24.5px] top-[15px] w-[377px] h-[26px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            Indoor Installation
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[465px] h-14 relative">
                    <div class="shrink-0 w-[377.5px] h-[22px] static">
                        <div class="text-grey text-left absolute left-[24.25px] top-[17px] w-[377.5px] h-[22px]"
                            style="font: 400 16px 'SourceSansPro-Regular', sans-serif">
                            Ugochukwu Abraham
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[465px] h-14 relative">
                    <div class="shrink-0 w-[378px] h-8 static">
                        <div class="text-legend-gray text-left absolute left-6 top-3 w-[378px] h-8"
                            style="font: 400 16px/15px 'SourceSansPro-Regular', sans-serif">
                            15 Malcolm Fraser Street, Asokoro, <br />Abuja.
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[465px] h-14 relative">
                    <div class="shrink-0 w-[375px] h-6 static">
                        <div class="text-legend-gray text-left absolute left-[25.5px] top-4 w-[375px] h-6"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            Requested
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[465px] h-14 relative">
                    <div class="shrink-0 w-[373.75px] h-[25.29px] static">
                        <div class="text-legend-gray text-left absolute left-[26.12px] top-[15.35px] w-[373.75px] h-[25.29px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            In progress
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[465px] h-14 relative">
                    <div class="shrink-0 w-[374.75px] h-[23.29px] static">
                        <div class="text-legend-gray text-left absolute left-[25.62px] top-[16.35px] w-[374.75px] h-[23.29px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            2023-06-20 10:30:00
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[465px] h-14 relative">
                    <div class="shrink-0 w-[374.75px] h-[23.29px] static">
                        <div class="text-legend-gray text-left absolute left-[25.62px] top-[16.35px] w-[374.75px] h-[23.29px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            2023-07-28 09:11:14
                        </div>
                    </div>
                </div>
                <div class="pr-[39px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-[465px] h-14 relative">
                    <div class="shrink-0 w-[374.75px] h-[23.29px] static">
                        <div class="text-legend-gray text-left absolute left-[25.62px] top-[16.35px] w-[374.75px] h-[23.29px]"
                            style="font: 400 16px/25px 'SourceSansPro-Regular', sans-serif">
                            2023-07-28 09:11:14
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-icons text-left absolute left-[34px] top-[23px]"
                style="font: 700 25px 'SourceSansPro-Bold', sans-serif">
                Confirmation Requests
            </div>
        </div>
        <div class="flex flex-col gap-5 items-start justify-start w-[1100px] h-[310px] absolute left-[321px] top-[845px]">
            <div class="text-[#000000] text-left relative" style="font: 500 20px 'Roboto-Medium', sans-serif">
                Comments
            </div>
            <div class="shrink-0 w-[1100px] h-[162px] static">
                <svg class="rounded-none h-[auto] absolute right-[0%] left-[0%] w-[100%] bottom-[33.87%] top-[13.87%] h-[52.26%] overflow-visible"
                    style="" width="1100" height="162" viewBox="0 0 1100 162" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 0.999999C0 0.447715 0.447715 0 1 0H1099C1099.55 0 1100 0.447715 1100 1V161C1100 161.552 1099.55 162 1099 162H0.999999C0.447714 162 0 161.552 0 161V0.999999Z"
                        fill="white" />
                </svg>

                <div class="text-legend-grey text-left absolute left-[19px] top-[65px]"
                    style="font: 400 14px 'SourceSansPro-Regular', sans-serif">
                    Enter your message here:
                </div>
            </div>
            <div
                class="bg-legend-orange rounded-md border-solid border-[transparent] border pt-3.5 pr-7 pb-3.5 pl-7 shrink-0 w-32 h-[51px] relative">
                <div class="text-primary-white text-left absolute left-[35px] top-2.5"
                    style="font: 600 18px/32px 'SourceSansPro-SemiBold', sans-serif">
                    Submit
                </div>
            </div>
        </div>
        <div class="sticky left-[257px] top-0">
            <div class="bg-[#ffffff] w-[1183px] h-[102px] absolute left-[257px] top-0"
                style="box-shadow: 1px 4px 17px 0px rgba(34, 41, 46, 0.06)"></div>
            <div class="flex flex-row gap-6 items-center justify-start absolute left-[1109px] top-[27px]">
               
              <div class="items-start self-stretch flex justify-between gap-5 max-md:justify-center">
                             <img loading="lazy"
                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/41db3185-1aed-45c3-97ad-f5fb97b2e510?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&"
                              class="aspect-[0.94] object-contain object-center w-[30px] overflow-hidden self-center shrink-0 max-w-full my-auto" /><img
                               loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&"
                                  class="aspect-square object-contain object-center w-12 overflow-hidden self-stretch shrink-0 max-w-full" />
                                <div class="text-gray-900 text-lg font-bold leading-5 self-center my-auto">
                                  Victor Ade
                                </div>
                                <img loading="lazy"
                                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c6002c-2554-4ae7-89b3-33923c360bba?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&"
                                   class="aspect-square object-contain object-center w-[33px] overflow-hidden self-center shrink-0 max-w-full my-auto" />
                                 </div>

            </div>
            <div class="text-[#000000] text-left absolute left-[335px] top-[46px]"
                style="font: 700 25px 'Roboto-Bold', sans-serif">
                Obligations
            </div>
        </div>
        <div class="sticky left-0 top-0">
            <div class="bg-[#262324] w-[290px] h-[1275px] absolute left-0 top-0"
                style="box-shadow: 6px 0px 17px 0px rgba(34, 41, 46, 0.06)"></div>
            <div class="bg-[#ffffff] rounded-[10px] w-[262px] h-14 absolute left-3.5 top-[372px]"
                style="opacity: 0.11999999731779099"></div>
            <div class="flex flex-row gap-0 items-start justify-start absolute left-[229px] top-[221px]"
                style="transform-origin: 0 0; transform: rotate(-90deg) scale(1, 1)">
                <div
                    class="rounded-tl-md rounded-bl-md p-1 flex flex-row gap-2 items-center justify-center shrink-0 relative">
                    <svg class="shrink-0 w-5 h-5 relative overflow-visible" style="" width="20" height="20"
                        viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.293 7.293C5.48053 7.10553 5.73484 7.00021 6 7.00021C6.26516 7.00021 6.51947 7.10553 6.707 7.293L10 10.586L13.293 7.293C13.4816 7.11084 13.7342 7.01005 13.9964 7.01233C14.2586 7.0146 14.5094 7.11977 14.6948 7.30518C14.8802 7.49059 14.9854 7.7414 14.9877 8.0036C14.99 8.2658 14.8892 8.5184 14.707 8.707L10.707 12.707C10.5195 12.8945 10.2652 12.9998 10 12.9998C9.73484 12.9998 9.48053 12.8945 9.293 12.707L5.293 8.707C5.10553 8.51947 5.00021 8.26516 5.00021 8C5.00021 7.73484 5.10553 7.48053 5.293 7.293V7.293Z"
                            fill="white" />
                    </svg>
                </div>
            </div>
            <div class="w-[138.16px] h-[261px] static">
                <div class="flex flex-col gap-[21px] items-start justify-start absolute left-12 top-[195px]">
                    <div class="shrink-0 w-[138.16px] h-[171px] static">
                        <div class="flex flex-col gap-[25px] items-start justify-start absolute left-0 top-0">
                            <div class="flex flex-row gap-[15px] items-center justify-center shrink-0 relative">
                                <div class="shrink-0 w-[22.16px] h-[22.16px] static">
                                    <div
                                        class="flex flex-row gap-[9.23px] items-start justify-start w-[22.16px] h-[22.16px] absolute left-0 top-[0.92px]">
                                        <svg class="shrink-0 w-[22.16px] h-[22.16px] relative overflow-visible" style=""
                                            width="23" height="24" viewBox="0 0 23 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.8526 10.9843V4.70535C19.8526 3.32029 19.2616 2.76627 17.7934 2.76627H14.063C12.5948 2.76627 12.0039 3.32029 12.0039 4.70535V10.9843C12.0039 12.3694 12.5948 12.9234 14.063 12.9234H17.7934C19.2616 12.9234 19.8526 12.3694 19.8526 10.9843Z"
                                                fill="white" />
                                            <path
                                                d="M10.1572 13.0157V19.2947C10.1572 20.6797 9.5662 21.2338 8.09803 21.2338H4.3676C2.89943 21.2338 2.30847 20.6797 2.30847 19.2947V13.0157C2.30847 11.6307 2.89943 11.0766 4.3676 11.0766H8.09803C9.5662 11.0766 10.1572 11.6307 10.1572 13.0157Z"
                                                fill="white" />
                                            <path
                                                d="M19.8526 19.2947V16.7092C19.8526 15.3242 19.2616 14.7701 17.7934 14.7701H14.063C12.5948 14.7701 12.0039 15.3242 12.0039 16.7092V19.2947C12.0039 20.6797 12.5948 21.2338 14.063 21.2338H17.7934C19.2616 21.2338 19.8526 20.6797 19.8526 19.2947Z"
                                                fill="white" />
                                            <path
                                                d="M10.1572 7.2908V4.70535C10.1572 3.32029 9.5662 2.76627 8.09803 2.76627H4.3676C2.89943 2.76627 2.30847 3.32029 2.30847 4.70535V7.2908C2.30847 8.67587 2.89943 9.22989 4.3676 9.22989H8.09803C9.5662 9.22989 10.1572 8.67587 10.1572 7.2908Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div class="flex flex-row gap-[8.53px] items-start justify-start w-[20.46px] h-[20.46px] absolute left-[0.92px] top-[0.92px]"
                                        style="opacity: 0.20000000298023224; filter: blur(13.61px)">
                                        <svg class="shrink-0 w-[20.46px] h-[20.46px] relative overflow-visible" style=""
                                            width="22" height="22" viewBox="0 0 22 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.2548 10.2131V4.41526C19.2548 3.13633 18.7091 2.62476 17.3534 2.62476H13.9088C12.5532 2.62476 12.0075 3.13633 12.0075 4.41526V10.2131C12.0075 11.492 12.5532 12.0036 13.9088 12.0036H17.3534C18.7091 12.0036 19.2548 11.492 19.2548 10.2131Z"
                                                fill="white" />
                                            <path
                                                d="M10.3022 12.0888V17.8867C10.3022 19.1656 9.75657 19.6772 8.4009 19.6772H4.95631C3.60064 19.6772 3.05496 19.1656 3.05496 17.8867V12.0888C3.05496 10.8099 3.60064 10.2983 4.95631 10.2983H8.4009C9.75657 10.2983 10.3022 10.8099 10.3022 12.0888Z"
                                                fill="white" />
                                            <path
                                                d="M19.2548 17.8867V15.4993C19.2548 14.2204 18.7091 13.7088 17.3534 13.7088H13.9088C12.5532 13.7088 12.0075 14.2204 12.0075 15.4993V17.8867C12.0075 19.1656 12.5532 19.6772 13.9088 19.6772H17.3534C18.7091 19.6772 19.2548 19.1656 19.2548 17.8867Z"
                                                fill="white" />
                                            <path
                                                d="M10.3022 6.8026V4.41526C10.3022 3.13633 9.75657 2.62476 8.4009 2.62476H4.95631C3.60064 2.62476 3.05496 3.13633 3.05496 4.41526V6.8026C3.05496 8.08153 3.60064 8.5931 4.95631 8.5931H8.4009C9.75657 8.5931 10.3022 8.08153 10.3022 6.8026Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="text-[#ffffff] text-center relative"
                                    style="font: 700 16px/24px 'Roboto-Bold', sans-serif">
                                    My Workplace
                                </div>
                            </div>
                            <div class="pl-[39px] flex flex-row gap-[15px] items-center justify-center shrink-0 relative">
                                <div class="text-icons text-center relative"
                                    style="font: 400 16px/24px 'Roboto-Regular', sans-serif">
                                    Reports
                                </div>
                            </div>
                            <div class="pl-[39px] flex flex-row gap-[15px] items-center justify-center shrink-0 relative">
                                <div class="text-greytext text-center relative"
                                    style="font: 400 16px/24px 'Roboto-Regular', sans-serif">
                                    Collaboration
                                </div>
                            </div>
                            <div class="pl-[39px] flex flex-row gap-[15px] items-center justify-center shrink-0 relative">
                                <div class="text-[#b3b3b3] text-center relative"
                                    style="font: 400 16px/24px 'Roboto-Regular', sans-serif">
                                    Requests
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row gap-[15px] items-center justify-center shrink-0 relative">
                        <svg class="shrink-0 w-6 h-6 relative overflow-visible" style="" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1115 6.74974L16.1115 6.74964C16.2036 5.50373 15.8146 4.37046 15.0421 3.53645C14.279 2.71258 13.208 2.24963 11.9999 2.24963C10.7811 2.24963 9.70673 2.71154 8.94977 3.52747L16.1115 6.74974ZM16.1115 6.74974C15.9216 9.32192 13.9864 11.2496 11.9999 11.2496C10.0128 11.2496 8.07483 9.32099 7.88794 6.74992L16.1115 6.74974ZM7.88792 6.74967C7.79665 5.48654 8.1855 4.3515 8.94973 3.52752L7.88792 6.74967Z"
                                stroke="#B3B3B3" stroke-width="1.5" />
                            <path
                                d="M3.7499 21.7485V21.7486H20.2499V22.4986L20.2594 21.7486C20.364 21.75 20.4675 21.728 20.5624 21.6843C20.6574 21.6406 20.7414 21.5762 20.8083 21.496L20.809 21.4952C20.9592 21.3157 21.0376 21.0482 20.9828 20.7453L20.9827 20.7449C20.6251 18.761 19.5137 17.0905 17.7341 15.904L3.7499 21.7485ZM3.7499 21.7485L3.74015 21.7486M3.7499 21.7485L3.74015 21.7486M3.74015 21.7486C3.63564 21.75 3.53215 21.728 3.4372 21.6844C3.34226 21.6407 3.25824 21.5764 3.19126 21.4962L3.19078 21.4956M3.74015 21.7486L3.19078 21.4956M3.19078 21.4956C3.04063 21.3161 2.96224 21.0486 3.017 20.7458L3.01707 20.7454M3.19078 21.4956L3.01707 20.7454M3.01707 20.7454C3.37469 18.7615 4.48612 17.0909 6.26581 15.9039L3.01707 20.7454ZM6.26603 15.9038C7.85665 14.8439 9.89319 14.2486 11.9999 14.2486C14.1065 14.2486 16.1431 14.8443 17.7339 15.9039L6.26603 15.9038Z"
                                stroke="#B3B3B3" stroke-width="1.5" />
                        </svg>

                        <div class="text-[#b3b3b3] text-center relative"
                            style="font: 400 16px/24px 'Roboto-Regular', sans-serif">
                            Obligations
                        </div>
                    </div>
                    <div class="flex flex-row gap-[15px] items-center justify-center shrink-0 relative">
                        <svg class="shrink-0 w-6 h-6 relative overflow-visible" style="" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1115 6.74974L16.1115 6.74964C16.2036 5.50373 15.8146 4.37046 15.0421 3.53645C14.279 2.71258 13.208 2.24963 11.9999 2.24963C10.7811 2.24963 9.70673 2.71154 8.94977 3.52747L16.1115 6.74974ZM16.1115 6.74974C15.9216 9.32192 13.9864 11.2496 11.9999 11.2496C10.0128 11.2496 8.07483 9.32099 7.88794 6.74992L16.1115 6.74974ZM7.88792 6.74967C7.79665 5.48654 8.1855 4.3515 8.94973 3.52752L7.88792 6.74967Z"
                                stroke="#B3B3B3" stroke-width="1.5" />
                            <path
                                d="M3.7499 21.7485V21.7486H20.2499V22.4986L20.2594 21.7486C20.364 21.75 20.4675 21.728 20.5624 21.6843C20.6574 21.6406 20.7414 21.5762 20.8083 21.496L20.809 21.4952C20.9592 21.3157 21.0376 21.0482 20.9828 20.7453L20.9827 20.7449C20.6251 18.761 19.5137 17.0905 17.7341 15.904L3.7499 21.7485ZM3.7499 21.7485L3.74015 21.7486M3.7499 21.7485L3.74015 21.7486M3.74015 21.7486C3.63564 21.75 3.53215 21.728 3.4372 21.6844C3.34226 21.6407 3.25824 21.5764 3.19126 21.4962L3.19078 21.4956M3.74015 21.7486L3.19078 21.4956M3.19078 21.4956C3.04063 21.3161 2.96224 21.0486 3.017 20.7458L3.01707 20.7454M3.19078 21.4956L3.01707 20.7454M3.01707 20.7454C3.37469 18.7615 4.48612 17.0909 6.26581 15.9039L3.01707 20.7454ZM6.26603 15.9038C7.85665 14.8439 9.89319 14.2486 11.9999 14.2486C14.1065 14.2486 16.1431 14.8443 17.7339 15.9039L6.26603 15.9038Z"
                                stroke="#B3B3B3" stroke-width="1.5" />
                        </svg>

                        <div class="text-greytext text-center relative"
                            style="font: 400 16px/24px 'Roboto-Regular', sans-serif">
                            Help Center
                        </div>
                    </div>
                </div>
            </div>
            <img class="w-[194px] h-6 absolute left-[48.5px] top-[88.57px]" src="legend-rev-10.png" />
            <div class="text-[#b3b3b3] text-center absolute left-[91px] top-[131px]" style="
          font: 400 15px 'Roboto-Regular', sans-serif;
          opacity: 0.4000000059604645;
        ">
                Fiber Technician
            </div>
        </div>
    </div>
</template>
<script>
import '../assets/tailwind.css'

export default {
    name: "ViewConfirmationRequest",
    components: {},
    props: {},
    data() {
        // quickfix to have components available to pass as props
        return {};
    },
};
</script>
<style scoped></style>
