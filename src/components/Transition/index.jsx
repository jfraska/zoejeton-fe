"use client";

import { useRouter } from "next/navigation";
// import { animatePageOut } from "./anim";

export default function Transition({ href, children, className }) {
  const router = useRouter();

  const handleClick = () => {
    // animatePageOut(href, router);
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
}
