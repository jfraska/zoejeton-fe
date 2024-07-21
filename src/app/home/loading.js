"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/layouts/preloader";

export default function Loading({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <AnimatePresence mode="wait">
          <Preloader />
        </AnimatePresence>
      ) : (
        children
      )}
    </>
  );
}
