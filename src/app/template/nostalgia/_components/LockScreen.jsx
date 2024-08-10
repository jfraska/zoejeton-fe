"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GenteRomantica, Catamaran } from "@/styles/fonts";
import gsap from "gsap";
import CountDown from "./CountDown";
import { LockScreen as LockScreenWrapper } from "@/components/container/wrapper-template";

export default function LockScreen({ type }) {
  const [state, setState] = useState(false);

  return (
    <LockScreenWrapper
      open={state}
      type={type}
      className="flex flex-col justify-around items-center "
      style={{
        backgroundImage: "url('/templates/nostalgia/lockscreen.png')",
      }}
    >
      <div className="w-64 text-center ">
        <Image
          className="w-8 aspect-square mx-auto mb-2"
          src={"/assets/icons/zoejeton-outline.svg"}
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
      <div
        className={`${Catamaran.className} absolute bottom-[30%] inset-x-10`}
      >
        <CountDown deadline="maret, 10, 2024" />
      </div>

      <div className="w-64">
        <h1 className="text-center text-sm uppercase">spesial for you</h1>

        {type === "lock" && (
          <button
            onClick={() => setState(true)}
            className="relative rounded-full p-2 w-full bg-white text-black flex justify-between items-center backdrop-filter backdrop-blur-md bg-opacity-50 mt-5"
          >
            <div className="h-10 aspect-square rounded-full bg-black flex justify-center items-center z-10">
              <span
                className="w-4 aspect-square icon-[heroicons--envelope-open-20-solid]"
                style={{ color: "white" }}
              />
            </div>
            <h1 className="w-full text-center">Buka Undangan</h1>
          </button>
        )}
      </div>
    </LockScreenWrapper>
  );
}
