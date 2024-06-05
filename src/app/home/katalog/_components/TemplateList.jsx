"use client";

import CurrencyFormat from "react-currency-format";
import Image from "next/image";
import Link from "next/link";

export default function TemplateList({ data }) {
  return (
    <section data-scroll-section className="w-full p-[3%]">
      <div className="flex justify-between items-center text-base border-b border-black">
        <div className="relative hover-underline-animation py-2">
          <select className="appearance-none focus:outline-none pr-10 text-xl">
            <option value="1">All Template</option>
            <option value="2">Premium Template</option>
            <option value="3">Basic Template</option>
          </select>
          <span className="absolute right-0 bottom-4 w-3 text-black aspect-square icon-[foundation--play] rotate-90" />
        </div>
        <h1>Page 1 of 1</h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-between my-5 w-full">
        {data.map((e) => (
          <div
            key={e.id}
            className="group flex justify-center items-center bg-cover w-[47%] md:w-[250px] h-[250px] md:h-[300px] relative bg-blend-overlay hover:bg-[#0000008e] border border-black rounded-md overflow-hidden transition-all duration-200 ease-in-out"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/collection/2091539/500x400')",
            }}
          >
            <div className="absolute top-0 left-0 clip-polygon pr-8 pl-2 py-1 bg-black text-white shadow">
              {e.category}
            </div>

            <a
              href={
                process.env.NEXT_PUBLIC_VERCEL_ENV
                  ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${e.slug}`
                  : `http://template.localhost:3000/${e.slug}`
              }
              target="_blank"
              className="flex items-center justify-center w-fit gap-1 border bg-white border-black px-2 rounded-full transition-transform ease-in-out group-hover:scale-100 scale-0"
            >
              <span
                className="w-5 aspect-square icon-[ph--eye]"
                style={{ color: "black" }}
              />
              <h1>Demo Invitation</h1>
            </a>

            <div className="absolute bottom-0 inset-x-0 p-4 flex justify-between items-center w-full">
              <div className="flex flex-col justify-start items-start">
                <h1 className="font-medium bg-black text-white w-fit leading-tight rounded">
                  {e.title}
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

              <Link
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
              </Link>
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
