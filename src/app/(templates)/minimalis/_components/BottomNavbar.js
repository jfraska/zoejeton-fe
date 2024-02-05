"use client";
import { Icon } from "@iconify/react";
import { navLinks } from "../_constants";

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 flex justify-start items-center md:justify-center overflow-x-auto bg-gray-900 backdrop-filter backdrop-blur-md bg-opacity-60">
      {navLinks.map((e) => (
        <button
          key={e.id}
          className="flex flex-col items-center justify-center px-8 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Icon icon={e.icon} color="white" width="15" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {e.title}
          </span>
        </button>
      ))}
    </nav>
  );
}
