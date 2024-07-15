"use client";

import Editable from "@/components/container/editable";
import { GenteRomantica } from "@/styles/fonts";

export default function Beranda() {
  return (
    <section
      className="flex relative w-full h-full bg-black bg-cover bg-center bg-opacity-20 bg-blend-multiply"
      name="beranda"
      style={{
        backgroundImage: "url('/templates/nostalgia/beranda.png')",
      }}
    >
      <div className="mx-auto flex flex-col gap-6 justify-end items-center p-10 text-center">
        <h2 className="text-lg mt-16">PERNIKAHAN</h2>
        <h1 className={`${GenteRomantica.className} text-5xl font-medium`}>
          <Editable type="text" field="heading" section="beranda" />
        </h1>
        <h3 className="text-xs">Minggu, 30 September 2026</h3>
        <h3 className="text-xs">
          <Editable type="text" field="subheading" section="beranda" />
        </h3>
        <h3 className="text-xs">QS AR-RUM 21</h3>
      </div>
    </section>
  );
}
