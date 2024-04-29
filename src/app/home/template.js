"use client";

import { useEffect, useRef, useState } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { animatePageIn } from "@/utils/animations";
import Navbar from "@/components/Navbar";
import gsap from "gsap";

export default function Template({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  useEffect(() => {
    animatePageIn();
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div
        id="transition"
        className={`${
          isLoading ? "hidden" : "fixed"
        } min-h-screen bg-white inset-0 w-full z-[99]`}
      />

      <Navbar />
      <ReactLenis
        root
        ref={lenisRef}
        autoRaf={false}
        options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
      >
        <main>{children}</main>
      </ReactLenis>
    </>
  );
}
