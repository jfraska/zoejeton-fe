"use client";
import { useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Hamburger from "./Hamburger";
import localFont from "next/font/local";
import Link from "next/link";
import { navLinks } from "@/constants";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

const runalto = localFont({
  src: "../assets/fonts/runalto/runalto.ttf",
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scroll } = useLocomotiveScroll();
  let sidebarMenu = useRef(null);
  let menuLayer = useRef(null);
  const menuTimeline = useRef();

  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenu, menuLayer],
      {
        duration: 0,
        y: "-100%",
      },
      {
        duration: 0.75,
        y: "0%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    menuState ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [menuState]);

  useEffect(() => {
    const screen = window.innerHeight;

    // setDivHeight({ container1: screen * 0.75, container2: screen * 0.9 });

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
          } transition-all ease-linear text-lg font-bold`}
        >
          ZoeJeton
        </h1>

        <div
          className={`hidden md:flex items-center gap-2 text-base font-medium cursor-pointer ${
            menuState ? "text-black" : null
          } transition-all ease-linear`}
        >
          <a href={`#`}>
            <Icon icon="grommet-icons:shop" width="20" />
          </a>
          <p className=" text-base font-normal">cart</p>
        </div>

        <button
          className={`${
            menuState ? "block" : "hidden"
          } text-black text-lg absolute top-2 md:left-20 left-10 transition-all ease-in-out delay-100`}
          onClick={() => setMenuState(false)}
        >
          Close
        </button>
      </div>
      <div
        ref={(el) => (menuLayer = el)}
        className={`flex fixed h-[75vh] justify-stretch top-0 z-40 items-end w-full pb-10 pt-20 px-[4%] bg-white shadow-lg`}
      >
        <div className="hidden md:flex gap-5 items-end w-[70%]">
          <Image
            className="img-gray"
            src="/assets/icons/atm-bersama.svg"
            width={65}
            height={65}
            alt="atm bersama"
          />

          <Image
            className="img-gray"
            src="/assets/icons/gopay.svg"
            width={70}
            height={70}
            alt="gopay"
          />

          <Image
            className="img-gray"
            src="/assets/icons/dana.svg"
            width={70}
            height={70}
            alt="dana"
          />

          <Image
            src="/assets/icons/qris.svg"
            width={60}
            height={60}
            alt="qris"
          />
        </div>

        <div className="text-xl flex flex-col h-full justify-between items-start gap-4">
          <ul>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => {
                  setMenuState(false);
                  scroll.scrollTo("#beranda");
                }}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => {
                  setMenuState(false);
                  scroll.scrollTo("#about");
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => {
                  setMenuState(false);
                  scroll.scrollTo("#feature");
                }}
              >
                Featured
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => {
                  setMenuState(false);
                  scroll.scrollTo("#template");
                }}
              >
                Katalog
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => setMenuState(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => {
                  setMenuState(false);
                  scroll.scrollTo("#faq");
                }}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => {
                  setMenuState(false);
                  scroll.scrollTo("#contact");
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex gap-2">
            <Link href="#">
              <Image
                src="/assets/icons/instagram.png"
                width={30}
                height={30}
                alt="instagram"
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/icons/tiktok.png"
                width={30}
                height={30}
                alt="tiktok"
              />
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={(el) => (sidebarMenu = el)}
        className={`flex fixed h-[90vh] flex-col top-0 z-30 justify-end w-full px-[4%] p-5 bg-white shadow-md`}
      >
        <div className="flex justify-stretch items-end">
          <h3 className="hidden md:block w-[70%] text-[210px] h-[230px]">
            Invitation
          </h3>
          <diV className="flex flex-col text-[#5d5d5d]">
            <div>
              <Link href="#">Tentang Kami</Link>
            </div>
            <div>
              <Link href="#">Layanan</Link>
            </div>
          </diV>
        </div>
      </div>

      <div
        className={`${
          menuState ? "z-10 bg-opacity-20" : "-z-10 bg-opacity-0"
        } fixed inset-0 bg-black transition-all ease-linear delay-200`}
        onClick={() => setMenuState(false)}
      />
    </nav>
  );
}
