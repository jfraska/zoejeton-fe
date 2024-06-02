"use client";

import { templates } from "@/constants";
import CurrencyFormat from "react-currency-format";
import TransitionLink from "@/components/UI/TransitionLink";

export default function TemplateList() {
  return (
    <section data-scroll-section className="w-full p-[3%]">
      <div className="flex justify-between items-center text-base py-2 border-b border-black">
        <h1 className="text-xl">All template</h1>
        <h1>Page 2 of 5</h1>
      </div>

      <div className="flex flex-wrap gap-4 md:justify-normal justify-between my-5 w-full">
        {templates.map((e) => (
          <TransitionLink
            key={e.id}
            href={`/katalog/${e.slug}`}
            className="group w-[185px] flex flex-col gap-2 transition-all ease-in-out"
          >
            <div
              className="bg-cover w-full h-[250px] relative border border-black rounded-md overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/collection/2091539/500x400')",
              }}
            >
              <div className="absolute top-0 left-0 clip-polygon pr-8 pl-2  py-1 bg-black text-white shadow">
                Premium
              </div>
            </div>

            <div className="flex flex-col justify-start items-start">
              <h1 className="text-lg font-medium text-black leading-tight">
                {e.name}
              </h1>
              <h1 className="text-xs text-black leading-tight">
                <CurrencyFormat
                  value={e.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp. "}
                  suffix={",00"}
                />
              </h1>
            </div>
          </TransitionLink>
        ))}
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex gap-1 border border-black py-1 px-2 rounded-full">
          <span
            className="w-5 aspect-square icon-[carbon--arrow-up]"
            style={{ color: "black", transform: "rotate(270deg)" }}
          />
          <h1>Prev</h1>
        </div>
        <div className="flex gap-1 border border-black py-1 px-2 rounded-full">
          <h1>Next</h1>
          <span
            className="w-5 aspect-square icon-[carbon--arrow-up]"
            style={{ color: "black", transform: "rotate(90deg)" }}
          />
        </div>
      </div>
    </section>
  );
}
