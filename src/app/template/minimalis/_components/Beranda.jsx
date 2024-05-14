"use client";

import { Runalto } from "@/styles/fonts";
import CountDown from "./CountDown";

export default function Beranda({ data }) {
  return (
    <section
      className="relative w-full h-screen bg-[#9D9E9A] bg-cover bg-center text-white bg-opacity-20 bg-blend-multiply"
      name="beranda"
      style={{
        backgroundImage: "url('/assets/templates/minimalis/5.heic')",
      }}
    >
      <div className="mx-auto flex flex-col gap-6 justify-start items-center px-10 text-center">
        <h2 className="text-xl mt-16">THE WEDDING OF</h2>
        <h1 className={`${Runalto.className} text-5xl font-medium`}>
          {data.content.couple.groom} & {data.content.couple.bride}
        </h1>
        <h3 className="text-xs">{data.content.beranda.desc}</h3>
      </div>
      <div className={`${Runalto.className} absolute bottom-[20%] inset-x-6`}>
        <CountDown deadline={data.content.date.akad} />
      </div>
    </section>
  );
}
