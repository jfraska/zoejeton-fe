"use client";

import Editable from "@/components/container/template/editable";
import { Section } from "@/components/container/wrapper-template";
import { GenteRomantica } from "@/styles/fonts";
import Image from "next/image";

export default function Beranda() {
  return (
    <>
      <div className="sticky inset-0 w-full h-full -z-0">
        <Image
          fill
          src="/templates/nostalgia/beranda.png"
          alt="image"
          className="bg-cover brightness-75"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <Section className=" inset-0 w-full h-full" id="beranda">
        <div className="mx-auto flex flex-col gap-6 justify-end items-center p-10 text-center">
          <h2 className="text-lg mt-16">PERNIKAHAN</h2>
          <h1 className={`${GenteRomantica.className} text-5xl font-medium`}>
            <Editable type="text" field="heading" section="beranda" />
          </h1>
          <h3 className="text-xs">
            <Editable type="text" field="date" section="beranda" />
          </h3>
          <h3 className="text-xs">
            <Editable type="text" field="subheading" section="beranda" />
          </h3>
          <h3 className="text-xs">
            <Editable type="text" field="references" section="beranda" />
          </h3>
        </div>
      </Section>
    </>
  );
}
