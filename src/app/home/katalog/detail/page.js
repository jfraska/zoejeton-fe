"use client";

import LoadingButton from "@/components/UI/loading-button";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";

export default function page() {
  const confirmHandle = (data) => {
    console.log(data);
  };

  return (
    <div className="p-[3%] mt-10">
      <div
        className="bg-cover mx-auto md:w-1/5 w-2/3 aspect-9/16 relative border border-black rounded-md overflow-hidden bg-[#00000051] transition-all ease-in-out bg-blend-overlay flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/collection/2091539/500x400')",
        }}
      >
        <div className="absolute top-0 left-0 clip-polygon pr-8 pl-2  py-1 bg-black text-white shadow">
          Premium
        </div>

        <button className="flex items-center justify-center w-fit gap-1 border bg-white border-black px-2 rounded-full transition-transform ease-in-out">
          <span
            className="w-5 aspect-square icon-[ph--eye]"
            style={{ color: "black" }}
          />
          <h1>Demo Invitation</h1>
        </button>
      </div>

      <div className="mx-auto mt-5 text-center">
        <h1 className="text-2xl font-medium">Minimal Luxury</h1>
        <h2>Rp. 100.000 - Rp. 200.000 </h2>
      </div>

      <div className="mt-10">
        <div className="flex justify-between items-end text-base">
          <h1 className="text-xl font-medium leading-none">Extra Fitur</h1>
          <button
            type="submit"
            className="flex px-1 md:text-base text-xs uppercase justify-center items-center border border-black rounded-full text-black"
          >
            Select all
          </button>
        </div>
        <div className="md:w-3/5 w-full flex flex-col mt-2">
          {/* {addOns.map((addOn, index) => ( */}
          <div
            //   key={index}
            className="w-full flex justify-between items-center pr-2 py-4 hover-underline-animation"
          >
            <div className="flex flex-col gap-2">
              <h1 className="leading-none text-lg ">RSVP</h1>
              <h1 className="leading-none text-sm">+ Rp. 10.000</h1>
            </div>
            <LoadingButton
              // onClick={() => addToCartHandler(addOn)}
              className="flex justify-center items-center"
            >
              <Image
                src={"/assets/icons/cart-black.svg"}
                width={20}
                height={20}
                className="aspect-square"
                alt="cart"
              />
            </LoadingButton>
          </div>
          {/* ))} */}
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between items-end text-base">
          <h1 className="text-xl font-medium leading-none">Addon</h1>
          <button
            type="submit"
            className="flex px-1 md:text-base text-xs uppercase justify-center items-center border border-black rounded-full text-black"
          >
            Select all
          </button>
        </div>
        <div className="md:w-3/5 w-full flex flex-col mt-2">
          {/* {addOns.map((addOn, index) => ( */}
          <div
            //   key={index}
            className="w-full flex justify-between items-center pr-2 py-4 hover-underline-animation"
          >
            <div className="flex flex-col gap-2">
              <h1 className="leading-none text-lg ">Guestbook</h1>
              <h1 className="leading-none text-sm">+ Rp. 10.000</h1>
            </div>
            <LoadingButton
              // onClick={() => addToCartHandler(addOn)}
              className="flex justify-center items-center"
            >
              <Image
                src={"/assets/icons/cart-black.svg"}
                width={20}
                height={20}
                className="aspect-square"
                alt="cart"
              />
            </LoadingButton>
          </div>
          {/* ))} */}
        </div>
      </div>

      <div className="w-full mt-6 flex flex-col items-end gap-5">
        <div className="flex justify-between items-center w-full font-medium">
          <h1 className="text-lg">Subtotal</h1>
          {/* <h1 className="text-sm">
            <CurrencyFormat
              value={amountWithoutTax}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp. "}
              suffix={",00"}
            />
          </h1> */}
        </div>
        <p className="text-xs leading-none">
          *Taxes are calculated at checkout.
        </p>
        <div className="flex gap-2">
          <button
            //   onClick={() => confirmHandle(amountWithoutTax)}
            className="flex justify-between items-center px-2 py-1 text-lg border border-black bg-white rounded-full"
          >
            <h1 className="uppercase text-black">add to cart</h1>
          </button>
          <button
            //   onClick={() => confirmHandle(amountWithoutTax)}
            className="flex justify-center items-center  gap-2 px-2 py-1 text-lg bg-black rounded-full"
          >
            <h1 className="uppercase text-white">checkout</h1>
            <span
              className="w-6 aspect-square icon-[carbon--arrow-up]"
              style={{ color: "white", transform: "rotate(90deg)" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
