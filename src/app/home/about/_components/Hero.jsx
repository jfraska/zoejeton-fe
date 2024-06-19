"use client";
import { useRef } from "react";
import { Gunterz } from "@/styles/fonts";
import Statue from "@/components/container/statue";
import CursorProvider from "@/context/cursor";

export default function Hero() {
  const containerRef = useRef();
  return (
    <CursorProvider containerRef={containerRef}>
      <main ref={containerRef}>
        <div className="relative w-full h-screen bg-black">
          <h1
            className={`${Gunterz.className} absolute mt-24 inset-x-0  w-full flex justify-center font-title text-[250px] text-neutral-200 uppercase`}
          >
            luxury
          </h1>
          <Statue />
        </div>
      </main>
    </CursorProvider>
  );
}
