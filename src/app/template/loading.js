"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Progress } from "@/components/UI/progress";

export default function Loading() {
  return (
    <div className="relative w-full h-screen bg-white flex flex-col gap-8 justify-center items-center p-20">
      <Image
        src="/assets/icons/zoejeton-outline-black.svg"
        width={300}
        height={300}
        priority
        className="w-9 aspect-square"
      />
      <Progress value={100} className="w-48 h-2 mb-20" />
      <p className="absolute inset-x-0 bottom-10 text-center px-20">
        For a better experience use Google Chrome or Safari
      </p>
    </div>
  );
}
