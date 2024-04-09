"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import { animatePageIn } from "@/utils/animations";

export default function Template({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    animatePageIn();
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div
        id="banner"
        className={`${
          isLoading ? "hidden" : "fixed"
        } min-h-screen bg-white inset-0 w-full z-[99]`}
      />
      {children}
      <Analytics />
    </div>
  );
}
