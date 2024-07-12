"use client";

import { Selina, Catamaran } from "@/styles/fonts";

export default function Beranda() {
  return (
    <section
      className="flex relative w-full h-screen bg-cover bg-opacity-20 bg-blend-multiply"
      name="beranda"
      style={{
        backgroundImage: "url('/templates/elegance/beranda.png')",
      }}
    >
      <div className="mx-auto flex flex-col gap-10 justify-around items-center p-10 text-center text-white">
        <div className="flex flex-col gap-5">
        <h2 className={`${Catamaran.className} text-lg`}>THE WEDDING OF</h2>
        <h1 className={`${Selina.className} text-5xl font-medium`}>
          Zoel & Cali
        </h1>
        <h3 className={`${Catamaran.className} text-base`}>Minggu, 30 September 2026</h3>
        </div>
        <h3 className={`${Catamaran.className} text-base w-72`}>
        Glory be to Allah who has created humans in pairs. By asking for the Grace and Ridho of Allah SWT, we intend to invite you to our wedding reception.
        </h3>
      </div>
    </section>
  );
}
