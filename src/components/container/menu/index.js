import "./style.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { navLinks } from "@/constants";
import { useRouter } from "next/navigation";

export default function Menu({ state, setState }) {
  const router = useRouter();
  let sidebarMenu = useRef(null);
  let menuLayer = useRef(null);
  const menuTimeline = useRef();

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [menuLayer, sidebarMenu],
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
    state ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [state]);

  return (
    <>
      <div
        ref={(el) => (sidebarMenu = el)}
        className={`flex fixed h-[75vh] justify-stretch top-0 z-40 items-end w-full pb-10 pt-20 px-[4%] bg-white shadow-lg`}
      >
        <div className="hidden md:flex gap-5 items-end w-[70%]">
          <Image
            className="img-gray w-16 h-fit"
            src="/assets/icons/atm-bersama.svg"
            width={65}
            height={65}
            alt="atm bersama"
          />

          <Image
            className="img-gray w-16 h-fit"
            src="/assets/icons/gopay.svg"
            width={70}
            height={70}
            alt="gopay"
          />

          <Image
            className="img-gray w-16 h-fit"
            src="/assets/icons/dana.svg"
            width={70}
            height={70}
            alt="dana"
          />

          <Image
            src="/assets/icons/qris.svg"
            className="w-16  h-fit"
            width={60}
            height={60}
            alt="qris"
          />
        </div>

        <div className="flex flex-col h-full justify-between items-start">
          <div className="flex flex-col gap-1 items-start text-xl">
            <button
              onClick={() => {
                setState(false);
                router.push(
                  process.env.NEXT_PUBLIC_ROOT_DOMAIN
                    ? `https://dashboard.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                    : `http://dashboard.localhost:3000`
                );
              }}
            >
              Dashboard
            </button>

            <button
              onClick={() => {
                setState(false);
                router.push("#katalog");
              }}
            >
              Katalog
            </button>

            <button
              onClick={() => {
                setState(false);
                router.push(
                  process.env.NEXT_PUBLIC_ROOT_DOMAIN
                    ? `https://guestbook.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                    : `http://guestbook.localhost:3000`
                );
              }}
            >
              Guestbook
            </button>

            <button
              onClick={() => {
                setState(false);
                router.push("#faq");
              }}
            >
              FAQ
            </button>

            <button
              onClick={() => {
                setState(false);
                router.push("#contact");
              }}
            >
              Contact Us
            </button>
          </div>

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
        ref={(el) => (menuLayer = el)}
        className={`flex fixed h-[90vh] flex-col top-0 z-30 justify-end w-full px-[4%] p-5 bg-white shadow-md`}
      >
        <div className="flex justify-stretch items-end">
          <h3 className="hidden md:block w-[70%] text-[210px] h-[230px]">
            Invitation
          </h3>
          <div className="flex flex-col text-[#5d5d5d]">
            <Link href="#">Terms of Service</Link>
            <Link href="#">Policy</Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          state ? "z-10 bg-opacity-30" : "-z-10 bg-opacity-0"
        } fixed inset-0 bg-black transition-all ease-linear delay-200`}
        onClick={() => setState(false)}
      />
    </>
  );
}
