"use client";
import "./style.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { LocomotiveScrollProvider as GlobalScroll } from "react-locomotive-scroll";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Feature from "@/components/Feature";
// import Pricing from "@/components/Pricing";
import ScrollVelocity from "@/components/ScrollVelocity";
import Template from "@/components/Template";
import Footer from "@/components/Footer";
import Message from "@/components/Message";

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

  return (
    <GlobalScroll
      {...settings}
      // watch={[]}
      location={asPath}
      containerRef={scrollWrapper}
    >
      <Navbar />
      <div data-scroll-container id="smooth-scroll" ref={scrollWrapper}>
        <Hero />
        <About />
        <Feature />
        <ScrollVelocity />
        <Template />
        {/* <Pricing /> */}
        <Message />
        <Footer />
      </div>
    </GlobalScroll>
  );
}
