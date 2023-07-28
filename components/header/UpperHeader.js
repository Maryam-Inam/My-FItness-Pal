import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
function UpperHeader() {
  return (
    <div className="hidden md:flex justify-between items-center p-2 bg-white lg:px-44 ">
      <h2
        style={{
          fontFamily: "sans-serif",
          fontSize: 28,
          lineHeight: 1.5,
        }}
        className="font-bold text-theme_blue-light "
      >
        myfitnesspal`
      </h2>
      <p className=" flex rounded-full bg-theme_blue-light text-blue-100 px-2 font-extrabold items-center cursor-pointer hover:bg-theme_blue">
        <span className=" text-xs px-2 my-2">START TODAY</span>
        <ChevronRightIcon className="h-8 w-5" />
      </p>
    </div>
  );
}

export default UpperHeader;
