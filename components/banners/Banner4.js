import Image from "next/image";
import React from "react";

function Banner4() {
  return (
    <div className="flex flex-col justify-between items-center lg:flex-row bg-gray-900 mx-16 md:mx-[110px] rounded-3xl lg:mx-44 lg:pl-12 lg:pb-10 pt-8 lg:pt-12 mb-12 lg:mb-16">
      {/* text */}
      <div className="flex flex-col justify-center items-center max-w-[500px] lg:items-start">
        <p className="text-gray-500 font-semibold text-lg">
          35+ apps and devices
        </p>
        <h1
          className="text-gray-100 text-center text-2xl lg:text-5xl lg:text-left"
          style={{ fontWeight: "650" }}
        >
          Sync steps, weight, workouts & more
        </h1>
      </div>
      {/* image for large screen*/}
      <div className="hidden lg:flex">
        <Image
          alt=""
          src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Flogged-out-v2%2Fapp-integrations-large.png&w=512&q=75"
          width={600}
          height={370}
          objectFit="cover"
        />
      </div>
      {/* image for small screen */}
      <div className="lg:hidden pt-8 bottom-0">
        <Image
          alt=""
          src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Flogged-out-v2%2Fapp-integrations-small.png&w=640&q=75"
          width={642}
          height={660}
          objectFit="cover"
          fill
        />
      </div>
    </div>
  );
}

export default Banner4;
