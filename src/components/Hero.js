"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { motion, useAnimation } from "framer-motion";
import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Statue from "./canvas/Statue";

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

export default function Hero() {
  const { scroll } = useLocomotiveScroll();
  const ref = useRef(null);
  const controls = useAnimation();
  const [carouselBackground, setCarouselBackground] = useState(null);
  const [carouselMain, setCarouselMain] = useState(null);

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (args) => {
        controls.start({ opacity: 1 - args.scroll.y / 600 });
      });
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]);

  return (
    <section
      data-scroll-section
      className="relative w-full h-screen"
      id="beranda"
      ref={ref}
    >
      <div className="carousel_sticky-area" id="carousel-sticky-area" />
      <motion.div
        className="fixed inset-0"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#carousel-sticky-area"
        data-scroll-call="noShrinkTop"
        data-scroll-repeat
        data-scroll-position="top"
        initial={{ opacity: 1 }}
        animate={controls}
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
      </motion.div>

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
        className="absolute w-full flex flex-col items-center gap-2 md:text-start md:w-fit bottom-[5%] md:bottom-[8%] md:right-[3%] text-lg text-white"
      >
        <h1>(Scroll)</h1>
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
