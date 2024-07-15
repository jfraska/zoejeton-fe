"use client";

import { Selina, Catamaran } from "@/styles/fonts";

export default function Beranda() {
  return (
    <section
      className="bg-white relative w-full h-full flex flex-col justify-start items-center gap-4 text-center"
      name="story"
    >
      <div className="rounded-2xl overflow-hidden max-w-sm p-4 flex flex-col items-center py-40">
        <img
          src="/templates/classic/beranda.png"
          alt="love story"
          className="w-56 h-96 rounded-full"
        />
        <div className="p-6">
          <img
            src="/templates/classic/decor-tl.png"
            alt="decor tl"
            className="w-52 aspect-square absolute top-0 left-0"
          />
          <img
            src="/templates/classic/decor-tr.png"
            alt="decor tr"
            className="w-40 absolute top-0 right-0"
          />
          <img
            src="/templates/classic/decor-bl.png"
            alt="decor bl"
            className="w-52 absolute bottom-0 left-0"
          />
          <h2 className={`${Catamaran.className} text-lg`}>THE WEDDING OF</h2>
          <h1 className={`${Selina.className} text-6xl my-4`}>Zoel & Cali</h1>
          <p className={`${Catamaran.className} text-base`}>
            Glory be to Allah who has created humans in pairs. By asking for the
            Grace and Ridho of Allah SWT, we intend to invite you to our wedding
            reception.
          </p>
        </div>
      </div>
    </section>
  );
}
