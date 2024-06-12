"use client";

import { WaContact } from "@/libs/contact";

export default function Header() {
  return (
    <header className="relative w-full md:pt-[20vh] pt-[15vh] pb-[10vh] text-black  bg-opacity-30 flex flex-col md:items-center items-start px-[3%] justify-center">
      <h1 className="text-2xl md:text-center text-left uppercase w-2/3">
        Tentukan tema, warna, ornament, dan impian lain yang kamu inginkan
        bersama tim desain yang sudah ahli dibidangnya.
      </h1>
      <button
        onClick={() => WaContact()}
        className="group mt-7 py-1 flex gap-2 uppercase px-2 border border-black rounded-full text-black hover:bg-black hover:text-white hover:scale-110 transition-all ease-in-out duration-200"
      >
        <h1>Konsultasi Sekarang</h1>
        <span
          className="w-5 text-black group-hover:text-white aspect-square icon-[carbon--arrow-up]"
          style={{ transform: "rotate(90deg)" }}
        />
      </button>
    </header>
  );
}
