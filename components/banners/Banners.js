import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { UserCircleIcon } from "@heroicons/react/solid";
import Icon from "@mdi/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { mdiAccount, mdiAccountCircle } from "@mdi/js";
import CarouselBanner from "./CarouselBanner";
import Image from "next/image";
function Banners() {
  const msgs = [
    "Good for tracking calories and macros with a huge database of food.",
    "Helped me get moving on my goals and tracking my weight loss and bodybuilding.",
    "Can’t lose weight and stay on track without it.",
    "Love this app. It keeps me on track with my nutritional goals.",
    "Friendly, easy-to-use app that keeps me accountable.",
    "Not only are the tools super helpful, the customer service is insanely awesome!",
  ];
  return (
    <div>
      <section className=" bg-theme_blue-light relative bg-gradient-to-tr from-purple-400 via-blue-500/0 to-transparent bottom-0 ">
        {/* header */}
        <div className="flex justify-between items-center p-2 lg:px-44 ">
          <h2
            style={{
              fontFamily: "sans-serif",
              fontSize: 28,
              lineHeight: 1.5,
            }}
            className="font-bold text-white"
          >
            myfitnesspal`
          </h2>
          <p className="cursor-pointer">
            <Icon
              path={mdiAccountCircle}
              title="User Profile"
              size={1.4}
              color="white"
            />
          </p>
        </div>

        {/* body */}
        <div className="flex flex-col items-center justify-center lg:flex-row px-28 space-x-10 lg:pr-40 lg:pl-44 lg:justify-start">
          <div className="flex flex-col items-center justify-center text-white lg:pt-20 pt-8 lg:items-start">
            <p className="text-bold text-blue-100">#1 nutrition tracking app</p>
            <h1 className="flex flex-col text-center items-center lg:text-left lg:text-7xl text-5xl leading-[55px] pt-2 md:max-w-[400px] lg:max-w-[700px]">
              <span className="text-bold font-sans">
                Reach your goals
                <span className=" font-normal"> with MyFitnessPal</span>
              </span>
            </h1>
            <p className="pt-8 md:max-w-[300px] lg:max-w-[500px] xs:max-w-[600px] text-center text-base">
              Build healthy habits with the all-in-one food, exercise, and
              calorie tracker.
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
      </section>
      <CarouselBanner />
    </div>
  );
}

export default Banners;
