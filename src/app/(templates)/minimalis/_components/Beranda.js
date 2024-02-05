"use client";
import localFont from "next/font/local";

const runalto = localFont({
  src: "../_assets/fonts/runalto/runalto.ttf",
});

export default function Beranda() {
  return (
    <section className="relative w-full h-screen bg-[#9D9E9A]">
      <div className="absolute top-[10%] inset-x-0 flex flex-col gap-6 justify-start items-center px-6 text-center">
        <h2 className="text-xl">THE WEDDING OF</h2>
        <h1 className={`${runalto.className} text-5xl font-bold`}>
          Jeton & Zoe
        </h1>
        <h3 className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum
        </h3>
      </div>
      <div className="absolute bottom-[25%] inset-x-0 flex gap-2 justify-around items-center px-6 text-center text-2xl">
        <div className="inline-flex flex-col w-full justify-center items-center gap-1">
          <h2>30</h2>
          <h1 className={`${runalto.className} font-medium`}>day</h1>
        </div>
        <div className="inline-flex flex-col w-full justify-center items-center gap-1">
          <h2>30</h2>
          <h1 className={`${runalto.className} font-medium`}>hour</h1>
        </div>
        <div className="inline-flex flex-col w-full justify-center items-center gap-1">
          <h2>30</h2>
          <h1 className={`${runalto.className} font-medium`}>minute</h1>
        </div>
        <div className="inline-flex flex-col w-full justify-center items-center gap-1">
          <h2>30</h2>
          <h1 className={`${runalto.className} font-medium`}>second</h1>
        </div>
      </div>
    </section>
  );
}
