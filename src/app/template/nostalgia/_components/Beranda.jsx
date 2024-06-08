"use client";

import { GenteRomantica } from "@/styles/fonts";

export default function Beranda() {
  return (
    <section
      className="flex relative w-full h-screen bg-black bg-cover bg-center bg-opacity-20 bg-blend-multiply"
      name="beranda"
      style={{
        backgroundImage: "url('/templates/nostalgia/beranda.png')",
      }}
    >
      <div className="mx-auto flex flex-col gap-6 justify-end items-center p-10 text-center">
        <h2 className="text-lg mt-16">PERNIKAHAN</h2>
        <h1 className={`${GenteRomantica.className} text-5xl font-medium`}>
          Zoel and Cali
        </h1>
        <h3 className="text-xs">Minggu, 30 September 2026</h3>
        <h3 className="text-xs">
        Glory be to Allah who has created humans in pairs. By asking for the Grace and Ridho of Allah SWT, we intend to invite you to our wedding reception.
        </h3>
        <h3 className="text-xs">QS AR-RUM 21</h3>
      </div>
    </section>
  );
}
