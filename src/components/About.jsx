"use client";
import { Icon } from "@iconify/react";
import Statue from "./Canvas/Statue";

export default function About() {
  return (
    <section
      data-scroll-section
      className="relative w-full h-fit mb-16 px-[3%]"
      id="about"
    >
      <div className="w-full mt-2 border-b border-black" />
      {/* <h1 className="text-sm align-text-bottom  mt-2">
        <span className="text-lg">● &nbsp;</span>About Us
      </h1> */}
      <p className="mt-8 w-3/4 text-xl">
        HERE ARE SOME BEAUTIFUL PROJECTS SHOWCASING OUR WEDDING INVITATIONS YOU
        CAN EXPLORE OUR INSPIRATION SECTION, AND PLEASE DON'T HESITATE TO SHARE
        YOUR WEDDING INVITATION PROJECTS WITH US TO GET FEATURED.
      </p>

      <div className="mx-auto mb-16 mt-10 flex w-2/3">
        <div className="w-full h-[400px] bg-[#000000] rounded-lg">
          <Statue />
        </div>
        <div className="relative w-16">
          <div className="top-right">
            <h1 className="text-6xl font-serif uppercase content whitespace-nowrap">
              premium
            </h1>
          </div>
        </div>
      </div>

      <div className="ml-auto flex gap-4 w-[60%]">
        <div className="flex hover-underline-animation w-full border-b py-2 pr-1 border-black-200 items-end justify-between">
          <h1 className="text-base text-black">More About Us</h1>
          <Icon
            icon="carbon:arrow-up"
            className="text-black"
            width="20"
            rotate={1}
          />
        </div>
        <div className="w-full">
          <p className="text-sm mb-5">
            New to our fonts? Be sure to check out our Font Starter Pack. You
            get 44 typefaces with a total of 567 weights ● That’s 233 extra
            weights that are not available to try with the regular trial
            downloads including 18 versatile pro mockups.
          </p>
          <div className="flex hover-underline-animation w-full border-b py-2 pr-1 border-black-200 items-end justify-between">
            <h1 className="text-base text-black">Instagram</h1>
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
