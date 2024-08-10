"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Selina, Catamaran } from "@/styles/fonts";
import gsap from "gsap";
import { LockScreen as LockScreenWrapper } from "@/components/container/wrapper-template";

export default function LockScreen({ type, id }) {
  const [state, setState] = useState(false);

  return (
    <LockScreenWrapper
      open={state}
      type={type}
      className="flex flex-col justify-around items-center"
      id={id}
    >
      <div className="flex flex-col text-left w-64">
        <h1 className={`${Selina.className} text-8xl text-white`}>
          <span>
            Zoel & <br /> Cali
          </span>
        </h1>
        <h2 className={`${Catamaran.className} inset-x-10 text-white`}>
          Minggu, 30 September 2026
        </h2>
      </div>
      <div
        className={`${Catamaran.className} w-64 text-center inset-x-10 mt-20`}
      >
        <Image
          className="w-5 aspect-square mx-auto mb-2"
          src={"/assets/icons/zoejeton-outline.svg"}
          width={20}
          height={20}
          alt="logo"
        />
        <h1 className={`${Catamaran.className} text-sm text-white`}>
          SPECIAL INVITATION
        </h1>
        <h1 className={`${Catamaran.className} text-sm text-white`}>
          Kepada Yth.
        </h1>
      </div>

      <div className="w-64">
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
