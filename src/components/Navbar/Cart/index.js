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
    (acc, item) => acc + item.price,
    0
  );

  const confirmHandle = (data) => {
    console.log(data);
  };

  return (
    <>
      <div
        ref={(el) => (sidebarMenu = el)}
        className={`fixed h-screen top-0 right-0 z-[60] md:w-1/4 w-full bg-white text-black`}
      >
        <div className="w-full h-4/5 pb-20 overflow-y-auto px-5">
          <div className="flex py-5 justify-between items-center w-full">
            <h1 className="text-xl leading-none font-medium text-[#282828]">
              Keranjang Belanja Saya ({cart?.cartItems?.length})
            </h1>

            <button
              onClick={() => setState(false)}
              className="flex justify-center items-center"
            >
              <Icon
                className="mt-1"
                icon="grommet-icons:close"
                color="black"
                width="15"
              />
            </button>
          </div>

          <div className="mt-2 flex flex-col gap-2">
            {cart?.cartItems?.map((cartItem) => (
              <div
                key={cartItem.product}
                className="w-full flex justify-between items-stretch gap-4 p-4 bg-white shadow-md rounded"
              >
                <div
                  className="aspect-square w-20 rounded bg-white bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://source.unsplash.com/collection/2091539/500x400')",
                  }}
                />
                <div className="w-2/5 flex flex-col items-start gap-2">
                  <h1 className="font-medium leading-none">{cartItem.name}</h1>
                  <h1 className="text-xs">{cartItem.product}</h1>
                </div>
                <div className="w-2/5 flex flex-col items-end justify-between">
                  <h1 className="font-medium text-sm leading-none">
                    <CurrencyFormat
                      value={cartItem.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"IDR "}
                      suffix={".-"}
                    />
                  </h1>
                  <button
                    className="flex justify-center items-center"
                    onClick={() => deleteItemFromCart(cartItem?.product)}
                  >
                    <Icon icon="lucide:trash" color="black" width="15" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-0 inset-x-0 w-full flex flex-col gap-5 p-4 bg-white shadow-[0_-4px_60px_-25px_rgba(0,0,0,0.4)]">
          <div>
            <div className="flex justify-between items-center">
              <h1>Diskon</h1>
              <h1 className="text-sm">
                <CurrencyFormat
                  value={amountWithoutTax}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"IDR "}
                  suffix={".-"}
                />
              </h1>
            </div>
            <div className="flex justify-between items-center font-medium">
              <h1 className="text-lg">Estimasi Total</h1>
              <h1 className="text-sm">
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
          <p className="text-xs leading-none">
            *Biaya pengiriman dan syarat gratis ongkir akan berbeda sesuai
            dengan tujuan pengiriman. Silakan lihat S&K Pengiriman untuk tarif
            pengiriman di sini.
          </p>
          <button
            onClick={() => confirmHandle(amountWithoutTax)}
            className="flex justify-between items-center px-2 py-px text-xl w-full bg-black rounded-full"
          >
            <h1 className="uppercase text-white">checkout</h1>
            <Icon icon="carbon:arrow-up" rotate={1} color="white" width="30" />
          </button>
        </div>
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
