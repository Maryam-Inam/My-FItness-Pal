import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { StarIcon } from "@heroicons/react/solid";
function CarouselBanner() {
  return (
    <section className="h-96 bg-gray-900 relative">
      <div className="flex flex-col p-20  items-center space-y-8">
        <div className="flex text-amber-300 ">
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
        </div>
        <div className="flex flex-col text-white font-bold text-4xl items-center space-y-2">
          <p>3.7 Million</p>
          <p>5-Star Reviews</p>
        </div>
        <div className="text-white ">
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
