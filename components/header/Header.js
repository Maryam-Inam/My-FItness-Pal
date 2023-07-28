import React, { useEffect, useState } from "react";
import UpperHeader from "./UpperHeader";
import LowerHeader from "./LowerHeader";

function Header() {
  const [isVisible, setVisible] = useState(false);
  const handleScroll = () => {
    setVisible(window.scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` ${
        isVisible
          ? "transition-all duration-5000 ease-in sticky top-0 z-50 "
          : "hidden"
      }`}
    >
      <UpperHeader />
      <LowerHeader />
    </header>
  );
}

export default Header;
