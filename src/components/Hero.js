"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";
import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Statue from "./Canvas/Statue";

const params = {
  style: {
    "--swiper-pagination-color": "#fff",
    "--swiper-pagination-bullet-inactive-color": "transparent",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "12px",
    "--swiper-pagination-bullet-horizontal-gap": "12px",
  },
  modules: [Parallax, Pagination, Controller],
  initialSlide: 0,
  slidesPerView: 1,
  loop: true,
  parallax: true,
  speed: 500,
  spaceBetween: 0,
  effect: "slide",
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
};

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { scroll } = useLocomotiveScroll();
  const ref = useRef(null);
  const bgRef = useRef(null);
  const trigerRef = useRef(null);
  const controls = useAnimation();
  const [carouselBackground, setCarouselBackground] = useState(null);
  const [carouselMain, setCarouselMain] = useState(null);

  useLayoutEffect(() => {
    let ctx;

    if (scroll) {
      const element = scroll?.el;
      scroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: trigerRef.current.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.defaults({
        scroller: scroll?.el,
      });

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigerRef.current,
            start: "20% top",
            end: "+=75%",
            scrub: true,
            // markers: true,
          },
        });
        gsap.set(bgRef.current, { opacity: 1 });
        tl.to(bgRef.current, { opacity: 0 });

        ScrollTrigger.refresh();
      }, bgRef);
    }

    return () => {
      if (scroll) {
        ctx && ctx.revert();
        ScrollTrigger.removeEventListener("refresh", () => scroll?.update());
        scroll.destroy();
        console.log("Kill", scroll);
      }
    };
  }, [scroll]);

  return (
    <section
      data-scroll-section
      className="relative w-full h-screen"
      id="beranda"
      ref={ref}
    >
      <div
        ref={trigerRef}
        className="carousel_sticky-area"
        id="carousel-sticky-area"
      />
      <div
        className="fixed inset-0"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#carousel-sticky-area"
        data-scroll-call="noShrinkTop"
        data-scroll-repeat
        data-scroll-position="top"
        ref={bgRef}
      >
        <Swiper
          initialSlide={0}
          loop
          modules={[Controller]}
          onSwiper={setCarouselBackground}
          controller={{ control: carouselMain }}
          id="carousel-wrapper"
        >
          <SwiperSlide>
            <div
              className="parallax-bg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/collection/2091539/1000x500')",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="parallax-bg "
              style={{
                backgroundColor: "#000000",
              }}
            >
              <Statue />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="parallax-bg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/collection/2091539/1000x400')",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <Swiper
        {...params}
        onSwiper={setCarouselMain}
        controller={{ control: carouselBackground }}
      >
        <SwiperSlide>
          <div
            data-scroll
            data-scroll-target="#beranda"
            data-scroll-speed="2.5"
            data-scroll-position="top"
            data-swiper-parallax="-200"
            className="absolute z-10 m-auto text-center inset-x-0 bottom-[40%] md:bottom-[30%]"
          >
            <div className="flex flex-col font-serif uppercase text-4xl md:text-6xl">
              <h1 className="text-slate-200 leading-[0.8]">
                Premium Invitation
              </h1>
              <h1 className="text-slate-100 leading-[0.8]">
                Premium Invitation
              </h1>
              <h1 className="text-slate-100 leading-[0.8]">
                Premium Invitation
              </h1>
            </div>
            <br />
            <p className="text-base md:text-xl text-slate-100">
              Welcome to the future of event invitations!
            </p>
            <p className="text-base md:text-xl text-slate-100">
              We specialize in delivering digital elegance right to your
              fingertips.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <div
          data-scroll
          data-scroll-target="#beranda"
          data-scroll-speed="2"
          data-scroll-position="top"
          className="hidden md:block swiper-pagination"
        ></div>
      </Swiper>
      <div
        data-scroll
        data-scroll-target="#beranda"
        data-scroll-speed="2"
        data-scroll-position="top"
        className="absolute z-10 w-full flex flex-col items-center gap-2 md:text-start md:w-fit bottom-[5%] md:bottom-[8%] md:right-[3%] text-lg text-white"
      >
        <button onClick={() => scroll.scrollTo("#about")}>(Scroll)</button>
        <Icon
          className="block md:hidden"
          icon="uim:triangle"
          color="white"
          width="15"
          vFlip={true}
        />
      </div>
    </section>
  );
}
