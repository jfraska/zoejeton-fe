"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { faq } from "@/constants";
import FAQ from "@/components/container/faq";
import Contact from "@/components/container/contact";

export default function Footer() {
  const [selected, setSelected] = useState(null);
  const pathname = usePathname();

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <footer
      id="footer"
      className="relative w-full text-white bg-black p-[5%] min-h-fit -z-0"
    >
      {pathname === "/" && (
        <section className="h-auto min-h-fit md:pr-20" id="faq">
          <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-around">
            <div className="w-full">
              <h1 className="text-4xl md:w-3/4 w-full">
                Frequently Asked Question
              </h1>
              <h1 className="text-4xl w-3/4">(FAQ)</h1>
            </div>
            <div className="w-full">
              {faq.map((faq, index) => (
                <FAQ
                  faq={faq}
                  index={index}
                  key={index}
                  toggle={toggle}
                  selected={selected}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pt-10 pb-20 md:pr-20" id="contact">
        <div className="w-full flex md:flex-row flex-col-reverse md:gap-0 gap-14 justify-around">
          <div className="w-full text-base flex gap-4">
            <div className="hidden md:flex flex-col md:w-2/6 w-full">
              <h2 className="">Home</h2>
              <h2 className="">About Us</h2>
              <h2 className="">Featured</h2>
              <h2 className="">Katalog</h2>
              <h2 className="">FAQ</h2>
              <h2 className="">Contact Us</h2>
            </div>
            <div className="flex flex-col md:w-2/6 w-full">
              <h2 className="">Discount Code</h2>
              <h2 className="">Warranty</h2>
              <h2 className="">Terms of Service</h2>
              <h2 className="">Policy</h2>
            </div>
            <div className="flex flex-col md:w-2/6 w-full">
              <a
                href="https://www.instagram.com/zoejeton?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className=""
              >
                Instagram
              </a>
              <h2 className="">Tiktok</h2>
            </div>
          </div>
          <Contact />
        </div>
      </section>

      <h1 className="absolute bottom-5 md:inset-x-0 left-[5%] text-xs md:text-center text-left">
        Copyright ©2024 ZoeJeton. Alright Reserved
      </h1>
    </footer>
  );
}
