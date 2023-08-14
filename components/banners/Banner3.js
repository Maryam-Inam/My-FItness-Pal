import React from "react";
import Image from "next/image";
function Banner3() {
  return (
    <div className="flex flex-col items-center mt-10 mb-40 mx-14 lg:my-24">
      <div className="flex flex-col items-center max-w-[300px] lg:max-w-max">
        <Image
          alt=""
          src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Flogged-out-v2%2Fflag.png&w=32&q=75"
          height={30}
          width={30}
        />
        <h1 className=" font-semibold  text-gray-800 mt-2 text-center text-4xl lg:text-5xl leading-10">
          Hit your health goals in 1-2-3
        </h1>
      </div>

      {/* overlapping images */}
      <div className="flex flex-col mt-10 relative lg:px-40">
        {/* 1st row (image and text) */}
        <div className="lg:flex">
          {/* text */}
          <div className="flex flex-col items-center space-y-4 lg:items-start lg:justify-center lg:order-2">
            <h1 className="text-6xl font-bold text-theme_blue-light lg:text-7xl">
              1
            </h1>
            <p className="text-3xl font-semibold text-gray-900 max-w-[240px] text-center md:max-w-md lg:max-w-[280px] lg:text-left lg:text-4xl">
              Track food, fitness & fasting
            </p>
            <p className="text-center text-gray-500 text-lg w-96 lg:text-left">
              Tracking calories and macros is easy with our barcode scanner and
              device integration.
            </p>
          </div>
          {/* image */}
          <div className="pt-6 mx-12 lg:order-1 lg:mx-0 lg:pr-14">
            <Image
              alt=""
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrack-food-large.92122bef.png&w=512&q=75"
              height={600}
              width={500}
              className="absolute rounded-3xl"
              objectFit="cover"
            />
          </div>
        </div>

        {/* 2nt row (image and text) */}
        <div className="lg:flex lg:mt-[-100px]">
          {/* text */}
          <div className="flex flex-col items-center space-y-4 lg:items-end lg:justify-center">
            <h1 className="text-6xl font-bold text-theme_blue-light lg:text-7xl">
              2
            </h1>
            <p className="text-3xl font-semibold text-gray-900 max-w-[240px] text-center md:max-w-md lg:max-w-[380px] lg:text-left lg:text-4xl">
              Learn what works
            </p>
            <p className=" text-center text-gray-500 text-lg w-[350px] lg:text-right">
              Personalized nutrition insights reveal whats working so you can
              make smarter choices.
            </p>
          </div>
          {/* image */}
          <div className="pt-6 mx-12 lg:mx-0 lg:px-14">
            <Image
              alt=""
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flearn-what-works-large.e541991a.png&w=512&q=75"
              height={600}
              width={500}
              className="absolute rounded-3xl"
              objectFit="cover"
            />
          </div>
        </div>

        {/* 3rt row (image and text) */}
        <div className="lg:flex lg:mt-[-100px]">
          {/* text */}
          <div className="flex flex-col items-center space-y-4 lg:items-start lg:justify-center lg:order-2">
            <h1 className="text-6xl font-bold text-theme_blue-light lg:text-7xl">
              3
            </h1>
            <p className="text-3xl font-semibold text-gray-900 max-w-[240px] text-center md:max-w-md lg:max-w-[280px] lg:text-left lg:text-4xl">
              Change your habits and reach your goals
            </p>
            <p className="text-center text-gray-500 text-lg w-96 lg:text-left">
              Now you have the tools and knowledge to build healthy habits for
              life.
            </p>
          </div>
          {/* image */}
          <div className="pt-6 mx-12 lg:order-1 lg:mx-0 lg:pr-14">
            <Image
              alt=""
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchange-your-habits-large.1cf58b0c.png&w=512&q=75"
              height={600}
              width={500}
              className="absolute rounded-3xl"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
