"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "10px",
  },
  modules: [Parallax, Pagination, Controller],
  initialSlide: 0,
  slidesPerView: 1,
  loop: true,
  parallax: true,
  speed: 800,
  // spaceBetween: 0,
  effect: "slide",
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
};

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { scroll } = useLocomotiveScroll();
  const bgRef = useRef(null);
  const trigerRef = useRef(null);
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
            start: "10% top",
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
          className="bg-black"
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
            <div className="absolute inset-0 bg-black border-none" />
            <Statue />
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
          <div className="absolute z-10 m-auto px-[8%] text-center inset-x-0 bottom-[35%] md:bottom-[30%]">
            <div
              data-scroll
              data-scroll-target="#beranda"
              data-scroll-speed="2.5"
              // data-scroll-position="top"
              className="flex flex-col font-serif uppercase text-3xl md:text-6xl cursor-default"
            >
              <h1
                data-swiper-parallax="-300"
                className="text-slate-100 leading-[0.8]"
              >
                Premium Invitation
              </h1>
              <h1
                data-swiper-parallax="200"
                className="text-slate-100 leading-[0.8]"
              >
                Premium Invitation
              </h1>
              <h1
                data-swiper-parallax="-200"
                className="text-slate-100 leading-[0.8]"
              >
                Premium Invitation
              </h1>
            </div>
            <br />
            <div
              data-scroll
              data-scroll-target="#beranda"
              data-scroll-speed="1"
              data-swiper-parallax="-100"
              className="cursor-default"
            >
              <p className="text-base md:text-xl text-slate-100">
                Welcome to the future of event invitations!
              </p>
              <p className="text-base md:text-xl text-slate-100">
                We specialize in delivering digital elegance right to your
                fingertips.
              </p>
            </div>
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
          data-scroll-speed="3"
          data-scroll-position="top"
          className="hidden md:block swiper-pagination"
        ></div>
      </Swiper>
      <div
        data-scroll
        data-scroll-target="#beranda"
        data-scroll-speed="3"
        data-scroll-position="top"
        className="absolute z-10 w-full flex flex-col items-center gap-2 md:text-start md:w-fit bottom-[5%] md:right-[3%] text-lg text-white"
      >
        <button className="text-sm" onClick={() => scroll.scrollTo("#about")}>
          Scroll
        </button>
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
