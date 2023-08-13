import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { StarIcon } from "@heroicons/react/solid";
import Thumbnail from "./Thumbnail";
function CarouselBanner() {
  const quotes = [
    {
      text: "Good for tracking calories and macros with a huge database of food.",
      auth: "lain M.",
    },
    {
      text: "Helped me get moving on my goals and tracking my weight loss and bodybuilding.",
      auth: "Jason L.",
    },
    {
      text: "Can’t lose weight and stay on track without it.",
      auth: "Jennie S.",
    },
    {
      text: "Love this app. It keeps me on track with my nutritional goals.",
      auth: "Annette B.",
    },
    {
      text: "Friendly, easy-to-use app that keeps me accountable.",
      auth: "Dinah L.",
    },
    {
      text: "Not only are the tools super helpful, the customer service is insanely awesome!",
      auth: "Laura K.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const handleCarouselChange = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="h-108 bg-gray-900 relative">
      <div className="flex flex-col px-10 py-20  items-center space-y-8">
        <div className="flex text-amber-300 ">
          <StarIcon className="h-10 w-10" />
          <StarIcon className="h-10 w-10" />
          <StarIcon className="h-10 w-10" />
          <StarIcon className="h-10 w-10" />
          <StarIcon className="h-10 w-10" />
        </div>
        <div className=" text-white font-bold text-5xl">
          <p>
            3.7 Million 5-Star Reviews
            {/* <span>3.7 Million </span>
            <span>5-Star Reviews</span> */}
          </p>
        </div>
        <div className="text-white pt-2 text-2xl w-full h-32 ">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={true}
            showArrows={false}
            interval={5000}
            selectedItem={activeIndex}
            onChange={(index) => {
              setActiveIndex(index);
            }}
          >
            {quotes.map((quote) => (
              <div key={quote.auth}>
                <p>{`“${quote.text}”`}</p>
                <p>{quote.auth}</p>
              </div>
            ))}
          </Carousel>
          <div className="flex space-x-0">
            {quotes.map((quote, index) => (
              <Thumbnail
                key={quote.auth}
                onClick={() => handleCarouselChange(index)}
                active={activeIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarouselBanner;
