"use client";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Hamburger from "../Hamburger";
import localFont from "next/font/local";
import { Icon } from "@iconify/react";
import Cart from "./Cart";
import Menu from "./Menu";

const runalto = localFont({
  src: "../../assets/fonts/runalto/runalto.ttf",
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scroll } = useLocomotiveScroll();
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);

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
        className={`top-0 inset-x-0 z-50 py-2 px-[3%] flex justify-between items-center mx-auto ${
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
          } hidden md:block transition-all ease-linear text-lg font-bold`}
        >
          ZoeJeton
        </h1>

        <button
          onClick={() => {
            setMenuState(false);
            setCartState(true);
          }}
          className={`flex items-center gap-2 text-base font-medium cursor-pointer ${
            menuState ? "text-black" : null
          } transition-all ease-linear`}
        >
          <Icon icon="grommet-icons:shop" width="20" />
          <p className="md:block hidden text-base font-normal">cart</p>
        </button>

        <button
          className={`${
            menuState ? "block" : "hidden"
          } text-black text-lg absolute top-2 md:left-20 left-10 transition-all ease-in-out delay-100`}
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
