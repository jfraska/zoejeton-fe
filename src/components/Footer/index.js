"use client";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { motion } from "framer-motion";

import { Icon } from "@iconify/react";
import { feature } from "@/constants";

export default function Footer() {
  const formRef = useRef();
  // const { scroll } =  useLocomotiveScroll();
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

  // useEffect(() => {
  //   if (scroll) {
  //     // scroll.on("call", (value, way, obj) => {
  //     //   if (way === "enter") {
  //     //     if (value === "noShrinkBottom") {
  //     //     }
  //     //   }
  //     //   // else if (way === "exit") {
  //     //   //   if (value === "noShrinkBottom") {
  //     //   //     bottom = false;
  //     //   //   }
  //     //   // }
  //     // });
  //   }

  //   return () => {
  //     scroll && scroll.destroy();
  //   };
  // }, [scroll]);

  return (
    <footer
      data-scroll-section
      id="footer"
      className="relative w-full bg-[#121212] text-white px-[3%] pt-[4%] pb-[1%]"
    >
      <div className="absolute w-full top-0 left-0 h-3 footer-shadow" />
      <div
        data-scroll
        data-scroll-speed="-2"
        data-scroll-target="#footer"
        className="z-0"
      >
        <section className="">
          <div className="w-full pl-5 pr-20 flex justify-around">
            <div className="w-full">
              <h1 className="text-5xl w-2/4">
                Frequently Asked Question (FAQ)
              </h1>
            </div>
            <div className="w-full">
              {feature.map((e) => (
                <div
                  key={e.id}
                  className="flex w-full py-2 pr-2 border-b border-white items-end justify-between"
                >
                  <h1 className="text-lg leading-tight">
                    {e.title}
                    {/* <span className="text-base">{e.desc}</span> */}
                  </h1>
                  <Icon icon="ic:outline-plus" color="white" width="20" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mt-16 border-b border-white" />
        </section>
        <section className="pt-[2%]">
          <div className="w-full pl-5 pr-20 flex justify-around">
            <div className="w-full pl-5 flex">
              <div className="mt-2 flex flex-col w-2/6">
                <h1 className="font-light tracking-wide">Menu</h1>
                <h2 className="mt-5">Beranda</h2>
                <h2 className="">About Us</h2>
                <h2 className="">Featured</h2>
                <h2 className="">Katalog</h2>
              </div>
              <div className="mt-2 flex flex-col w-2/6">
                <h1 className="font-light tracking-wide">Support</h1>
                <h2 className="mt-5">Sarasvati</h2>
                <h2 className="">Xendit</h2>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-5xl font-medium">Hubungi Kami</h1>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-2/3 mt-5 flex flex-col gap-2 text-base"
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="appearance-none hover-footer-underline-animation bg-transparent py-2 focus:outline-none placeholder:text-white text-white border-b border-slate-400"
                />
                <div className="flex justify-around gap-10">
                  <select className="block appearance-none hover-footer-underline-animation text-white w-full bg-transparent border-b border-slate-400 py-2 leading-tight focus:outline-none">
                    <option>
                      Really long option that will likely overlap the chevron
                    </option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <select className="block appearance-none hover-footer-underline-animation text-white w-full bg-transparent border-b border-slate-400 py-2 leading-tight focus:outline-none">
                    <option>
                      Really long option that will likely overlap the chevron
                    </option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <button className="flex px-2 mt-5 items-center gap-1 bg-white rounded-full w-fit text-black">
                  <h1 className="uppercase text-lg">send whatsapp</h1>
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
          <div className="w-full mt-16 border-b border-white" />
          <h1 className="w-fit ml-auto mt-2 text-xs">copyright © zoejeton</h1>
        </section>
      </div>
    </footer>
  );
}
