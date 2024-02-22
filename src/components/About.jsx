"use client";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import Statue from "./Statue";
import CursorProvider from "@/providers/CursorProvider";

export default function About() {
  const containerRef = useRef();

  return (
    <section
      data-scroll-section
      className="relative w-full h-fit mb-16 px-[3%]"
      id="about"
    >
      <div className="w-full mt-2 border-b border-black" />
      <p className="mt-8 w-3/4 md:text-xl text-lg">
        HERE ARE SOME BEAUTIFUL PROJECTS SHOWCASING OUR WEDDING INVITATIONS YOU
        CAN EXPLORE OUR INSPIRATION SECTION, AND PLEASE DON'T HESITATE TO SHARE
        YOUR WEDDING INVITATION PROJECTS WITH US TO GET FEATURED.
      </p>

      <div className="relative mx-auto mb-14 mt-10 flex md:w-2/3 w-full">
        <div
          className="w-full h-[400px] bg-[#000000] rounded-lg overflow-hidden"
          ref={containerRef}
        >
          <CursorProvider containerRef={containerRef}>
            <Statue />
          </CursorProvider>
        </div>
        <div className="relative md:block hidden w-16">
          <div className="top-right top-0 right-0">
            <h1 className="text-6xl text-white md:text-black font-serif uppercase vertical whitespace-nowrap">
              premium
            </h1>
          </div>
        </div>
      </div>

      <div className="ml-auto flex items-end gap-4 md:w-[60%] w-full">
        <div className="w-full">
          <a
            href="/about"
            className="flex hover-underline-animation w-full border-b py-2 pr-1 border-black-200 items-end justify-between"
          >
            <h1 className="md:text-base text-sm text-black">More About Us</h1>
            <Icon
              icon="carbon:arrow-up"
              className="text-black"
              width="20"
              rotate={1}
            />
          </a>
        </div>
        <div className="w-full">
          <p className="text-sm mb-5">
            New to our fonts? Be sure to check out our Font Starter Pack. You
            get 44 typefaces with a total of 567 weights ● That’s 233 extra
            weights.
          </p>
          <div className="flex hover-underline-animation w-full border-b py-2 pr-1 border-black-200 items-end justify-between">
            <h1 className="md:text-base text-sm text-black">Instagram</h1>
            <Icon
              icon="carbon:arrow-up"
              className="text-black"
              width="20"
              rotate={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
