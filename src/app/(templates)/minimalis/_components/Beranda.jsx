"use client";
import localFont from "next/font/local";
import CountDown from "./CountDown";
import { countdown, couple, beranda } from "../_constants";

const runalto = localFont({
  src: "../../../../assets/fonts/runalto/runalto.ttf",
});

export default function Beranda() {
  return (
    <section
      className="relative w-full h-screen bg-[#9D9E9A] bg-cover bg-center text-white"
      name="beranda"
      style={{
        backgroundImage: "url('/assets/images/bg1.jpg')",
      }}
    >
      <div className="mx-auto flex flex-col gap-6 justify-start items-center px-10 text-center">
        <h2 className="text-xl mt-16">THE WEDDING OF</h2>
        <h1 className={`${runalto.className} text-5xl font-bold`}>
          {couple.groom} & {couple.bride}
        </h1>
        <h3 className="text-xs">{beranda.desc}</h3>
      </div>
      <div className={`${runalto.className} absolute bottom-[20%] inset-x-6`}>
        <CountDown deadline={countdown.date} />
      </div>
    </section>
  );
}
