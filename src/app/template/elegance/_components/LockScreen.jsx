"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Selina, Catamaran } from "@/styles/fonts";
import gsap from "gsap";

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
      className="fixed inset-0 flex flex-col justify-around items-center w-full h-full z-50 bg-black bg-cover bg-top bg-opacity-20 bg-blend-multiply"
      style={{
        backgroundImage: "url('/templates/elegance/lockscreen.png')",
      }}
    >
      <div className="flex flex-col text-left text-left w-64">
      <h1
        className={`${Selina.className} text-7xl text-white`}
      >
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
          className="w-8 aspect-square mx-auto mb-2"
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
      </div>
    </div>
  );
}
