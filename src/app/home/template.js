"use client";

import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { animatePageIn } from "@/libs/animations";
import Navbar from "@/components/pages/Navbar";
import gsap from "gsap";
import Footer from "@/components/pages/Footer";

export default function Template({ children }) {
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
    // animatePageIn();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <div
        id="transition"
        className="fixed min-h-screen bg-white inset-0 w-full z-[90]"
      /> */}

      <Navbar />

      <ReactLenis
        root
        ref={lenisRef}
        autoRaf={false}
        options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
      >
        <main>{children}</main>
      </ReactLenis>

      <Footer />
    </>
  );
}
