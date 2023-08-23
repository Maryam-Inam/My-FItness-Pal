import Image from "next/image";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

function Banner5() {
  return (
    <div className=" bg-theme_blue-light rounded-3xl mx-4 py-20 px-20 bg-gradient-to-tr from-purple-400 via-blue-500/0 to-transparent bottom-0 lg:mx-0 h-[490px] lg:rounded-none lg:py-24">
      <div className="flex flex-col items-center space-y-4 lg:space-y-8 max-w-[340px] mx-auto lg:max-w-max justify-between">
        <Image
          alt=""
          src="https://www.myfitnesspal.com/_next/static/media/food-plan.3b9035b7.svg"
          height={42}
          width={42}
        />
        <p className="text-white font-semibold text-6xl text-center lg:text-7xl">
          If it’s edible, it’s in here
        </p>
        <p className="text-gray-100  text-3xl text-center">
          Food tracking app with 18 million global foods
        </p>
        <button className="flex text-gray-200 text-xl hover:underline ">
          <span>Search food calories</span>
          <ChevronRightIcon className="h-7" />
        </button>
      </div>
    </div>
  );
}

export default Banner5;
