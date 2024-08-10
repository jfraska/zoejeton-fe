"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Selina, Catamaran } from "@/styles/fonts";
import gsap from "gsap";
import { LockScreen as LockScreenWrapper } from "@/components/container/wrapper-template";
import Editable from "@/components/container/editable";

export default function LockScreen({ type, id }) {
  const [state, setState] = useState(false);

  return (
    <LockScreenWrapper
      open={state}
      type={type}
      className="flex flex-col justify-around items-center"
      id={id}
    >
      <div className="flex flex-col text-center w-64">
        <Image
          className="w-6 aspect-square mx-auto mb-5"
          src={"/assets/icons/zoejeton-outline.svg"}
          width={16}
          height={20}
          alt="logo"
        />
        <h1 className={`${Selina.className} text-7xl text-white`}>
          <Editable type="text" field="name" section="lockscreen" />
        </h1>
        <h2 className={`${Catamaran.className} inset-x-10 text-white`}>
          <Editable type="text" field="date" section="lockscreen" />
        </h2>
      </div>
      <div
        className={`${Catamaran.className} w-64 text-center inset-x-10 mt-20`}
      >
        <h1 className={`${Catamaran.className} text-sm text-white`}>
          <Editable type="text" field="heading" section="lockscreen" />
        </h1>
        <h1 className={`${Catamaran.className} text-sm text-white`}>
          <Editable type="text" field="subheading" section="lockscreen" />
        </h1>
      </div>

      <div className="w-64">
        {type === "lock" && (
          <button
            onClick={() => setState(true)}
            className="relative rounded-full py-3 w-full bg-white text-black backdrop-filter backdrop-blur-md bg-opacity-50"
          >
            <div className="absolute inset-y-0 left-0 h-full aspect-square rounded-full bg-black flex justify-center items-center z-10">
              <span
                className="w-4 aspect-square icon-[heroicons--envelope-open-20-solid]"
                style={{ color: "white" }}
              />
            </div>
            <h1 className="ml-5">geser-buka</h1>
          </button>
        )}
      </div>
    </LockScreenWrapper>
  );
}
