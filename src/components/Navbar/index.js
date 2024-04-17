"use client";
import "./style.css";
import { useContext, useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Image from "next/image";
import Cart from "./Cart";
import Menu from "./Menu";
import CartContext from "@/providers/CartProvider";
import { AnimatePresence } from "framer-motion";
import Notif from "./Notif";
import { Runalto } from "@/styles/fonts";
import { usePathname, useRouter } from "next/navigation";
import { ArrowBackIosNewSharp } from "@mui/icons-material";
import gsap from "gsap";
import Hamburger from "../Hamburger";
import TransitionLink from "../TransitionLink";

export default function Navbar() {
  const [scrolled, setScrolled] = useState({ state: true, header: false });
  const { scroll } = useLocomotiveScroll();
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [notifState, setNotifState] = useState(false);
  const [shake, setShake] = useState(false);
  const { cart } = useContext(CartContext);
  const pathname = usePathname();
  const router = useRouter();
  let navbarRef = useRef(null);
  const navTimeline = useRef();

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (args) => {
        if (typeof args.currentElements["beranda"] === "object") {
          if (args.currentElements["beranda"].progress < 0.6) {
            setScrolled({ state: true, header: true });
          } else if (args.currentElements["beranda"].progress < 0.8) {
            setScrolled({ state: false, header: true });
          } else {
            setScrolled({ state: false, header: false });
          }
        } else {
          setScrolled({ state: true, header: false });
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
        className={`top-0 inset-x-0 z-50 py-3 px-[3%] flex justify-between items-center fixed 
        ${
          scrolled.header
            ? "bg-transparent text-white"
            : "bg-primary text-black"
        } 
        transition-all ease-in-out`}
      >
        {pathname === "/" ? (
          <Hamburger
            state={menuState}
            setState={setMenuState}
            scroll={!scrolled.header}
          />
        ) : (
          <TransitionLink href={"/"}>
            <ArrowBackIosNewSharp />
          </TransitionLink>
        )}
        <h1
          className={`${Runalto.className} font-bold ${
            menuState && "text-black"
          } hidden md:block transition-all ease-in-out text-lg leading-none`}
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
            menuState && "text-black"
          } transition-all ease-linear`}
        >
          <h1 className="leading-none">Cart</h1>
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

      <AnimatePresence mode="wait">{notifState && <Notif />}</AnimatePresence>

      <Cart state={cartState} setState={setCartState} />

      <Menu state={menuState} setState={setMenuState} scroll={scroll} />
    </nav>
  );
}
