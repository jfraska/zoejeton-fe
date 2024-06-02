"use client";
import { useRef } from "react";
import Link from "next/link";
import TransitionLink from "../UI/TransitionLink";

export default function About() {
  return (
    <section className="relative w-full px-[3%] pb-16" id="about">
      <div className="hidden md:block w-full mt-2 border-b border-black" />
      <p className="mt-8 md:w-3/4 w-10/12 md:text-xl text-base">
        HERE ARE SOME BEAUTIFUL PROJECTS SHOWCASING OUR WEDDING INVITATIONS YOU
        CAN EXPLORE OUR INSPIRATION SECTION, AND PLEASE DON'T HESITATE TO SHARE
        YOUR WEDDING INVITATION PROJECTS WITH US TO GET FEATURED.
      </p>

      <div
        id="paralax-statue"
        className="relative mx-auto mb-14 mt-10 flex md:w-2/3 w-11/12"
      >
        <div className="w-full h-[400px] bg-[#000000] rounded-lg overflow-hidden"></div>
        <div className="relative md:block hidden w-16">
          <div className="top-right top-0 right-0">
            <h1 className="text-6xl text-white md:text-black font-serif uppercase vertical whitespace-nowrap">
              premium
            </h1>
          </div>
        </div>
      </div>

      <div className="md:ml-auto md:mr-0 mx-auto flex md:flex-row flex-col-reverse items-end gap-4 md:w-[60%] w-11/12">
        <div className="w-full">
          <TransitionLink
            href="/about"
            className="flex hover-underline-animation w-full  py-2 pr-1  items-end justify-between"
          >
            <h1 className="md:text-base text-sm text-black">More About Us</h1>
            <span
              className="w-5 aspect-square icon-[carbon--arrow-up]"
              style={{ color: "black", transform: "rotate(90deg)" }}
            />
          </TransitionLink>
        </div>
        <div className="w-full">
          <p className="text-sm mb-5 md:text-left text-justify">
            New to our fonts? Be sure to check out our Font Starter Pack. You
            get 44 typefaces with a total of 567 weights ● That’s 233 extra
            weights.
          </p>
          <Link
            href={
              "https://www.instagram.com/zoejeton?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
            target="_blank"
            className="flex hover-underline-animation w-full py-2 pr-1 items-end justify-between"
          >
            <h1 className="md:text-base text-sm text-black">Instagram</h1>
            <span
              className="w-5 aspect-square icon-[carbon--arrow-up]"
              style={{ color: "black", transform: "rotate(90deg)" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
