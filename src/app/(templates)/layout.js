"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Template({ children }) {
  // const router = useRouter();

  return (
    <>
      <Link
        href={"/"}
        className="fixed top-2 left-2 flex justify-center items-center z-[99] aspect-square w-10 bg-black rounded-full hover:bg-[#252525]"
      >
        <Icon
          icon="carbon:arrow-up"
          className="text-white"
          width="20"
          rotate={-1}
        />
      </Link>
      <main className="relative w-full md:w-[430px] mx-auto h-screen">
        {children}
      </main>
    </>
  );
}
