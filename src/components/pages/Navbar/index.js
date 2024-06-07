"use client";

import "./style.css";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CartContext from "@/context/cart";
import { usePathname, useRouter } from "next/navigation";
import { Runalto } from "@/styles/fonts";
import gsap from "gsap";
import Hamburger from "@/components/icons/hamburger";
import TransitionLink from "@/components/UI/TransitionLink";
import Cart from "@/components/container/cart";
import Menu from "@/components/container/menu";
import { ArrowBack, ArrowBackIosNew } from "@mui/icons-material";

export default function Navbar() {
  const [scrolled, setScrolled] = useState({ state: true, header: false });
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [shake, setShake] = useState(false);
  const { cart } = useContext(CartContext);
  const pathname = usePathname();
  const router = useRouter();
  let navbarRef = useRef(null);
  const navTimeline = useRef();

  useEffect(() => {
    if (cart?.cartItems?.length > 0) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 100);
    }
  }, [cart]);

  useEffect(() => {
    navTimeline.current = gsap.timeline({ paused: true });
    navTimeline.current.fromTo(
      [navbarRef],
      {
        duration: 0,
        y: "-100%",
      },
      {
        duration: 0.4,
        y: "0%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.4,
        },
      }
    );
  }, []);

  useEffect(() => {
    scrolled.state ? navTimeline.current.play() : navTimeline.current.reverse();
  }, [scrolled]);

  return (
    <nav>
      <div
        ref={(el) => (navbarRef = el)}
        className={`top-0 inset-x-0 z-50 py-2 px-[3%] flex justify-between items-center fixed 
        ${
          scrolled.header ? "bg-transparent text-white" : "bg-white text-black"
        } 
        transition-all ease-in-out`}
      >
        {pathname === "/katalog" || pathname === "/katalog" ? (
          <Hamburger
            state={menuState}
            setState={setMenuState}
            scroll={!scrolled.header}
          />
        ) : (
          <button onClick={() => router.back()}>
            <ArrowBack />
          </button>
        )}

        <TransitionLink
          href="/"
          className={`${Runalto.className} font-semibold ${
            menuState && "text-black"
          } transition-all ease-in-out text-lg leading-tight mt-1`}
        >
          ZoeJeton
        </TransitionLink>

        <button
          onClick={() => {
            if (cart?.cartItems?.length > 0) {
              setCartState(true);
            }
          }}
          className={`flex items-center gap-1 text-base cursor-pointer ${
            menuState && "text-black"
          } transition-all ease-linear`}
        >
          <h1 className="leading-none hidden md:block">Cart</h1>
          <div className={`${shake && "shake"} relative text-end`}>
            {menuState || !scrolled.header ? (
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
          } text-black text-lg absolute top-2 md:left-20 left-12 transition-all ease-in-out delay-100`}
          onClick={() => setMenuState(false)}
        >
          Close
        </button>
      </div>

      <Cart state={cartState} setState={setCartState} />

      <Menu state={menuState} setState={setMenuState} />
    </nav>
  );
}
