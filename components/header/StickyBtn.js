import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
function StickyBtn() {
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    setVisible(window.scrollY > 280);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    visible && (
      <div className="flex lg:hidden  items-center justify-center sticky bottom-6 z-50">
        <button
          className={`flex transition-all duration-200 ease-in rounded-full bg-theme_blue-light text-white px-14 py-3 space-x-2 font-bold items-center cursor-pointer hover:bg-theme_blue ${
            visible
              ? "opacity-100 transition-opacity duration-1000 ease-in"
              : "opacity-0"
          }`}
        >
          <span className=" text-lg  ">START TODAY</span>
          <ChevronRightIcon className=" h-10 w-6" />
        </button>
      </div>
    )
  );
}

export default StickyBtn;
