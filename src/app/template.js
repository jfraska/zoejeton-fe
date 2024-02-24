"use client";

import { useEffect } from "react";
// import { animatePageIn } from "@/animations";

export default function Template({ children }) {
  // useEffect(() => {
  //   animatePageIn();
  // }, []);

  return (
    <div>
      {/* <div
        id="transition-element"
        className="w-full h-screen bg-black z-[99] fixed top-0 left-0"
      /> */}
      {children}
    </div>
  );
}
