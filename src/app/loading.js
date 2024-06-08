"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/layouts/preloader";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const hostname = process.env.NEXT_PUBLIC_ROOT_DOMAIN
    ? process.env.NEXT_PUBLIC_ROOT_DOMAIN
    : "localhost";

  useEffect(() => {
    if (
      pathname === "/bio" ||
      window.location.hostname === `template.${hostname}`
    ) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
  );
}
