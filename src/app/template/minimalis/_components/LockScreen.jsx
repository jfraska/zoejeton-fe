"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Runalto } from "@/styles/fonts";
import gsap from "gsap";
import CustomizeContext from "@/context/customize";

export default function LockScreen({ children, ...props }) {
  let lockRef = useRef(null);
  const timeline = useRef();
  const [state, setState] = useState(false);
  const { dataGuest } = useContext(CustomizeContext);

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
    <>
      <div
        ref={(el) => (lockRef = el)}
        className="absolute inset-0 flex flex-col justify-around items-center w-full h-full z-50 bg-black bg-cover bg-center bg-opacity-20 bg-blend-multiply"
        style={{
          backgroundImage: "url('/templates/minimalis/7.heic')",
        }}
        // id="cover"
      >
        <div className="max-w-xs text-center ">
          <Image
            className="w-8 aspect-square mx-auto mb-2"
            src={"/assets/icons/zoejeton-outline.svg"}
            width={20}
            height={20}
            alt="logo"
          />
          <h1 className="mt-5 text-xl">
            We invite you to our wedding ceremony
          </h1>
        </div>

        <h1
          className={`${Runalto.className} flex flex-col text-center text-6xl font-bold`}
        >
          <span>Jeton</span> <span>&</span>
          <span>Zoe</span>
        </h1>

        <div className="w-64">
          <h1 className="text-center text-sm uppercase">spesial invitation</h1>
          <h1 className="text-center font-medium capitalize mt-2">
            {dataGuest?.name || "guest"}
          </h1>
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
        </div>
      </div>

      {state && <div {...props}>{children}</div>}
    </>
  );
}
