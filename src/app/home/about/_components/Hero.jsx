"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Gunterz } from "@/styles/fonts";
import Statue from "@/components/container/statue";
import CursorProvider from "@/context/cursor";
import { zoomOut } from "@/libs/motion";

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
          <motion.div variants={zoomOut(3, 1)} className="w-full h-full">
            <Statue />
          </motion.div>
        </div>
      </main>
    </CursorProvider>
  );
}
