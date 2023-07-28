import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { StarIcon } from "@heroicons/react/solid";
function CarouselBanner() {
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
          >
            <div>
              <p>
                “Good for tracking calories and macros with a huge database of
                food.”
              </p>
              <p>lain M.</p>
            </div>
            <div>
              <p>
                “Helped me get moving on my goals and tracking my weight loss
                and bodybuilding.”
              </p>
              <p>lain M.</p>
            </div>
            <div>
              <p>“Can’t lose weight and stay on track without it.”</p>
              <p>lain M.</p>
            </div>
            <div>
              <p>
                “Love this app. It keeps me on track with my nutritional goals.”
              </p>
              <p>lain M.</p>
            </div>
            <div>
              <p>“Friendly, easy-to-use app that keeps me accountable.”</p>
              <p>lain M.</p>
            </div>
            <div>
              <p>
                “Not only are the tools super helpful, the customer service is
                insanely awesome.”
              </p>
              <p>lain M.</p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default CarouselBanner;
