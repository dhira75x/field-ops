<template>
  <div
    class="bg-[#fafafe] w-[1440px] h-[1245px] relative overflow-hidden"
    style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
  >
    <div
      class="bg-[#ffffff] border-solid border-[rgba(6,6,6,0.20)] border w-[1061px] h-[1235px] absolute left-[316px] top-[215px]"
      style="box-shadow: -3px 0px 24px 11px rgba(0, 0, 0, 0.08)"
    ></div>
    <div class="w-[461px] h-[89px] absolute left-[856px] top-[747px]">
      <div class="absolute" style="inset: 0">
        <div
          class="text-[#000000] text-left absolute left-0 top-0"
          style="
            font:
              600 16px 'SourceSansPro-SemiBold',
              sans-serif;
          "
        >
          Address:
        </div>
        <div class="w-[461px] h-14 static">
          <div
            class="rounded-md border-solid border-legend-grey border w-[461px] h-14 absolute left-0 top-[33px]"
          ></div>
          <div
            class="text-icons text-center absolute left-[calc(50%_-_205.5px)] top-[calc(50%_-_-7.5px)] w-[100px]"
            style="
              font:
                400 15px 'SourceSansPro-Regular',
                sans-serif;
            "
          >
            Enter Address
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-[13px] items-start justify-start w-[461px] absolute left-[856px] top-[629px]"
    >
      <div
        class="text-[#000000] text-left relative self-stretch"
        style="
          font:
            500 16px 'Roboto-Medium',
            sans-serif;
        "
      >
        Labelled
      </div>
      <div
        class="bg-w-background rounded-md border-solid border-legend-grey border p-4 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
      >
        <div class="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
          <div
            class="text-suburbanblack text-left relative flex-1"
            style="
              font:
                400 16px 'Roboto-Regular',
                sans-serif;
            "
          >
            Yes
          </div>
          <svg
            class="shrink-0 w-6 h-6 relative overflow-visible"
            style=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5_718)">
              <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="#B3B3B3" />
            </g>
            <defs>
              <clipPath id="clip0_5_718">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-[11px] items-start justify-start w-[914px] absolute left-[380px] top-[866px]"
    >
      <div
        class="text-[#000000] text-left relative"
        style="
          font:
            500 16px 'Roboto-Medium',
            sans-serif;
        "
      >
        Upload picture:
      </div>
      <div class="shrink-0 w-[914px] h-16 static">
        <div
          class="bg-[#eeeeee] rounded-md border-solid border-legend-gray border absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[31.91%] h-[68.09%]"
        ></div>
        <svg
          class="w-[32.98px] h-7 absolute left-[21.2px] top-12 overflow-visible"
          style=""
          width="34"
          height="28"
          viewBox="0 0 34 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1731 23.1816H22.2084C24.434 23.1816 25.5831 22.1885 25.5831 20.29V12.3096C25.5831 11.0791 25.3968 10.5166 24.4962 9.73438L19.082 5.06738C18.2021 4.31152 17.4775 4.13574 16.1731 4.13574H11.1731C8.95771 4.13574 7.79828 5.12891 7.79828 7.03613V20.29C7.79828 22.1885 8.95771 23.1816 11.1731 23.1816ZM11.349 21.4238C10.3552 21.4238 9.85834 20.9844 9.85834 20.1758V7.1416C9.85834 6.3418 10.3552 5.89355 11.3594 5.89355H15.7487V10.6748C15.7487 11.9492 16.4837 12.5645 17.9744 12.5645H23.5231V20.1758C23.5231 20.9844 23.0262 21.4238 22.022 21.4238H11.349ZM18.171 11.0264C17.7363 11.0264 17.5499 10.8682 17.5499 10.5078V6.12207L23.2436 11.0264H18.171ZM17.6017 19.6221V16.9678L17.5189 15.6055L18.316 16.3174L19.0924 16.9941C19.2477 17.1348 19.4858 17.2227 19.7032 17.2227C20.1794 17.2227 20.5313 16.9414 20.5313 16.5547C20.5313 16.3262 20.4278 16.168 20.2311 16.0186L17.3843 13.8037C17.1462 13.6191 16.9495 13.5312 16.6907 13.5312C16.4319 13.5312 16.2352 13.6191 15.9971 13.8037L13.1503 16.0186C12.9536 16.168 12.8501 16.3262 12.8501 16.5547C12.8501 16.9414 13.2021 17.2227 13.6783 17.2227C13.8956 17.2227 14.1337 17.1348 14.289 16.9941L15.0654 16.3174L15.8625 15.6055L15.7797 16.9678V19.6221C15.7797 20.0439 16.1938 20.3691 16.6907 20.3691C17.1876 20.3691 17.6017 20.0439 17.6017 19.6221Z"
            fill="#1C1C1E"
          />
        </svg>

        <div
          class="text-[#000000] text-left absolute right-[70.88%] left-[6.31%] w-[22.81%] bottom-[22.32%] top-[57.46%] h-[20.21%]"
          style="
            font:
              400 16px 'Roboto-Regular',
              sans-serif;
          "
        >
          Click to drag to drop files
        </div>
      </div>
    </div>
    <div
      class="text-[#000000] text-left absolute left-[345px] top-[460px] w-[372px]"
      style="
        font:
          700 25px 'Roboto-Bold',
          sans-serif;
      "
    >
      Node Verification
    </div>
    <div
      class="text-[#000000] text-left absolute left-[345px] top-[280px] w-[372px]"
      style="
        font:
          700 25px 'Roboto-Bold',
          sans-serif;
      "
    >
      Faults
    </div>
    <div
      class="text-[#000000] text-left absolute left-[345px] top-[1015px] w-[372px]"
      style="
        font:
          700 25px 'Roboto-Bold',
          sans-serif;
      "
    >
      Resolution Status
    </div>
    <div class="w-[461px] h-[325px] absolute left-[355px] top-[511px]">
      <div class="w-[318.87px] h-[89px] absolute left-0 top-[236px]">
        <div class="absolute" style="inset: 0">
          <div class="w-[318.87px] h-[89px] static">
            <div
              class="text-[#000000] text-left absolute left-0 top-0"
              style="
                font:
                  600 16px 'SourceSansPro-SemiBold',
                  sans-serif;
              "
            >
              GPS Coordinates:
            </div>
            <div class="w-[142px] h-14 static">
              <div
                class="rounded-md border-solid border-legend-grey border w-[142px] h-14 absolute left-0 top-[33px]"
              ></div>
              <div
                class="text-icons text-center absolute left-[calc(50%_-_134.44px)] top-[calc(50%_-_-7.5px)] w-[92px]"
                style="
                  font:
                    400 15px 'SourceSansPro-Regular',
                    sans-serif;
                "
              >
                Enter Latitude
              </div>
            </div>
            <div class="w-[153.87px] h-14 static">
              <div
                class="rounded-md border-solid border-legend-grey border w-[153.87px] h-14 absolute left-[calc(50%_-_-5.56px)] top-[calc(50%_-_11.5px)]"
              ></div>
              <div
                class="text-icons text-center absolute left-[calc(50%_-_-27.56px)] top-[calc(50%_-_-7.5px)] w-[109px]"
                style="
                  font:
                    400 15px 'SourceSansPro-Regular',
                    sans-serif;
                "
              >
                Enter Longitude
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[13px] items-start justify-start w-[461px] absolute left-0 top-[118px]"
      >
        <div
          class="text-[#000000] text-left relative self-stretch"
          style="
            font:
              500 16px 'Roboto-Medium',
              sans-serif;
          "
        >
          Verification Status
        </div>
        <div
          class="bg-w-background rounded-md border-solid border-legend-grey border p-4 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
        >
          <div class="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
            <div
              class="text-suburbanblack text-left relative flex-1"
              style="
                font:
                  400 16px 'Roboto-Regular',
                  sans-serif;
              "
            >
              Verified
            </div>
            <svg
              class="shrink-0 w-6 h-6 relative overflow-visible"
              style=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_821)">
                <path
                  d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                  fill="#B3B3B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_821">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[13px] items-start justify-start w-[461px] absolute left-0 top-0"
      >
        <div
          class="text-[#000000] text-left relative self-stretch"
          style="
            font:
              500 16px 'Roboto-Medium',
              sans-serif;
          "
        >
          Node type
        </div>
        <div
          class="bg-w-background rounded-lg border-solid border-legend-grey border p-4 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
        >
          <div class="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
            <div
              class="text-suburbanblack text-left relative flex-1"
              style="
                font:
                  400 16px 'Roboto-Regular',
                  sans-serif;
              "
            >
              Splitter
            </div>
            <svg
              class="shrink-0 w-6 h-6 relative overflow-visible"
              style=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_868)">
                <path
                  d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                  fill="#B3B3B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_868">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[453px] h-[94px] absolute left-[calc(50%_-_365px)] top-[318px]">
      <div
        class="flex flex-col gap-[11px] items-start justify-start w-[376px] absolute left-[calc(50%_-_226.5px)] top-[calc(50%_-_48px)]"
      >
        <div
          class="text-[#000000] text-left relative"
          style="
            font:
              600 16px 'SourceSansPro-SemiBold',
              sans-serif;
          "
        >
          Fault Type
        </div>
        <div class="shrink-0 w-[453px] h-16 static">
          <div
            class="rounded-lg border-solid border-legend-gray border absolute right-[-20.48%] left-[0%] w-[120.48%] bottom-[0%] top-[32.63%] h-[67.37%]"
          ></div>
          <svg
            class="w-[21.88px] h-6 absolute left-[412.58px] top-[57.5px] overflow-visible"
            style=""
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5_740)">
              <path
                d="M7.3418 9.09L11.5272 13.67L15.7126 9.09L16.9983 10.5L11.5272 16.5L6.05608 10.5L7.3418 9.09Z"
                fill="#B3B3B3"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_740">
                <rect
                  width="21.8845"
                  height="24"
                  fill="white"
                  transform="translate(0.584961 0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <div
            class="text-suburbanblack text-left absolute right-[70.34%] left-[3.3%] w-[26.37%] top-[calc(50%_-_-5px)]"
            style="
              font:
                400 16px 'SourceSansPro-Regular',
                sans-serif;
            "
          >
            Fiber Cut
          </div>
        </div>
      </div>
    </div>
    <div class="absolute" style="inset: 0">
      <div
        class="text-[#000000] text-left absolute left-[856px] top-[510px]"
        style="
          font:
            600 16px 'SourceSansPro-SemiBold',
            sans-serif;
        "
      >
        Number of Cables and type
      </div>
      <div class="w-[120px] h-14 static">
        <div
          class="rounded-md border-solid border-legend-grey border w-[120px] h-14 absolute left-[856px] top-[543px]"
        ></div>
        <div
          class="text-icons text-left absolute left-[879px] top-[562px]"
          style="
            font:
              400 15px 'SourceSansPro-Regular',
              sans-serif;
          "
        >
          Insert value
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-0 items-center justify-start absolute left-80 top-[139px]">
      <svg
        class="shrink-0 w-10 h-10 relative overflow-visible"
        style=""
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 30L15 20L25 10"
          stroke="#0F151F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div
        class="text-[#000000] text-left relative"
        style="
          font:
            500 25px 'Roboto-Medium',
            sans-serif;
        "
      >
        Back
      </div>
    </div>
    <div
      class="flex flex-row gap-[15px] items-center justify-start absolute left-[1142px] top-[132px]"
    >
      <div class="flex flex-row gap-[5px] items-start justify-start shrink-0 relative">
        <div
          class="rounded-md border-solid border-suburbanblack border pt-3.5 pr-7 pb-3.5 pl-7 shrink-0 w-[109px] h-[51px] relative"
        >
          <div
            class="text-suburbanblack text-left absolute left-[27px] top-[9px]"
            style="
              font:
                400 18px/32px 'Roboto-Regular',
                sans-serif;
            "
          >
            Cancel
          </div>
        </div>
        <div
          class="bg-legend-orange rounded-md border-solid border-[transparent] border pt-3.5 pr-7 pb-3.5 pl-7 shrink-0 w-[121px] h-[51px] relative"
        >
          <div
            class="text-primary-white text-left absolute left-[26px] top-[9px]"
            style="
              font:
                400 18px/32px 'Roboto-Regular',
                sans-serif;
            "
          >
            Submit
          </div>
        </div>
      </div>
    </div>
    <div class="absolute" style="inset: 0">
      <div
        class="bg-legend-black pt-2.5 pr-[27px] pb-2.5 pl-5 flex flex-row gap-4 items-center justify-start w-[1061px] h-[43px] absolute left-[316px] top-[201px]"
        style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06)"
      ></div>
      <div
        class="p-2.5 flex flex-row items-center justify-between w-[1026px] h-[46px] absolute left-[331px] top-[201px]"
      >
        <div
          class="text-[#ffffff] text-left relative"
          style="
            font:
              600 20px/28px 'SourceSansPro-SemiBold',
              sans-serif;
          "
        >
          Fault Resolution Report
        </div>
        <div
          class="text-[#ffffff] text-left relative"
          style="
            font:
              400 16px/24px 'SourceSansPro-Regular',
              sans-serif;
          "
        >
          Oct 30, 2023 11:35 AM
        </div>
      </div>
    </div>
    <div class="w-[453px] h-[94px] absolute left-[355px] top-[1070px]">
      <div
        class="flex flex-col gap-[11px] items-start justify-start absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%]"
      >
        <div
          class="text-[#000000] text-left relative"
          style="
            font:
              500 16px 'Roboto-Medium',
              sans-serif;
          "
        >
          POF NODE
        </div>
        <div class="shrink-0 w-[453px] h-16 static">
          <div
            class="rounded-[1px] border-solid border-legend-gray border absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[31.91%] h-[68.09%]"
          ></div>
          <div class="w-[29.36px] h-7 absolute left-[405px] top-12 overflow-hidden">
            <svg
              class="h-[auto] absolute right-[25%] left-[25%] w-[50%] bottom-[37.5%] top-[37.5%] h-[25%] overflow-visible"
              style=""
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.34008 1.5L8.68016 8.5L16.0202 1.5"
                stroke="#0F151F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            class="text-suburbanblack text-left absolute right-[91.13%] left-[2.69%] w-[6.18%] bottom-[25.51%] top-[54.27%] h-[20.21%]"
            style="
              font:
                400 16px 'Roboto-Regular',
                sans-serif;
            "
          >
            OLT
          </div>
        </div>
      </div>
    </div>
    <div class="w-[453px] h-[94px] absolute left-[856px] top-[1070px]">
      <div
        class="flex flex-col gap-[11px] items-start justify-start absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%]"
      >
        <div
          class="text-[#000000] text-left relative"
          style="
            font:
              500 16px 'Roboto-Medium',
              sans-serif;
          "
        >
          POF Segment
        </div>
        <div class="shrink-0 w-[453px] h-16 static">
          <div
            class="rounded-[1px] border-solid border-legend-gray border absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[31.91%] h-[68.09%]"
          ></div>
          <div class="w-[29.36px] h-7 absolute left-[405px] top-12 overflow-hidden">
            <svg
              class="h-[auto] absolute right-[25%] left-[25%] w-[50%] bottom-[37.5%] top-[37.5%] h-[25%] overflow-visible"
              style=""
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.34009 1.5L8.68017 8.5L16.0203 1.5"
                stroke="#0F151F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            class="text-suburbanblack text-left absolute right-[83.62%] left-[2.69%] w-[13.69%] bottom-[25.51%] top-[54.27%] h-[20.21%]"
            style="
              font:
                400 16px 'Roboto-Regular',
                sans-serif;
            "
          >
            Lastmile
          </div>
        </div>
      </div>
    </div>
    <div class="w-[453px] h-[94px] absolute left-[calc(50%_-_-140px)] top-[317px]">
      <div
        class="flex flex-col gap-[11px] items-start justify-start absolute left-[calc(50%_-_232.12px)] top-[calc(50%_-_47.5px)]"
      >
        <div
          class="text-[#000000] text-left relative"
          style="
            font:
              600 16px 'SourceSansPro-SemiBold',
              sans-serif;
          "
        >
          Cause of Fault
        </div>
        <div class="shrink-0 w-[464.25px] h-16 static">
          <div
            class="rounded-lg border-solid border-legend-gray border absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[32.63%] h-[67.37%]"
          ></div>
          <svg
            class="w-[21.88px] h-6 absolute left-[422.21px] top-[57px] overflow-visible"
            style=""
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.34181 9.09L11.5272 13.67L15.7126 9.09L16.9983 10.5L11.5272 16.5L6.05609 10.5L7.34181 9.09Z"
              fill="#B3B3B3"
            />
          </svg>

          <div
            class="text-suburbanblack text-left absolute right-[60.17%] left-[2.83%] w-[37%] top-[calc(50%_-_-5px)]"
            style="
              font:
                400 16px 'SourceSansPro-Regular',
                sans-serif;
            "
          >
            Theft/Vandalism
          </div>
        </div>
      </div>
    </div>
    <div class="sticky left-[257px] top-0">
      <div
        class="bg-[#ffffff] w-[1183px] h-[102px] absolute left-[257px] top-0"
        style="box-shadow: 1px 4px 17px 0px rgba(34, 41, 46, 0.06)"
      ></div>
      <div class="flex flex-row gap-6 items-center justify-start absolute left-[1109px] top-[27px]">
        <div class="items-start self-stretch flex justify-between gap-5 max-md:justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41db3185-1aed-45c3-97ad-f5fb97b2e510?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&"
            class="aspect-[0.94] object-contain object-center w-[30px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          /><img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a3972bf-9ea4-4b66-9131-d00b08a30a43?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&"
            class="aspect-square object-contain object-center w-12 overflow-hidden self-stretch shrink-0 max-w-full"
          />
          <div class="text-gray-900 text-lg font-bold leading-5 self-center my-auto">
            Victor Ade
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c6002c-2554-4ae7-89b3-33923c360bba?apiKey=64be219f8a0a459a8ea2ec06f85b54f6&"
            class="aspect-square object-contain object-center w-[33px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
      <div
        class="text-[#000000] text-left absolute left-[335px] top-[46px]"
        style="
          font:
            700 25px 'Roboto-Bold',
            sans-serif;
        "
      >
        Obligations
      </div>
    </div>

    <div class="sticky left-0 top-0">
      <div
        class="bg-[#262324] w-[290px] h-[1275px] absolute left-0 top-0"
        style="box-shadow: 6px 0px 17px 0px rgba(34, 41, 46, 0.06)"
      ></div>
      <div
        class="bg-[#ffffff] rounded-[10px] w-[262px] h-14 absolute left-3.5 top-[372px]"
        style="opacity: 0.11999999731779099"
      ></div>
      <div
        class="flex flex-row gap-0 items-start justify-start absolute left-[229px] top-[221px]"
        style="transform-origin: 0 0; transform: rotate(-90deg) scale(1, 1)"
      >
        <div
          class="rounded-tl-md rounded-bl-md p-1 flex flex-row gap-0 items-start justify-start shrink-0 w-7 h-7 relative"
        ></div>
      </div>
      <div class="w-[138.16px] h-[261px] static">
        <div
          class="flex flex-col gap-[21px] items-start justify-start absolute left-12 top-[195px]"
        >
          <div class="shrink-0 w-[138.16px] h-[171px] static">
            <div class="flex flex-col gap-[25px] items-start justify-start absolute left-0 top-0">
              <div class="flex flex-row gap-[15px] items-center justify-center shrink-0 relative">
                <div class="shrink-0 w-[22.16px] h-[22.16px] static">
                  <div
                    class="flex flex-row gap-[9.23px] items-start justify-start w-[22.16px] h-[22.16px] absolute left-0 top-[0.92px]"
                  >
                    <svg
                      class="shrink-0 w-[22.16px] h-[22.16px] relative overflow-visible"
                      style=""
                      width="23"
                      height="24"
                      viewBox="0 0 23 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8525 10.9843V4.70535C19.8525 3.32029 19.2616 2.76627 17.7934 2.76627H14.063C12.5948 2.76627 12.0038 3.32029 12.0038 4.70535V10.9843C12.0038 12.3694 12.5948 12.9234 14.063 12.9234H17.7934C19.2616 12.9234 19.8525 12.3694 19.8525 10.9843Z"
                        fill="white"
                      />
                      <path
                        d="M10.1572 13.0157V19.2947C10.1572 20.6797 9.5662 21.2338 8.09803 21.2338H4.3676C2.89943 21.2338 2.30847 20.6797 2.30847 19.2947V13.0157C2.30847 11.6307 2.89943 11.0766 4.3676 11.0766H8.09803C9.5662 11.0766 10.1572 11.6307 10.1572 13.0157Z"
                        fill="white"
                      />
                      <path
                        d="M19.8525 19.2947V16.7092C19.8525 15.3242 19.2616 14.7701 17.7934 14.7701H14.063C12.5948 14.7701 12.0038 15.3242 12.0038 16.7092V19.2947C12.0038 20.6797 12.5948 21.2338 14.063 21.2338H17.7934C19.2616 21.2338 19.8525 20.6797 19.8525 19.2947Z"
                        fill="white"
                      />
                      <path
                        d="M10.1572 7.2908V4.70535C10.1572 3.32029 9.5662 2.76627 8.09803 2.76627H4.3676C2.89943 2.76627 2.30847 3.32029 2.30847 4.70535V7.2908C2.30847 8.67587 2.89943 9.22989 4.3676 9.22989H8.09803C9.5662 9.22989 10.1572 8.67587 10.1572 7.2908Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div
                    class="flex flex-row gap-[8.53px] items-start justify-start w-[20.46px] h-[20.46px] absolute left-[0.92px] top-[0.92px]"
                    style="opacity: 0.20000000298023224; filter: blur(13.61px)"
                  >
                    <svg
                      class="shrink-0 w-[20.46px] h-[20.46px] relative overflow-visible"
                      style=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.2547 10.2131V4.41526C19.2547 3.13633 18.709 2.62476 17.3534 2.62476H13.9088C12.5531 2.62476 12.0074 3.13633 12.0074 4.41526V10.2131C12.0074 11.492 12.5531 12.0036 13.9088 12.0036H17.3534C18.709 12.0036 19.2547 11.492 19.2547 10.2131Z"
                        fill="white"
                      />
                      <path
                        d="M10.3023 12.0888V17.8867C10.3023 19.1656 9.7566 19.6772 8.40093 19.6772H4.95634C3.60067 19.6772 3.05499 19.1656 3.05499 17.8867V12.0888C3.05499 10.8099 3.60067 10.2983 4.95634 10.2983H8.40093C9.7566 10.2983 10.3023 10.8099 10.3023 12.0888Z"
                        fill="white"
                      />
                      <path
                        d="M19.2547 17.8867V15.4993C19.2547 14.2204 18.709 13.7088 17.3534 13.7088H13.9088C12.5531 13.7088 12.0074 14.2204 12.0074 15.4993V17.8867C12.0074 19.1656 12.5531 19.6772 13.9088 19.6772H17.3534C18.709 19.6772 19.2547 19.1656 19.2547 17.8867Z"
                        fill="white"
                      />
                      <path
                        d="M10.3023 6.8026V4.41526C10.3023 3.13633 9.7566 2.62476 8.40093 2.62476H4.95634C3.60067 2.62476 3.05499 3.13633 3.05499 4.41526V6.8026C3.05499 8.08153 3.60067 8.5931 4.95634 8.5931H8.40093C9.7566 8.5931 10.3023 8.08153 10.3023 6.8026Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  class="text-[#ffffff] text-center relative"
                  style="
                    font:
                      700 16px/24px 'Roboto-Bold',
                      sans-serif;
                  "
                >
                  My Workplace
                </div>
              </div>
              <div
                class="pl-[39px] flex flex-row gap-[15px] items-center justify-center shrink-0 relative"
              >
                <div
                  class="text-icons text-center relative"
                  style="
                    font:
                      400 16px/24px 'Roboto-Regular',
                      sans-serif;
                  "
                >
                  Reports
                </div>
              </div>
              <div
                class="pl-[39px] flex flex-row gap-[15px] items-center justify-center shrink-0 relative"
              >
                <div
                  class="text-greytext text-center relative"
                  style="
                    font:
                      400 16px/24px 'Roboto-Regular',
                      sans-serif;
                  "
                >
                  Collaboration
                </div>
              </div>
              <div
                class="pl-[39px] flex flex-row gap-[15px] items-center justify-center shrink-0 relative"
              >
                <div
                  class="text-[#b3b3b3] text-center relative"
                  style="
                    font:
                      400 16px/24px 'Roboto-Regular',
                      sans-serif;
                  "
                >
                  Requests
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-row gap-[15px] items-center justify-center shrink-0 relative">
            <svg
              class="shrink-0 w-6 h-6 relative overflow-visible"
              style=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1115 6.74974L16.1115 6.74964C16.2036 5.50373 15.8146 4.37046 15.0422 3.53645C14.2791 2.71258 13.2081 2.24963 11.9999 2.24963C10.7811 2.24963 9.70676 2.71154 8.94981 3.52747L16.1115 6.74974ZM16.1115 6.74974C15.9217 9.32192 13.9865 11.2496 11.9999 11.2496C10.0128 11.2496 8.07486 9.32099 7.88797 6.74992L16.1115 6.74974ZM7.88795 6.74967C7.79668 5.48654 8.18553 4.3515 8.94976 3.52752L7.88795 6.74967Z"
                stroke="#B3B3B3"
                stroke-width="1.5"
              />
              <path
                d="M3.7499 21.7485V21.7486H20.2499V22.4986L20.2594 21.7486C20.364 21.75 20.4675 21.728 20.5624 21.6843C20.6574 21.6405 20.7414 21.5762 20.8083 21.496L20.809 21.4951C20.9592 21.3157 21.0376 21.0482 20.9828 20.7453L20.9827 20.7449C20.6251 18.761 19.5137 17.0905 17.7341 15.904L3.7499 21.7485ZM3.7499 21.7485L3.74015 21.7486M3.7499 21.7485L3.74015 21.7486M3.74015 21.7486C3.63564 21.75 3.53215 21.728 3.4372 21.6844C3.34226 21.6407 3.25824 21.5764 3.19126 21.4962L3.19078 21.4956M3.74015 21.7486L3.19078 21.4956M3.19078 21.4956C3.04063 21.3161 2.96224 21.0486 3.017 20.7458L3.01707 20.7454M3.19078 21.4956L3.01707 20.7454M3.01707 20.7454C3.37469 18.7615 4.48612 17.0909 6.26581 15.9039L3.01707 20.7454ZM6.26603 15.9038C7.85665 14.8439 9.89319 14.2486 11.9999 14.2486C14.1065 14.2486 16.1431 14.8443 17.7339 15.9039L6.26603 15.9038Z"
                stroke="#B3B3B3"
                stroke-width="1.5"
              />
            </svg>

            <div
              class="text-[#b3b3b3] text-center relative"
              style="
                font:
                  400 16px/24px 'Roboto-Regular',
                  sans-serif;
              "
            >
              Obligations
            </div>
          </div>
          <div class="flex flex-row gap-[15px] items-center justify-center shrink-0 relative">
            <svg
              class="shrink-0 w-6 h-6 relative overflow-visible"
              style=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1115 6.74974L16.1115 6.74964C16.2036 5.50373 15.8146 4.37046 15.0422 3.53645C14.2791 2.71258 13.2081 2.24963 11.9999 2.24963C10.7811 2.24963 9.70676 2.71154 8.94981 3.52747L16.1115 6.74974ZM16.1115 6.74974C15.9217 9.32192 13.9865 11.2496 11.9999 11.2496C10.0128 11.2496 8.07486 9.32099 7.88797 6.74992L16.1115 6.74974ZM7.88795 6.74967C7.79668 5.48654 8.18553 4.3515 8.94976 3.52752L7.88795 6.74967Z"
                stroke="#B3B3B3"
                stroke-width="1.5"
              />
              <path
                d="M3.7499 21.7485V21.7486H20.2499V22.4986L20.2594 21.7486C20.364 21.75 20.4675 21.728 20.5624 21.6843C20.6574 21.6406 20.7414 21.5762 20.8083 21.496L20.809 21.4952C20.9592 21.3157 21.0376 21.0482 20.9828 20.7453L20.9827 20.7449C20.6251 18.761 19.5137 17.0905 17.7341 15.904L3.7499 21.7485ZM3.7499 21.7485L3.74015 21.7486M3.7499 21.7485L3.74015 21.7486M3.74015 21.7486C3.63564 21.75 3.53215 21.728 3.4372 21.6844C3.34226 21.6407 3.25824 21.5764 3.19126 21.4962L3.19078 21.4956M3.74015 21.7486L3.19078 21.4956M3.19078 21.4956C3.04063 21.3161 2.96224 21.0486 3.017 20.7458L3.01707 20.7454M3.19078 21.4956L3.01707 20.7454M3.01707 20.7454C3.37469 18.7615 4.48612 17.0909 6.26581 15.9039L3.01707 20.7454ZM6.26603 15.9038C7.85665 14.8439 9.89319 14.2486 11.9999 14.2486C14.1065 14.2486 16.1431 14.8443 17.7339 15.9039L6.26603 15.9038Z"
                stroke="#B3B3B3"
                stroke-width="1.5"
              />
            </svg>

            <div
              class="text-greytext text-center relative"
              style="
                font:
                  400 16px/24px 'Roboto-Regular',
                  sans-serif;
              "
            >
              Help Center
            </div>
          </div>
        </div>
      </div>
      <img class="w-[194px] h-6 absolute left-[48.5px] top-[88.57px]" src="legend-rev-11.png" />
      <div
        class="text-[#b3b3b3] text-center absolute left-[91px] top-[131px]"
        style="
          font:
            400 15px 'Roboto-Regular',
            sans-serif;
          opacity: 0.4000000059604645;
        "
      >
        Fiber Technician
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/tailwind.css'
export default {
  name: 'FaultResolutionReport',
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {}
  }
}
</script>
<style scoped></style>
