"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Bio() {
  return (
    <div className="relative md:my-10 max-w-[430px] mx-auto md:rounded-xl overflow-hidden bg-white pb-4">
      <div
        className="relative w-full h-[30vh] bg-cover"
        style={{
          backgroundImage: "url('/assets/images/palm.jpg')",
        }}
      >
        <Image
          src={"/assets/icons/logo.svg"}
          width={50}
          height={50}
          alt=""
          className="absolute -bottom-10 inset-x-0 mx-auto w-20 rounded-full border-[3px] border-white aspect-square bg-white"
        ></Image>
      </div>
      <div className="mt-14 w-full flex flex-col justify-center items-center gap-4 px-4">
        <div className="flex flex-col items-center">
          <h1 className="font-medium text-xl leading-tight">ZoeJeton</h1>
          <h2 className="text-sm">@zoejeton</h2>
        </div>

        <div className="mt-4 w-full flex items-center gap-2 bg-neutral-800 text-white rounded-xl p-3">
          <div className="flex justify-center items-center bg-white h-full p-3 rounded-xl">
            <Icon icon="solar:link-bold" color="black" width={20} />
          </div>
          <div>
            <h1 className="leading-tight">Website</h1>
            <h2 className="text-sm text-neutral-400">Lorem omasfj</h2>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center w-full">
          <h1>Galery</h1>
          <div className="flex items-center gap-1 text-sm text-neutral-600">
            <h1>More</h1>
            <Icon icon="carbon:arrow-up" width={20} rotate={1} />
          </div>
        </div>

        <div className="bg-black w-full h-60 rounded-xl"></div>
      </div>
    </div>
  );
}
