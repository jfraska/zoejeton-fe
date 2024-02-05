"use client";
import { Icon } from "@iconify/react";
import { price } from "@/constants";

export default function Pricing() {
  return (
    <section
      data-scroll-section
      className="w-full h-screen px-[3%]"
      id="pricing"
    >
      <div className="w-full mt-2 border-b border-black" />
      <h1 className="text-base align-text-bottom  mt-2">
        <span className="text-xl">● &nbsp;</span>Pricing
      </h1>
      <p className="mt-8 ml-auto text-2xl max-w-4xl text-end">
        &emsp; HERE ARE SOME BEAUTIFUL PROJECTS SHOWCASING OUR WEDDING
        INVITATIONS ● YOU CAN EXPLORE OUR INSPIRATION SECTION, AND PLEASE DON'T
        HESITATE TO SHARE YOUR WEDDING INVITATION PROJECTS WITH US TO GET
        FEATURED.
      </p>

      <div className="flex mt-10 w-full justify-between items-center overflow-hidden">
        {price.map((e) => (
          <div
            key={e.id}
            className="relative w-[30%] h-[60vh] border border-black rounded-lg"
          >
            <div className="absolute bottom-4 left-4">
              <h1 className="text-lg font-medium">Coba</h1>
              <h1>Harga</h1>
            </div>
            <div className="absolute bottom-4 right-4">
              <Icon
                icon="carbon:arrow-up"
                color="black"
                width="30"
                rotate={1}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
