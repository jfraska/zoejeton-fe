"use client";

import { useEffect } from "react";
import { animate, stagger } from "motion";
import { Runalto } from "@/styles/fonts";
import CountDown from "./CountDown";
import Editable from "@/components/container/template/editable";
import { Section } from "@/components/container/template/wrapper-template";

export default function Beranda() {
  useEffect(() => {
    animate(
      ".animate",
      { x: 0 },
      {
        delay: stagger(0.1),
        duration: 0.5,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
  }, []);

  return (
    <Section className="h-full" id="beranda">
      <div className="mx-auto flex flex-col gap-6 justify-start items-center px-10 text-center">
        <h2 className="text-lg mt-16 animate">THE WEDDING OF</h2>
        <h1 className={`${Runalto.className} text-5xl font-medium`}>
          <Editable type="text" field="heading" section="beranda" />
        </h1>
        <h3 className="text-xs">
          <Editable type="text" field="subheading" section="beranda" />
        </h3>
      </div>
      <div className={`${Runalto.className} absolute bottom-[20%] inset-x-10`}>
        <Editable type="date" field="date" section="live-streaming">
          <CountDown />
        </Editable>
      </div>
    </Section>
  );
}
