"use client";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Hamburger from "../Hamburger";
import Image from "next/image";
import Cart from "./Cart";
import Menu from "./Menu";
import CartContext from "@/providers/CartProvider";
import { AnimatePresence } from "framer-motion";
import Notif from "./Notif";
import { Runalto } from "@/styles/fonts";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Navbar({ header = false }) {
  const [scrolled, setScrolled] = useState(false);
  const { scroll } = useLocomotiveScroll();
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [notifState, setNotifState] = useState(false);
  const [shake, setShake] = useState(false);
  const { cart } = useContext(CartContext);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (scroll) {
      scroll.on("call", (value, way, obj) => {
        if (way === "enter") {
          switch (value) {
            case "about":
              setScrolled(true);
              break;
            case "beranda":
              setScrolled(false);
              break;
          }
        }
      });
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]);

  useEffect(() => {
    if (notifState) {
      setTimeout(() => {
        setNotifState(false);
      }, 2000);
    }
  }, [notifState]);

  useEffect(() => {
    if (cart?.cartItems?.length > 0) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 100);
    }
  }, [cart]);

  return (
    <nav>
      <div
        className={`top-0 inset-x-0 z-50 py-3 px-[3%] flex justify-between items-center mx-auto 
        ${
          !header
            ? "fixed bg-primary text-black"
            : "absolute bg-transparent text-white"
        } 
        transition-all ease-linear`}
      >
        {pathname === "/" ? (
          <Hamburger
            state={menuState}
            setState={setMenuState}
            scroll={!header}
          />
        ) : (
          <button onClick={() => router.back()}>
            <Icon icon="carbon:arrow-up" rotate={-1} color="white" width="30" />
          </button>
        )}
        <h1
          className={`${Runalto.className} font-bold ${
            menuState ? "text-black" : null
          } hidden md:block transition-all ease-linear text-lg leading-none`}
        >
          ZoeJeton
        </h1>

        <button
          onClick={() => {
            if (cart?.cartItems?.length > 0) {
              setMenuState(false);
              setCartState(true);
            } else {
              setNotifState(true);
            }
          }}
          className={`flex items-center gap-1 text-base cursor-pointer ${
            menuState ? "text-black" : null
          } transition-all ease-linear`}
        >
          <h1 className="leading-none">Cart</h1>
          <div className={`${shake ? "shake" : null} relative text-end`}>
            {menuState || !header ? (
              <Image
                src={"/assets/icons/cart-black.svg"}
                width="20"
                height="20"
                alt="cart"
                className="w-5 aspect-square"
              />
            ) : (
              <Image
                src={"/assets/icons/cart.svg"}
                width="20"
                height="20"
                alt="cart"
                className="w-5 aspect-square"
              />
            )}

            {cart?.cartItems?.length != 0 && (
              <span className="absolute -bottom-0.5 -right-0.5 w-3 aspect-square bg-red-500 text-white border-2 border-white rounded-full" />
            )}
          </div>
        </button>

        <button
          className={`${
            menuState ? "block" : "hidden"
          } text-black text-lg absolute md:top-3 top-3 md:left-20 left-12 transition-all ease-in-out delay-100`}
          onClick={() => setMenuState(false)}
        >
          Close
        </button>
      </div>

      <AnimatePresence mode="wait">{notifState && <Notif />}</AnimatePresence>

      <Cart state={cartState} setState={setCartState} />

      <Menu state={menuState} setState={setMenuState} scroll={scroll} />
    </nav>
  );
}
