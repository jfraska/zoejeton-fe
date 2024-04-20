"use client";

import { useState } from "react";
import Image from "next/image";
import { faq } from "@/constants";
import FAQ from "./_components/FAQ";
import Brand from "./_components/Brand";
import Advertise from "./_components/Advertise";
import Button from "./_components/Button";

export default function Bio() {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className="relative md:my-10 max-w-[430px] px-5 pt-24 pb-5 mx-auto md:rounded-lg md:overflow-hidden bg-blend-multiply bg-black bg-opacity-20">
      <Image
        className="h-full -z-10"
        alt="background image"
        src="/assets/images/palm.jpg"
        objectFit="cover"
        layout="fill"
      />
      <button className="absolute top-4 right-4 w-10 aspect-square rounded-lg flex justify-center items-center shadow-lg bg-white">
        <Image
          src={"/assets/icons/qrcode.svg"}
          width={30}
          height={30}
          alt=""
          className="w-8 aspect-square"
        />
      </button>

      <Brand />

      <section className="mt-10 flex flex-col gap-2">
        <Button
          className="text-white bg-neutral-800 backdrop-filter backdrop-blur-md bg-opacity-80"
          title={"Website Undangan"}
          desc={"beranda zoejeton"}
          href={"/"}
        />
        <Button
          className="text-black bg-white backdrop-filter backdrop-blur-sm bg-opacity-80"
          title={"Katalog & Price List"}
          desc={"lihat desain undangan "}
          href={"/katalog"}
        />
      </section>

      <Advertise className="mt-8" />

      <section className="mt-10 w-full rounded-lg flex justify-between items-center p-3 bg-neutral-800 backdrop-filter backdrop-blur-md bg-opacity-80 shadow-lg">
        <div className="flex gap-2">
          <span
            className="w-5 aspect-square icon-[fluent--chat-20-regular]"
            style={{ color: "white" }}
          />
          <h1 className="text-[14px] text-white">Customer Care</h1>
        </div>
        <a
          href="https://wa.me/+6285161710045"
          target="_blank"
          className="text-[14px] bg-white h-full px-4 py-2 rounded-lg"
        >
          Contact
        </a>
      </section>

      <section className="mt-8 flex flex-col w-full shadow-lg">
        <div className="w-full p-4 text-white bg-neutral-800 backdrop-filter backdrop-blur-md bg-opacity-80 rounded-t-lg">
          <h1 className="text-[14px]">FAQ</h1>
        </div>

        <div className="w-full px-4 pt-4 pb-6 bg-white backdrop-filter backdrop-blur-md bg-opacity-80 rounded-b-lg">
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
      </section>

      <footer className="mt-20 text-white text-center p-3 text-[12px]">
        <p>Business Hours :</p>
        <p>Monday - Friday | 09.00 - 18.00 WIB</p>
        <p>Saturday | 10.00 - 16.00 WIB (Slow response)</p>
        <p>Sunday | Off</p>
        <p className="mt-10 text-[10px]">© All right reserved by ZoeJeton</p>
      </footer>
    </div>
  );
}
