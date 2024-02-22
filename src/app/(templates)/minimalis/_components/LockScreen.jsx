"use client";
import SwipeableButton from "@/components/SwipeButton";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";
import Image from "next/image";
import { couple } from "../_constants";

const runalto = localFont({
  src: "../../../../assets/fonts/runalto/runalto.ttf",
});

export default function LockScreen({ state, setState }) {
  return (
    <div
      className={`${
        state ? "hidden" : "absolute inset-0"
      } flex flex-col py-10 justify-around items-center bg-[#9D9E9A] w-full h-screen z-50 bg-cover text-white bg-center`}
      style={{
        backgroundImage: "url('/assets/images/bg1.jpg')",
      }}
    >
      <div className="w-[60%] text-center ">
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
        className={`${runalto.className} flex flex-col text-center text-6xl font-bold`}
      >
        <span>{couple.groom}</span> <span>&</span> <span>{couple.bride}</span>
      </h1>

      <div className="w-3/6">
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
