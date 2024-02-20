"use client";
import { useRef } from "react";
import Statue from "@/components/Statue";
import CursorProvider from "@/Providers/CursorProvider";

export default function Hero() {
  const containerRef = useRef();
  return (
    <CursorProvider containerRef={containerRef}>
      <main ref={containerRef}>
        <div className="w-full h-screen bg-black">
          <Statue />
        </div>
      </main>
    </CursorProvider>
  );
}
