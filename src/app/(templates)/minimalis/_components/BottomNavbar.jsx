"use client";
import { Icon } from "@iconify/react";
import { navLinks } from "../_constants";
import { Link } from "react-scroll";

export default function BottomNavbar() {
  return (
    <nav className="sticky bottom-0 left-0 w-full z-40 flex justify-start items-center overflow-x-auto backdrop-filter backdrop-blur-md bg-opacity-50">
      {navLinks.map((e) => (
        <Link
          key={e.id}
          activeClass="bottom-active"
          smooth
          spy
          className="flex flex-col items-center justify-center px-8 py-2 hover:bg-[#1e1e1e]"
          to={e.link}
          name={e.link}
        >
          <Icon icon={e.icon} color="white" width="15" />
          <span className="text-[10px] text-white">{e.title}</span>
        </Link>
      ))}
    </nav>
  );
}
