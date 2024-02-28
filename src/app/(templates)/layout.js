"use client";

import { Icon } from "@iconify/react";
// import { useRouter } from "next/navigation";

export default function TemplateLayout({ children }) {
  // const router = useRouter();

  return (
    <>
      <a
        href="/"
        className="fixed top-2 left-2 flex justify-center items-center z-[99] aspect-square w-10 bg-black rounded-full hover:bg-[#252525]"
      >
        <Icon
          icon="carbon:arrow-up"
          className="text-white"
          width="20"
          rotate={-1}
        />
      </a>
      <div className="relative w-full md:w-[430px] mx-auto h-screen">
        {children}
      </div>
    </>
  );
}
