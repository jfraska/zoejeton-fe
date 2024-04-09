"use client";

import { Icon } from "@iconify/react";

export default function Back() {
  return (
    <a
      href="/"
      className="fixed top-2 left-2 flex justify-center items-center z-[60] aspect-square w-10 bg-black rounded-full hover:bg-[#252525]"
    >
      <Icon
        icon="carbon:arrow-up"
        className="text-white"
        width="20"
        rotate={-1}
      />
    </a>
  );
}
