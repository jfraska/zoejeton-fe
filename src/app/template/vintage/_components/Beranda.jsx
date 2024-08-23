"use client";

import Editable from "@/components/container/editable";
import { Section } from "@/components/container/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";
import Image from "next/image";

export default function Beranda() {
  return (
    <Section
      className="relative bg-primary-bg w-full min-h-full flex flex-col justify-start items-center gap-4 text-center pt-10"
      id="beranda"
    >
      <div className="relative h-full w-full px-4 py-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="/templates/vintage/flower1.png"
            alt="decor tl"
            className="absolute top-0 px-6"
          />
          <img
            src="/templates/vintage/flower2.png"
            alt="decor tr"
            className="absolute left-0 top-32 z-10"
          />
          <img
            src="/templates/vintage/flower3.png"
            alt="decor bl"
            className="absolute bottom-52 right-0 z-10"
          />
        </div>
        <Editable
          className="relative mt-[95px] w-[85%] h-[550px] rounded-full overflow-hidden outline-black focus:outline-black"
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
        <div className="pt-10">
          <h1 className="text-lg font-medium text-primary-text">
            Wedding Invitation
          </h1>
          <h1 className={`${Selina.className} text-6xl my-4 text-primary-text`}>
            <Editable
              type="text"
              field="heading"
              section="beranda"
              className="outline-black focus:outline-black"
            />
          </h1>
        </div>
      </div>
    </Section>
  );
}
