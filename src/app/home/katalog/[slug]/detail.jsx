"use client";

import CurrencyFormat from "react-currency-format";

export default function detail({ data }) {
  return (
    <div className="p-[3%] my-10 flex flex-col md:flex-row gap-10 justify-center">
      <div
        className="bg-cover mx-auto md:mx-0 md:w-1/5 w-2/3 aspect-9/16 relative border border-black rounded-md overflow-hidden bg-[#00000051] transition-all ease-in-out bg-blend-overlay flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/collection/2091539/500x400')",
        }}
      >
        <div className="absolute top-0 left-0 clip-polygon pr-8 pl-2  py-1 bg-black text-white shadow">
          {data.category}
        </div>

        <a
          href={
            process.env.NEXT_PUBLIC_VERCEL_ENV
              ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${data.slug}`
              : `http://template.localhost:3000/${data.slug}`
          }
          target="_blank"
          className="flex items-center justify-center w-fit gap-1 border bg-white border-black px-2 rounded-full transition-transform ease-in-out"
        >
          <span
            className="w-5 aspect-square icon-[ph--eye]"
            style={{ color: "black" }}
          />
          <h1>Demo Invitation</h1>
        </a>
      </div>

      <div className="flex flex-col gap-5 items-center md:items-start w-full md:w-2/4">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-medium">{data.title}</h1>
          <h2>{data.price}</h2>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-end text-base">
            <h1 className="text-lg font-medium leading-none">Extra Fitur</h1>
            <button
              type="submit"
              className="flex px-1 text-xs uppercase justify-center items-center border border-black rounded-full text-black hover:bg-black hover:text-white"
            >
              Select all
            </button>
          </div>
          <div className="w-full flex flex-col mt-2">
            {/* {addOns.map((addOn, index) => ( */}
            <div
              //   key={index}
              className="w-full flex justify-between items-center pr-2 py-2 hover-underline-animation"
            >
              <div className="flex flex-col gap-2">
                <h1 className="leading-none">RSVP</h1>
                <h1 className="leading-none text-sm">+ Rp. 10.000</h1>
              </div>

              <label className="checkbox bounce">
                <input type="checkbox" />
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
              </label>
            </div>
            {/* ))} */}
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-end text-base">
            <h1 className="text-lg font-medium leading-none">Addon</h1>
            <button
              type="submit"
              className="flex px-1 text-xs uppercase justify-center items-center border border-black rounded-full text-black hover:bg-black hover:text-white"
            >
              Select all
            </button>
          </div>
          <div className="w-full flex flex-col mt-2">
            {/* {addOns.map((addOn, index) => ( */}
            <div
              //   key={index}
              className="w-full flex justify-between items-center pr-2 py-2 hover-underline-animation"
            >
              <div className="flex flex-col gap-2">
                <h1 className="leading-none ">Guestbook</h1>
                <h1 className="leading-none text-sm">+ Rp. 10.000</h1>
              </div>
              <label className="checkbox bounce">
                <input type="checkbox" />
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
              </label>
            </div>
            {/* ))} */}
          </div>
        </div>

        <div className="w-full mt-6 flex flex-col items-end gap-5">
          <div className="w-full">
            <div className="flex justify-between items-center w-full">
              <h1>Discount</h1>
              <h1 className="text-sm">
                <CurrencyFormat
                  value={0}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp. "}
                  suffix={",00"}
                />
              </h1>
            </div>
            <div className="flex justify-between items-center w-full font-medium">
              <h1 className="text-lg">Subtotal</h1>
              <h1 className="text-sm">
                <CurrencyFormat
                  value={0}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp. "}
                  suffix={",00"}
                />
              </h1>
            </div>
          </div>
          <p className="text-xs leading-none">
            *Taxes are calculated at checkout.
          </p>
          <div className="flex gap-2">
            <button
              //   onClick={() => confirmHandle(amountWithoutTax)}
              className="flex justify-between items-center px-2 py-1 text-lg border border-black bg-white hover:bg-black hover:text-white rounded-full"
            >
              <h1 className="uppercase">add to cart</h1>
            </button>
            <button
              //   onClick={() => confirmHandle(amountWithoutTax)}
              className="flex justify-center items-center  gap-2 px-2 py-1 text-lg bg-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 ease-in-out group"
            >
              <h1 className="uppercase">checkout</h1>
              <span
                className="w-6 group-hover:text-black text-white aspect-square icon-[carbon--arrow-up]"
                style={{ transform: "rotate(90deg)" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
