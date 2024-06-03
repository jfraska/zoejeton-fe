"use client";

import { useContext } from "react";
import CartContext from "@/context/cart";
import CurrencyFormat from "react-currency-format";

export default function Page() {
  const { cart } = useContext(CartContext);

  const amountWithoutTax = cart?.cartItems?.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const confirmHandle = (data) => {
    console.log(data);
  };

  return (
    <div className="p-[3%]">
      <h1 className="mt-10 md:text-2xl text-xl">
        Shopping Cart ({cart?.cartItems?.length})
      </h1>

      <div className="mt-5 flex flex-col gap-2">
        {cart?.cartItems?.map((cartItem) => (
          <div
            key={cartItem.product}
            className="w-full flex justify-between items-stretch gap-4 pb-5 border-b border-black"
          >
            <div
              className="bg-cover w-2/5 max-w-[200px] aspect-square relative border border-black rounded-md overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/collection/2091539/500x400')",
              }}
            >
              <div className="absolute text-sm top-0 left-0 clip-polygon pr-8 pl-2  py-1 bg-black text-white shadow">
                Premium
              </div>
            </div>
            <div className="w-2/5 flex flex-col items-start gap-2">
              <h1 className="font-medium leading-none">{cartItem.name}</h1>
              <h1 className="text-xs">{cartItem.product}</h1>
            </div>
            <div className="w-2/5 flex flex-col items-end justify-between">
              <button
                className="flex justify-center items-center"
                onClick={() => deleteItemFromCart(cartItem?.product)}
              >
                <span
                  className="mt-1 w-4 aspect-square icon-[lucide--trash]"
                  style={{ color: "black" }}
                />
              </button>
              <h1 className="font-medium text-sm leading-none">
                <CurrencyFormat
                  value={cartItem.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp. "}
                  suffix={",00"}
                />
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-6 flex flex-col items-end gap-5">
        <div className="flex justify-between items-center w-full font-medium">
          <h1 className="text-lg">Subtotal</h1>
          <h1 className="text-sm">
            <CurrencyFormat
              value={amountWithoutTax}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp. "}
              suffix={",00"}
            />
          </h1>
        </div>
        <p className="text-xs leading-none">
          *Taxes are calculated at checkout.
        </p>
        <button
          onClick={() => confirmHandle(amountWithoutTax)}
          className="flex justify-between items-center px-2 py-px text-xl w-full bg-black rounded-full"
        >
          <h1 className="uppercase text-white">checkout</h1>
          <span
            className="mt-1 w-8 aspect-square icon-[carbon--arrow-up]"
            style={{ color: "white", transform: "rotate(90deg)" }}
          />
        </button>
      </div>
    </div>
  );
}
