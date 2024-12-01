"use client";

import Editable from "@/components/container/customize/editable";
import { Section } from "@/components/container/customize/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";
import Image from "next/image";

export default function Beranda() {
  return (
    <Section
      className="bg-primary-bg text-primary-text w-full min-h-full flex flex-col justify-start items-center gap-4 text-center"
      id="beranda"
    >
      <div
        className="relative h-full w-full px-4 py-20"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className={`${Catamaran.className} text-lg`}>THE WEDDING OF</h2>
        <h1 className={`${Selina.className} text-6xl my-4`}>
          <Editable
            type="text"
            field="heading"
            section="beranda"
            className="outline-primary-text focus:outline-primary-text"
          />
        </h1>
        <Editable
          className="relative w-[50%] h-96 rounded-full overflow-hidden outline-primary-text focus:outline-primary-text"
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
          <Editable
            type="text"
            field="subheading"
            section="beranda"
            className={`${Catamaran.className} text-base outline-primary-text focus:outline-primary-text`}
          />
        </div>
      </div>
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
    </Section>
  );
}
