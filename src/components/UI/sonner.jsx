"use client";

import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#0a0a0a] group-[.toaster]:border-[#e5e5e5] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#737373]",
          actionButton:
            "group-[.toast]:bg-[#1e1e1e] group-[.toast]:text-[#fafafa]",
          cancelButton:
            "group-[.toast]:bg-[#f6f6f6] group-[.toast]:text-[#737373]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
