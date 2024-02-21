"use client";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";
import Image from "next/image";
import SlideButton from 'react-slide-button';

const runalto = localFont({
  src: "../_assets/fonts/runalto/runalto.ttf",
});


export default function LockScreen({state, setState}) {
  return (
    <div
      className={`${state ? "hidden" : "absolute inset-0"} flex flex-col py-10 justify-around items-center bg-black w-full h-screen z-50 bg-cover text-white bg-center`}
      style={{
        backgroundImage: "url('/bg1.jpg')",
      }}
    >
        <div className="w-[60%] text-center ">
        <Image className="mx-auto mb-2" src={"/images/logo.svg"} width={20} height={20} />
      <h1 className="text-xl">
        We invite you to our wedding ceremony
      </h1>
        </div>

      <h1
        className={`${runalto.className} flex flex-col text-center text-6xl font-bold`}
      >
        <span>Jeton</span> <span>&</span> <span>Zoe</span>
      </h1>

      <div>
      <h1 className="text-center text-sm uppercase mb-2">spesial invitation</h1>
      <SlideButton 
      mainText="buka undangan"
      caret={<Icon icon="heroicons:envelope-open-20-solid" color="white" width="15" />}
      classList="my-class"
        caretClassList="my-caret-class"
        overlayClassList="my-overlay-class"
      onSlideDone={function () {
        setState(true);
        }} 
        />
      </div>
    </div>
  );
}
