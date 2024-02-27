"use client";
import "./style.css";
import { useContext, useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Hamburger from "../Hamburger";
import localFont from "next/font/local";
import { Icon } from "@iconify/react";
import Cart from "./Cart";
import Menu from "./Menu";
import CartContext from "@/providers/CartProvider";

const runalto = localFont({
  src: "../../assets/fonts/runalto/runalto.ttf",
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scroll } = useLocomotiveScroll();
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", ({ scroll }) => {
        if (scroll.y > 600) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]);

  return (
    <nav>
      <div
        className={`top-0 inset-x-0 z-50 py-4 px-[3%] flex justify-between items-center mx-auto ${
          scrolled
            ? "fixed bg-primary text-black"
            : "absolute bg-transparent text-white"
        } transition-all ease-linear`}
      >
        <Hamburger
          state={menuState}
          setState={setMenuState}
          scroll={scrolled}
        />
        <h1
          className={`${runalto.className} font-bold ${
            menuState ? "text-black" : null
          } hidden md:block transition-all ease-linear text-lg font-bold leading-none`}
        >
          ZoeJeton
        </h1>

        <button
          onClick={() => {
            setMenuState(false);
            setCartState(true);
          }}
          className={`flex gap-1 mr-2 text-base cursor-pointer ${
            menuState ? "text-black" : null
          } transition-all ease-linear`}
        >
          <Icon icon="grommet-icons:shop" width="19" />
          <div className="relative text-end">
            <p className="leading-tight">Cart</p>
            <span className="absolute top-0 -right-2 text-xs leading-tight w-3 rounded-full overflow-hidden">
              {cart?.cartItems?.length || 0}
            </span>
          </div>
        </button>

        <button
          className={`${
            menuState ? "block" : "hidden"
          } text-black text-lg absolute md:top-2 top-1 md:left-20 left-12 transition-all ease-in-out delay-100`}
          onClick={() => setMenuState(false)}
        >
          Close
        </button>
      </div>

      <Cart state={cartState} setState={setCartState} />

      <Menu state={menuState} setState={setMenuState} scroll={scroll} />
    </nav>
  );
}
