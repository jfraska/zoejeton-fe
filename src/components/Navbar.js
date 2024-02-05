"use client";
import { useEffect, useState, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Hamburger from "./Hamburger";
import localFont from "next/font/local";
import Link from "next/link";
import { navLinks } from "@/constants";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

const runalto = localFont({
  src: "../assets/fonts/runalto/runalto.ttf",
});

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const [divHeight, setDivHeight] = useState(0);

  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);

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
        <Hamburger open={toggle} setOpen={setToggle} scroll={scrolled} />

        <h1
          className={`${runalto.className} font-bold ${
            toggle ? "text-black" : null
          } transition-all ease-linear text-lg font-bold`}
        >
          ZoeJeton
        </h1>

        <div
          className={`hidden md:flex items-center gap-2 text-base font-medium cursor-pointer ${
            toggle ? "text-black" : null
          } transition-all ease-linear`}
        >
          <a href={`#`}>
            <Icon icon="grommet-icons:shop" width="20" />
          </a>
          <p className=" text-base font-normal">cart</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -divHeight }}
        animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -divHeight }}
        transition={{
          delay: toggle ? 0.3 : 0,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`flex fixed justify-stretch top-0 z-40 items-end w-full h-[70%] pb-10 pt-20 px-[4%] bg-white shadow-lg`}
      >
        <div className="hidden md:flex gap-5 items-end w-[70%]">
          <Link href="#">
            <Image
              className="img-gray"
              src="/atm-bersama.svg"
              width={65}
              height={65}
              alt="atm bersama"
            />
          </Link>
          <Link href="#">
            <Image
              className="img-gray"
              src="/gopay.svg"
              width={70}
              height={70}
              alt="gopay"
            />
          </Link>
          <Link href="#">
            <Image
              className="img-gray"
              src="/dana.svg"
              width={70}
              height={70}
              alt="dana"
            />
          </Link>
          <Link href="#">
            <Image src="/qris.svg" width={60} height={60} alt="qris" />
          </Link>
        </div>

        <div className="text-xl flex flex-col h-full justify-between items-start gap-4">
          <ul>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => setToggle(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => setToggle(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => setToggle(false)}
              >
                Featured
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => setToggle(false)}
              >
                Template
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                href="#"
                onClick={() => setToggle(false)}
              >
                Pricing
              </Link>
            </li>
          </ul>
          <div className="flex gap-2">
            <Link href="#">
              <Image
                src="/instagram.png"
                width={30}
                height={30}
                alt="instagram"
              />
            </Link>
            <Link href="#">
              <Image src="/tiktok.png" width={30} height={30} alt="tiktok" />
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -divHeight }}
        animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -divHeight }}
        transition={{
          delay: toggle ? 0 : 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`flex fixed flex-col top-0 z-30 justify-end w-full h-[85%] px-[4%] p-5 bg-white shadow-md`}
      >
        <div className="flex justify-stretch items-end">
          <h3 className="hidden md:block w-[70%] text-[210px] h-[230px]">
            Invitation
          </h3>
          <diV className="flex flex-col font-light">
            <div>
              <Link href="#">Tentang Kami</Link>
            </div>
            <div>
              <Link href="#">Layanan</Link>
            </div>
          </diV>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: toggle ? 0.3 : 0 }}
        transition={{ delay: toggle ? 0.3 : 0 }}
        className={`${toggle ? "fixed " : "hidden"} bg-black z-0 inset-0`}
      />
    </nav>
  );
}
