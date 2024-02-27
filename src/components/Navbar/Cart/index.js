import "./style.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import CartContext from "@/providers/CartProvider";
import CurrencyFormat from "react-currency-format";

export default function Cart({ state, setState }) {
  let sidebarMenu = useRef(null);
  const menuTimeline = useRef();
  const { deleteItemFromCart, cart } = useContext(CartContext);

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenu],
      {
        duration: 0,
        x: "100%",
      },
      {
        duration: 0.75,
        x: "0%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    state ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [state]);

  const amountWithoutTax = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const confirmHandle = (data) => {
    console.log(data);
  };

  return (
    <>
      <div
        ref={(el) => (sidebarMenu = el)}
        className={`fixed h-screen top-0 right-0 p-5 z-[60] md:w-1/4 w-full bg-white text-black shadow-md overflow-y-auto`}
      >
        <div className="flex mb-6 justify-between items-end w-full">
          <h1 className="text-3xl uppercase">Shopping Cart</h1>

          <button
            onClick={() => setState(false)}
            className="hover-underline-animation"
          >
            <h1 className="text-base">Close</h1>
          </button>
        </div>

        {cart?.cartItems?.length > 0 ? (
          <>
            <div className="flex flex-col gap-1">
              {cart?.cartItems?.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="border-b-2 border-[#757575] w-full flex justify-between items-stretch py-2 gap-2"
                >
                  <div className="w-2/5 flex flex-col items-start justify-between">
                    <h1 className="text-lg">{cartItem.name}</h1>
                    <h1 className="text-lg">{cartItem.desc}</h1>
                  </div>
                  <div
                    className="aspect-square w-20 rounded-lg border border-black bg-white bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://source.unsplash.com/collection/2091539/500x400')",
                    }}
                  />
                  <div className="w-2/5 flex flex-col items-end justify-between">
                    <button
                      onClick={() => deleteItemFromCart(cartItem?.product)}
                      className="text-sm"
                    >
                      Remove
                    </button>
                    <h1 className="text-base">
                      <CurrencyFormat
                        value={cartItem.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"IDR "}
                        suffix={".-"}
                      />
                    </h1>
                  </div>
                </div>
              ))}

              <div className="mt-5 flex justify-between text-base font-medium">
                <h1 className="w-3/5 text-end uppercase">Total</h1>
                <h1 className="w-2/5 text-end">
                  <CurrencyFormat
                    value={amountWithoutTax}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"IDR "}
                    suffix={".-"}
                  />
                </h1>
              </div>
            </div>

            <div className="absolute bottom-5 inset-x-0 flex justify-center px-5">
              <button
                onClick={() => confirmHandle(amountWithoutTax)}
                className="flex justify-between items-center px-2 leading-none text-2xl w-full bg-black rounded-2xl"
              >
                <h1 className="uppercase text-white">Confirm</h1>
                <Icon
                  icon="carbon:arrow-up"
                  rotate={1}
                  color="white"
                  width="30"
                />
              </button>
            </div>
          </>
        ) : (
          <h1 className="mt-[70%] w-full text-center text-xl text-black-100">
            cart kosong
          </h1>
        )}
      </div>

      <div
        className={`${
          state ? "z-50 bg-opacity-30" : "-z-10 bg-opacity-0"
        } fixed inset-0 bg-black transition-all ease-linear delay-200`}
        onClick={() => setState(false)}
      />
    </>
  );
}
