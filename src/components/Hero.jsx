"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Controller, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const radwave = localFont({
  src: "../assets/fonts/radwave/radwavefont-demo.woff",
});

const gunterz = localFont({
  src: "../assets/fonts/gunterz/gunterz-mediumitalic.woff",
});

const params = {
  style: {
    "--swiper-pagination-color": "#fff",
    "--swiper-pagination-bullet-inactive-color": "transparent",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "10px",
  },
  modules: [Parallax, Pagination, Controller, Autoplay],
  initialSlide: 0,
  slidesPerView: 1,
  loop: true,
  parallax: true,
  speed: 800,
  spaceBetween: 0,
  effect: "slide",
  autoplay: {
    delay: 8000,
    disableOnInteraction: true,
  },
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
        data-scroll-repeat
        data-scroll-position="top"
        ref={bgRef}
      >
        <Swiper
          initialSlide={0}
          modules={[Parallax, Controller]}
          loop
          onSwiper={setCarouselBackground}
          controller={{ control: carouselMain }}
          parallax={true}
          speed={800}
          effect="slide"
          spaceBetween={0}
          id="carousel-wrapper"
          className="bg-black"
        >
          <SwiperSlide>
            <div
              className="parallax-bg"
              style={{
                backgroundImage: "url('/assets/images/bg1.jpg')",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="parallax-bg"
              style={{
                backgroundImage: "url('/assets/images/bg2.jpg')",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="parallax-bg"
              style={{
                backgroundImage: "url('/assets/images/bg3.jpg')",
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
          <div className="absolute z-10 px-[8%] text-center inset-x-0 bottom-[35%] md:bottom-[30%]">
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
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <div
              data-scroll
              data-scroll-target="#beranda"
              data-scroll-speed="2.5"
              data-swiper-parallax="-300"
              className="relative md:w-5/6 w-11/12 flex justify-center items-center"
            >
              <div className="relative flex h-fit md:gap-16 gap-5">
                <h2
                  className="absolute -top-10 left-0 md:text-xl text-base
                  text-white"
                >
                  We specialize
                </h2>
                <div
                  className="aspect-square md:w-[15vw] w-[20vw] bg-white bg-cover"
                  style={{
                    backgroundImage: "url('/assets/images/tm1.jpg')",
                  }}
                ></div>
                <div
                  className="aspect-square md:w-[15vw] w-[20vw] bg-white bg-cover"
                  style={{
                    backgroundImage: "url('/assets/images/tm1.jpg')",
                  }}
                />
                <div
                  className="aspect-square md:w-[15vw] w-[20vw] bg-white bg-cover"
                  style={{
                    backgroundImage: "url('/assets/images/tm1.jpg')",
                  }}
                />
              </div>
              <h1
                data-scroll
                data-scroll-target="#beranda"
                data-scroll-speed="3"
                className={`absolute inset-0 flex md:mb-0 mb-1 justify-center items-center xl:text-[150px] md:text-8xl text-5xl text-white leading-tight ${radwave.className}`}
              >
                Catalogue
              </h1>
            </div>
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
        className="absolute z-10 w-full flex flex-col items-center gap-2 md:text-start md:w-fit md:bottom-[5%] bottom-[15%] md:right-[3%] text-lg text-white"
      >
        <button className="text-sm" onClick={() => scroll.scrollTo("#about")}>
          Scroll
        </button>
        <Icon
          className="block md:hidden"
          icon="uim:triangle"
          color="white"
          width="12"
          vFlip={true}
        />
      </div>
    </section>
  );
}
