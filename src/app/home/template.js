"use client";

import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { LocomotiveScrollProvider as GlobalScroll } from "react-locomotive-scroll";
import { usePathname, useRouter } from "next/navigation";
import { animatePageIn } from "@/utils/animations";
import Navbar from "@/components/Navbar";

export default function Template({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const scrollWrapper = useRef(null);
  const pathname = usePathname();
  const route = useRouter();

  useEffect(() => {
    animatePageIn();
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div
        id="banner"
        className={`${
          isLoading ? "hidden" : "fixed"
        } min-h-screen bg-white inset-0 w-full z-[99]`}
      />

      <GlobalScroll
        options={{
          smooth: true,
          multiplier: 0.8,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        watch={[route, pathname]}
        location={pathname}
        containerRef={scrollWrapper}
        onLocationChange={(scroll) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
        onUpdate={() => route.refresh()}
      >
        <Navbar />
        <div data-scroll-container ref={scrollWrapper}>
          {children}
        </div>
      </GlobalScroll>
    </>
  );
}
