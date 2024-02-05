"use client";
// import "./style.css";
// import "locomotive-scroll/dist/locomotive-scroll.css";

import { useEffect, useRef } from "react";
import {
  LocomotiveScrollProvider as Scroll,
  useLocomotiveScroll,
} from "react-locomotive-scroll";

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
    smooth: true,
    multiplier: 0.8,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  },
  // onLocationChange: (scroll) =>
  //   scroll.scrollTo(0, { duration: 0, disableLerp: true }),
};

export default function Home() {
  const containerRef = useRef(null);
  // const { scroll } = useLocomotiveScroll();

  // useEffect(() => {
  //   if (scroll) {
  //     scroll.on("scroll", () => {
  //       ScrollTrigger.update();
  //     });

  //     ScrollTrigger.scrollerProxy(scrollEl, {
  //       scrollTop(value) {
  //         return arguments.length
  //           ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
  //           : scroll.scroll.instance.scroll.y;
  //       },
  //       scrollLeft(value) {
  //         return arguments.length
  //           ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
  //           : scroll.scroll.instance.scroll.x;
  //       },
  //     });

  //     const lsUpdate = () => {
  //       if (scroll) {
  //         scroll.update();
  //       }
  //     };

  //     ScrollTrigger.addEventListener("refresh", lsUpdate);
  //     ScrollTrigger.refresh();
  //   }

  //   return () => {
  //     if (scroll) {
  //       ScrollTrigger.removeEventListener("refresh", lsUpdate);
  //       scroll.destroy();
  //       console.log("Kill", scroll);
  //     }
  //   };
  // }, [scroll]);

  return (
    <Scroll {...settings} containerRef={containerRef}>
      {/* <Navbar /> */}
      <div data-scroll-container ref={containerRef}>
        <Hero />
        <About />
        <Feature />
        <ScrollVelocity />
        <Template />
        {/* <Pricing /> */}
        <Message />
        <Footer />
      </div>
    </Scroll>
  );
}
