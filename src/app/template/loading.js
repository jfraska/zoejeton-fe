"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Runalto } from "@/styles/fonts";
import { Progress } from "@/components/UI/progress";

export default function Loading({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div
      className={`${
        loading ? "fixed" : "hidden"
      }  inset-0 w-full h-full bg-white flex flex-col gap-2 justify-center items-center p-20 z-[99]`}
    >
      <Image
        src="/assets/icons/zoejeton-outline-black.svg"
        width={300}
        height={300}
        priority
        alt="logo"
        className="w-8 aspect-square"
      />
      <h1 className={`${Runalto.className} font-semibold text-2xl mb-5 mt-2`}>
        ZoeJeton
      </h1>
      <Progress value={100} className="w-48 h-2 mb-20" />
      <p className="absolute inset-x-0 bottom-10 text-center px-20">
        For a better experience use Google Chrome or Safari
      </p>
    </div>
  );
}
