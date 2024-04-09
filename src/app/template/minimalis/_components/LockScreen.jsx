"use client";
import { useEffect, useRef, useState } from "react";
import SwipeableButton from "@/components/SwipeButton";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Runalto } from "@/styles/fonts";
import gsap from "gsap";

export default function LockScreen({ data }) {
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
      className="absolute inset-0 flex flex-col justify-around items-center bg-[#9D9E9A] w-full h-full z-50 bg-cover text-white bg-center"
      style={{
        backgroundImage: "url('/assets/images/bg1.jpg')",
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
        className={`${Runalto.className} flex flex-col text-center text-6xl font-bold`}
      >
        <span>{data.content.couple.groom}</span> <span>&</span>
        <span>{data.content.couple.bride}</span>
      </h1>

      <div className="w-64">
        <h1 className="text-center text-sm uppercase mb-2">
          spesial invitation
        </h1>
        <SwipeableButton
          color="#000"
          mainText="Buka undangan"
          onSuccess={() => setState(true)}
          caret={
            <Icon
              icon="heroicons:envelope-open-20-solid"
              color="white"
              width="15"
            />
          }
        />
      </div>
    </div>
  );
}
