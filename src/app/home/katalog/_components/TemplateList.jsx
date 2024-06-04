"use client";

import { templates } from "@/constants";
import CurrencyFormat from "react-currency-format";
import TransitionLink from "@/components/UI/TransitionLink";
import Image from "next/image";

export default function TemplateList() {
  return (
    <section data-scroll-section className="w-full p-[3%]">
      <div className="flex justify-between items-center text-base py-2 border-b border-black">
        <h1 className="text-xl">All template</h1>
        <h1>Page 2 of 5</h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-between my-5 w-full">
        {templates.map((e) => (
          <div
            key={e.id}
            className="group flex justify-center items-center bg-cover w-[47%] md:w-[250px] h-[250px] md:h-[300px] relative bg-blend-overlay hover:bg-[#0000008e] border border-black rounded-md overflow-hidden transition-all duration-200 ease-in-out"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/collection/2091539/500x400')",
            }}
          >
            <div className="absolute top-0 left-0 clip-polygon pr-8 pl-2 py-1 bg-black text-white shadow">
              Premium
            </div>

            <button className="flex items-center justify-center w-fit gap-1 border bg-white border-black px-2 rounded-full transition-transform ease-in-out group-hover:scale-100 scale-0">
              <span
                className="w-5 aspect-square icon-[ph--eye]"
                style={{ color: "black" }}
              />
              <h1>Demo Invitation</h1>
            </button>

            <div className="absolute bottom-0 inset-x-0 p-4 flex justify-between items-center w-full">
              <div className="flex flex-col justify-start items-start">
                <h1 className="font-medium bg-black text-white w-fit leading-tight rounded">
                  {e.name}
                </h1>
                <h1 className="text-sm font-normal bg-black text-white w-fit leading-tight rounded">
                  <CurrencyFormat
                    value={e.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp. "}
                    suffix={",00"}
                  />
                </h1>
              </div>

              <TransitionLink
                href={`/katalog/${e.slug}`}
                className="bg-black flex justify-center items-center p-2 rounded-md hover:bg-[#00000068] hover:scale-110 transition-all ease-in-out"
              >
                <Image
                  src={"/assets/icons/cart.svg"}
                  width="20"
                  height="20"
                  alt="cart"
                  className="w-5 aspect-square"
                />
              </TransitionLink>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-between items-center">
        <button className="flex justify-center items-center gap-1 border border-black py-1 px-2 rounded-full hover:bg-black hover:scale-110 hover:text-white group transition-all duration-200 ease-in-out">
          <span
            className="w-5 group-hover:text-white text-black aspect-square icon-[carbon--arrow-up]"
            style={{ transform: "rotate(270deg)" }}
          />
          <h1>Prev</h1>
        </button>
        <button className="flex justify-center items-center gap-1 border border-black py-1 px-2 rounded-full hover:bg-black hover:scale-110 hover:text-white group transition-all duration-200 ease-in-out">
          <h1>Next</h1>
          <span
            className="w-5 group-hover:text-white text-black aspect-square icon-[carbon--arrow-up]"
            style={{ transform: "rotate(90deg)" }}
          />
        </button>
      </div>
    </section>
  );
}
