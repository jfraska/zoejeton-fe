"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Icon } from "@iconify/react";
import { feature } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Feature() {
  const { scroll } = useLocomotiveScroll();
  const ref = useRef(null);

  useEffect(() => {
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
        pinType: element.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.refresh();
    }

    ctx = gsap.context(() => {
      // const panels = gsap.utils.toArray("#panels-container");
      gsap.to(ref.current, {
        // xPercent: -100 * (ref.current.offsetWidth - 1),
        x: "-75%",
        scrollTrigger: {
          trigger: ref.current,
          scroller: scroll?.el,
          start: "top top",
          end: "top -200%",
          scrub: 1,
          pin: true,
          markers: true,
        },
      });
    }, ref);

    return () => ctx && ctx.revert();
  }, [scroll]);

  return (
    <section
      data-scroll-section
      className="relative flex overflow-hidden h-screen"
      id="feature"
    >
      <div
        ref={ref}
        data-scroll
        data-scroll-speed="-10"
        data-scroll-target="#feature"
        id="panels-container"
        className="relative h-full flex flex-nowrap bg-[#121212]"
      >
        <h1 className="absolute text-white -left-6 top-1/3 font-serif text-5xl leading-none">
          Feature
        </h1>

        <h1 className="absolute bottom-1/4 -right-20 font-serif text-white text-6xl leading-none">
          Premium
        </h1>

        <div
          className="w-[1200px]"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/collection/2091539/1000x300')",
          }}
        />
        <div
          className="w-[1200px]"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/collection/2091539/1000x200')",
          }}
        />
        <div
          className="w-[1200px]"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/collection/2091539/1000x100')",
          }}
        />
      </div>

      {/* <div className="flex mt-10 w-full items-center">
        <div className="w-[40%]">
          <div className="w-[50%] m-auto">
            <h1 className="text-4xl">Feature</h1>
            <h2 className="font-bold text-4xl">Premium</h2>
            <p className="text-sm">
              Our seamless and stylish digital wedding invitations are designed
              to make your special moments even more memorable. With us, you'll
              discover an eco-friendly and user-friendly solution that can also
              be customized to reflect your unique style and love story.
            </p>
          </div>
        </div>

        <div className="w-[60%]">
          <div
            data-scroll
            data-scroll-speed="1"
            data-scroll-target="#feature"
            className="flex w-[70%] m-auto flex-col bg-[#013A81] p-4 justify-start items-center text-white rounded-lg"
          >
            {feature.map((e) => (
              <div
                key={e.id}
                className="flex w-full py-2 pr-2 border-b border-white m-2 items-end justify-between"
              >
                <h1 className="text-xl leading-tight">
                  {e.title} <br />
                  <span className="text-base">{e.desc}</span>
                </h1>
                <Icon icon="iconoir:arrow-bl" color="white" width="30" />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
