"use client";

import Image from "next/image";

export default function FloatingBar() {
  return (
    <div className="sticky flex justify-center items-center bottom-20 left-0 mx-5 z-40 w-10 h-10 border border-transparent rounded-full bg-gray-800 backdrop-filter backdrop-blur-md bg-opacity-60">
      <Image
        src={"/vercel.svg"}
        alt="music"
        width={20}
        height={20}
        className="w-auto h-auto"
      />
    </div>
  );
}
