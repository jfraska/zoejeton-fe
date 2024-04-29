"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLenis } from "@studio-freight/react-lenis";
import { Gunterz, Radwave } from "@/styles/fonts";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const params = {
  style: {
    "--swiper-pagination-color": "#fff",
    "--swiper-pagination-bullet-inactive-color": "transparent",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "10px",
  },
  modules: [Pagination, Controller, Autoplay],
  initialSlide: 0,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  effect: "slide",
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
};

export default function Hero() {
  const bgRef = useRef(null);
  const [carouselBackground, setCarouselBackground] = useState(null);
  const lenis = useLenis();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx;
    ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bgRef.current,
          start: "10% top",
          end: "+=75%",
          scrub: true,
          // markers: true,
        },
      });
      gsap.set(bgRef.current, { opacity: 1 });
      tl.to(bgRef.current, { opacity: 0 });
    }, bgRef);

    return () => {
      ctx && ctx.revert();
    };
  });

  return (
    <section className="relative w-full h-screen hidden md:block" id="beranda">
      <div className="fixed inset-0" ref={bgRef}>
        <Swiper
          initialSlide={0}
          modules={[Controller]}
          loop
          onSwiper={setCarouselBackground}
          effect="slide"
          spaceBetween={0}
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

      <Swiper {...params} controller={{ control: carouselBackground }}>
        <SwiperSlide>
          <div className="absolute z-10 px-[8%] text-center inset-x-0 bottom-[35%] md:bottom-[30%]">
            <div className="flex flex-col font-title uppercase text-3xl md:text-6xl cursor-default">
              <h1 className="text-slate-100 leading-[0.8]">
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
            <div className="cursor-default">
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
            <div className="relative md:w-5/6 w-11/12 flex justify-center items-center">
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
                className={`absolute inset-0 flex md:mb-0 mb-1 justify-center items-center xl:text-[150px] md:text-8xl text-5xl text-white leading-tight ${Radwave.className}`}
              >
                Catalogue
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <div className="hidden md:block swiper-pagination" />
      </Swiper>

      <div className="absolute z-10 w-full flex flex-col items-center gap-2 md:text-start md:w-fit md:bottom-[5%] bottom-[15%] md:right-[3%] text-lg text-white">
        <button className="text-sm" onClick={() => lenis.scrollTo("#about")}>
          Scroll
        </button>
        <span
          className="block md:hidden w-3 aspect-square icon-[uim--triangle]"
          style={{ color: "white", transform: "rotate(180deg)" }}
        />
      </div>
    </section>
  );
}
