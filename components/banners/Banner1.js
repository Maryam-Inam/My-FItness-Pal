import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";

function Banner1() {
  return (
    <div className=" bg-theme_blue-light relative bg-gradient-to-tr from-purple-400 via-blue-500/0 to-transparent bottom-0 ">
      <div className="flex justify-between items-center p-2 lg:px-44 ">
        <p className="font-semibold text-white text-2xl lg:text-3xl">
          myfitnesspal`
        </p>
        <p className="cursor-pointer">
          <Icon
            path={mdiAccountCircle}
            title="User Profile"
            size={1.4}
            color="white"
          />
        </p>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row px-16 space-x-10 lg:pr-40 lg:pl-44 lg:justify-start">
        <div className="flex flex-col items-center justify-center text-white lg:pt-20 pt-8 lg:items-start max-w-[300px] md:max-w-[400px] lg:max-w-max">
          <p className="text-bold text-blue-100">#1 nutrition tracking app</p>
          <h1 className="flex flex-col text-center text-5xl pt-2  lg:max-w-[700px] lg:text-left lg:text-7xl">
            <span className="text-bold font-sans">
              Reach your goals
              <span className=" font-normal"> with MyFitnessPal</span>
            </span>
          </h1>
          <p className="pt-8 md:max-w-[300px] lg:max-w-[500px] xs:max-w-[600px] text-center text-base">
            Build healthy habits with the all-in-one food, exercise, and calorie
            tracker.
          </p>
          <button className="flex items-center rounded-full bg-white text-theme_blue-light px-12 py-3 mt-8 hover:bg-blue-100">
            <span className="px-2 font-bold text-base">START TODAY</span>
            <ChevronRightIcon className="h-6" />
          </button>
        </div>
        {/* image */}
        <div className="pt-12 text-center">
          <Image
            src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Flogged-out-v2%2Fhero-phone-large.png&w=320&q=75"
            alt=""
            width={380}
            height={550}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner1;
