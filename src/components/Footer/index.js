"use client";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { motion } from "framer-motion";
import localFont from "next/font/local";

import { Icon } from "@iconify/react";
import { faq } from "@/constants";
import FAQ from "@/components/FAQ";

const runalto = localFont({
  src: "../../assets/fonts/runalto/runalto.ttf",
});

export default function Footer() {
  const formRef = useRef();
  // const { scroll } =  useLocomotiveScroll();
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {};

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <footer
      data-scroll-section
      id="footer"
      className="relative w-full bg-black text-white px-[3%] md:pt-[5%] pt-[20%]"
    >
      <div className="absolute w-full top-0 left-0 h-3 footer-shadow" />
      <div
        data-scroll
        data-scroll-speed="-2"
        data-scroll-target="#footer"
        className="z-0"
      >
        <section
          className="h-auto md:min-h-[40vh] min-h-[50vh] mb-10 pl-5 md:pr-20 pr-5"
          id="faq"
        >
          <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-around">
            <div className="w-full">
              <h1 className="md:text-5xl text-2xl md:w-3/4 w-full">
                Frequently Asked Question
              </h1>
              <h1 className="md:text-5xl text-2xl w-3/4">(FAQ)</h1>
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
        <section className="mb-20 md:pr-20 pl-5 pr-5" id="contact">
          <div className="w-full flex md:flex-row flex-col  md:gap-0 gap-4 justify-around">
            <div className="w-full md:text-base text-sm md:flex hidden gap-2">
              <div className="mt-2 flex flex-col w-2/6">
                <h1 className="text-black-100 tracking-wide">Menu</h1>
                <h2 className="mt-5">Beranda</h2>
                <h2 className="">About Us</h2>
                <h2 className="">Featured</h2>
                <h2 className="">Katalog</h2>
                <h2 className="">Pricing</h2>
                <h2 className="">FAQ</h2>
                <h2 className="">Contact Us</h2>
              </div>
              <div className="mt-2 flex flex-col w-2/6">
                <h1 className="text-black-100 tracking-wide">Support</h1>
                <h2 className="mt-5">Sarasvati</h2>
                <h2 className="">Xendit</h2>
              </div>
            </div>
            <div className="w-full">
              <h1 className="md:text-4xl text-2xl">Hubungi Kami</h1>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full mt-5 flex flex-col gap-2 md:text-base text-sm"
              >
                <div className="relative w-full h-fit">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="appearance-none input w-full bg-transparent py-2 border-b placeholder:text-black-100 text-black-100 border-[#bfbfbf] hover:placeholder:text-white hover:text-whit focus:outline-none focus:placeholder:text-white focus:text-white"
                  />
                  <span class="underline"></span>
                </div>
                <div className="relative w-full h-fit">
                  <textarea
                    type="text"
                    name="pesan"
                    value={form.pesan}
                    onChange={handleChange}
                    placeholder="Pesan"
                    className="appearance-none input w-full bg-transparent py-2 border-b placeholder:text-black-100 text-black-100 border-[#bfbfbf] hover:placeholder:text-white hover:text-whit focus:outline-none focus:placeholder:text-white focus:text-white"
                  />
                  <span class="underline mb-1.5"></span>
                </div>
                <button className="flex px-1 mt-5 items-center gap-1 bg-white rounded-full w-fit text-black">
                  <h1 className="uppercase text-xl leading-tight">
                    send whatsapp
                  </h1>
                  <Icon
                    icon="carbon:arrow-up"
                    rotate={1}
                    color="black"
                    width="20"
                  />
                </button>
              </form>
            </div>
          </div>
          {/* <div className="w-fit md:block hidden mt-16 md:text-base text-sm">
            <h1 className="text-black-100 tracking-wide">Menu</h1>
            <h2 className="mt-5">Beranda</h2>
            <h2 className="">About Us</h2>
            <h2 className="">Featured</h2>
            <h2 className="">Katalog</h2>
          </div> */}
        </section>
        <div className="w-full md:block hidden mb-2 border-b border-white" />
        <div className="py-10 h-fit flex justify-center items-center">
          {/* <h1>{""}</h1> */}
          <h1
            className={`${runalto.className} md:hidden block leading-tight text-7xl tracking-widest`}
          >
            ZoeJeton
          </h1>
          <h1 className="text-xs md:block hidden">copyright ©2024</h1>
        </div>
      </div>
    </footer>
  );
}
