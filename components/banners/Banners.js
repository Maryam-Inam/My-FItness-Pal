import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";
function Banners() {
  // const msgs = [
  //   "Good for tracking calories and macros with a huge database of food.",
  //   "Helped me get moving on my goals and tracking my weight loss and bodybuilding.",
  //   "Can’t lose weight and stay on track without it.",
  //   "Love this app. It keeps me on track with my nutritional goals.",
  //   "Friendly, easy-to-use app that keeps me accountable.",
  //   "Not only are the tools super helpful, the customer service is insanely awesome!",
  // ];
  return (
    <section>
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <Banner4 />
    </section>
  );
}

export default Banners;
