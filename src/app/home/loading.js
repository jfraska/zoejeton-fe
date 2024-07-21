"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/layouts/preloader";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("overflow-hidden");
    }, 2500);
  }, []);

  return (
    <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
  );
}
