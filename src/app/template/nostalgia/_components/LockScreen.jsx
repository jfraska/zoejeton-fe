"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GenteRomantica, Catamaran } from "@/styles/fonts";
import gsap from "gsap";
import CountDown from "./CountDown";

export default function LockScreen() {
  let lockRef = useRef(null);
  const timeline = useRef();
  const [state, setState] = useState(false);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current.fromTo(
      lockRef,
      {
        duration: 0,
        y: "0",
      },
      {
        duration: 0.75,
        y: "-100%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    state ? timeline.current.play() : timeline.current.reverse();
  }, [state]);

  return (
    <div
      ref={(el) => (lockRef = el)}
      className="fixed inset-0 flex flex-col justify-around items-center w-full h-full z-50 bg-black bg-cover bg-center bg-opacity-20 bg-blend-multiply"
      style={{
        backgroundImage: "url('/templates/nostalgia/lockscreen.png')",
      }}
    >
      <div className="w-64 text-center ">
        <Image
          className="mx-auto mb-2 w-auto h-auto"
          src={"/assets/icons/zoejeton.svg"}
          width={20}
          height={20}
          alt="logo"
        />
        <h1 className="text-xl">We invite you to our wedding ceremony</h1>
      </div>

      <h1
        className={`${GenteRomantica.className} flex flex-col text-center text-6xl font-bold`}
      >
        <span>Zoel and Cali</span>
      </h1>
      <div className={`${Catamaran.className} absolute bottom-[30%] inset-x-10`}>
        <CountDown deadline="maret, 10, 2024" />
      </div>

      <div className="w-64">
        <h1 className="text-center text-sm uppercase">spesial for you</h1>
        <button
          onClick={() => setState(true)}
          className="relative rounded-full py-3 w-full bg-white text-black backdrop-filter backdrop-blur-md bg-opacity-50 mt-5"
        >
          <div className="absolute inset-y-0 left-0 h-full aspect-square rounded-full bg-black flex justify-center items-center z-10">
            <span
              className="w-4 aspect-square icon-[heroicons--envelope-open-20-solid]"
              style={{ color: "white" }}
            />
          </div>
          <h1 className="ml-5">Open Invitation</h1>
        </button>
      </div>
    </div>
  );
}
