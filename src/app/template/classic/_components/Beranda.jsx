"use client";

import Editable from "@/components/container/editable";
import { Section } from "@/components/container/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";
import Image from "next/image";

export default function Beranda() {
  return (
    <Section
      className="bg-white w-full min-h-full flex flex-col justify-start items-center gap-4 text-center"
      id="beranda"
    >
      <div className="relative h-full w-full px-4 py-20">
        <h2 className={`${Catamaran.className} text-lg text-black`}>
          THE WEDDING OF
        </h2>
        <h1 className={`${Selina.className} text-6xl my-4 text-black`}>
          <Editable
            type="text"
            field="heading"
            section="beranda"
            className="outline-black focus:outline-black"
          />
        </h1>
        <Editable
          className="relative w-[50%] h-96 rounded-full overflow-hidden outline-black focus:outline-black"
          type="image"
          field="image"
          section="beranda"
        >
          <Image
            fill
            alt="image"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Editable>
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
          <Editable
            type="text"
            field="subheading"
            section="beranda"
            className={`${Catamaran.className} text-base text-black outline-black focus:outline-black`}
          />
        </div>
      </div>
    </Section>
  );
}
