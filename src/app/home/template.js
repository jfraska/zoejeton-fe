"use client";

import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { LocomotiveScrollProvider as GlobalScroll } from "react-locomotive-scroll";
import { useRouter } from "next/navigation";
import { animatePageIn } from "@/utils/animations";

export default function Template({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const scrollWrapper = useRef(null);
  const { asPath } = useRouter();

  const settings = {
    options: {
      smooth: true,
      multiplier: 0.8,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    },
    location: { asPath },
    containerRef: { scrollWrapper },
    onLocationChange: (scroll) =>
      scroll.scrollTo(0, { duration: 0, disableLerp: true }),
  };

  useEffect(() => {
    animatePageIn();
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <GlobalScroll {...settings}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div
        id="banner"
        className={`${
          isLoading ? "hidden" : "fixed"
        } min-h-screen bg-white inset-0 w-full z-[99]`}
      />
      <div data-scroll-container ref={scrollWrapper}>
        {children}
      </div>
    </GlobalScroll>
  );
}
