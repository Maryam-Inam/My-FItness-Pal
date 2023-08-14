import React from "react";

function LowerHeader() {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
      className="lg:px-44 flex space-x-2 p-2 backdrop-blur-xl whitespace-nowrap"
    >
      <button className=" bg-theme_blue-light px-1 md:px-4 rounded-full my-2 text-xs lg:text-base text-white font-bold hover:bg-theme_blue">
        Reviews
      </button>
      <button className=" text-theme_blue-light px-1 md:px-4 py-1 rounded-full my-2 text-xs md:text-base bg-white border-2 border-theme_blue-light font-bold hover:bg-theme_blue hover:text-white">
        How It Works
      </button>
      <button className=" text-theme_blue-light px-1 md:px-4 py-1 rounded-full my-2 text-xs md:text-base bg-white border-2 border-theme_blue-light font-bold hover:bg-theme_blue hover:text-white">
        Apps
      </button>
      <button className=" text-theme_blue-light px-1 md:px-4 py-1 rounded-full my-2 text-xs md:text-base bg-white border-2 border-theme_blue-light font-bold hover:bg-theme_blue hover:text-white">
        Our Philosophy
      </button>
    </div>
  );
}

export default LowerHeader;
