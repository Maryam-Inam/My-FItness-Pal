import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { StarIcon } from "@heroicons/react/solid";
import CarouselBanner from "./CarouselBanner";
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
      <section
        style={{ height: 650 }}
        className=" bg-theme_blue-light relative bg-gradient-to-tr from-purple-400 via-blue-500/60 to-transparent bottom-0"
      ></section>
      <CarouselBanner />
    </div>
  );
}

export default Banners;
