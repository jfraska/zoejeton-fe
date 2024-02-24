"use client";
import "./style.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { LocomotiveScrollProvider as GlobalScroll } from "react-locomotive-scroll";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Feature from "@/components/Feature";
// import Pricing from "@/components/Pricing";
import ScrollVelocity from "@/components/ScrollVelocity";
import Katalog from "@/components/Katalog";
import Footer from "@/components/Footer";
import Message from "@/components/Message";
import Preloader from "@/components/Preloader";

const settings = {
  options: {
    // el: "smooth-scroll",
    smooth: true,
    multiplier: 0.8,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
    class: "is-reveal",
  },
  onLocationChange: (scroll) =>
    scroll.scrollTo(0, { duration: 0, disableLerp: true }),
};

export default function Home() {
  const scrollWrapper = useRef(null);
  const { asPath } = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <GlobalScroll
      {...settings}
      // watch={[]}
      location={asPath}
      containerRef={scrollWrapper}
    >
      <Navbar />
      <main data-scroll-container id="smooth-scroll" ref={scrollWrapper}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Hero />
        <About />
        <Feature />
        <ScrollVelocity />
        <Katalog />
        {/* <Pricing /> */}
        <Message />
        <Footer />
      </main>
    </GlobalScroll>
  );
}
