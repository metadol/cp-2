// useScrollAnimation.js
"use client";
import { useEffect, useState } from "react";

const useScrollAnimation = () => {
  const [showAnimations, setShowAnimations] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowAnimations(true);
      }
      setLastScrollY(currentScrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollY]);

  return showAnimations;
};

export default useScrollAnimation;
