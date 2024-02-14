"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";

export default function TransitionLink({ href, children, className }) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
