"use client";

import { Icon } from "@iconify/react";
import { price } from "@/constants";
import Image from "next/image";

export default function AddOn() {
  return (
    <section data-scroll-section className="w-full pb-20 px-[3%]" id="add-on">
      <div className="w-full mt-2 border-b border-black" />
      <div className="flex justify-between items-center text-base mt-2 gap-10">
        <h1 className="w-2/5 text-3xl">Add-On</h1>
        <div className="w-3/5 flex justify-end md:justify-between items-center h-full">
          <h1 className="hidden md:block">litora torquent</h1>
          <button
            type="submit"
            className="flex px-1 md:text-base text-sm uppercase justify-center items-center border border-black rounded-full text-black"
          >
            add to cart
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start mt-10 gap-10">
        <div className="w-2/5 hidden md:block">
          <Image
            src={"/assets/images/bg1.jpg"}
            width={50}
            height={50}
            className="float-right w-3/5 aspect-square rounded-xl"
            alt="addon"
          />
        </div>
        <div className="md:w-3/5 w-full flex flex-col -mt-4">
          <div className="w-full flex justify-between items-center pr-2 py-4 border-b border-black">
            <div className="flex flex-col gap-2">
              <h1 className="leading-none text-lg">Guestbook</h1>
              <h1 className="leading-none text-sm">Lorem asjfnas</h1>
            </div>
            <button className="flex justify-center items-center">
              <Image
                src={"/assets/icons/cart-black.svg"}
                width={20}
                height={20}
                className="aspect-square"
                alt="cart"
              />
            </button>
          </div>

          <div className="w-full flex justify-between items-center pr-2 py-4 border-b border-black">
            <div className="flex flex-col gap-2">
              <h1 className="leading-none text-lg">Guestbook</h1>
              <h1 className="leading-none text-sm">Lorem asjfnas</h1>
            </div>
            <button className="flex justify-center items-center">
              <Image
                src={"/assets/icons/cart-black.svg"}
                width={20}
                height={20}
                className="aspect-square"
                alt="cart"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
