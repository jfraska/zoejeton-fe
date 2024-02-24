"use client";
import localFont from "next/font/local";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const runalto = localFont({
  src: "../../assets/fonts/runalto/runalto.ttf",
});

export default function Bio() {
  return (
    <div className="relative max-w-[500px] mx-auto ">
      <main className="relative w-full h-screen">
        <div
          className="absolute inset-0 -z-10 w-full h-full bg-cover"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/collection/2091539/1000x900')",
          }}
        />
        <div className="flex flex-col pt-[20%] w-full items-center">
          <h1 className="text-green-400 text-center font-serif uppercase text-5xl leading-[0.8]">
            Website Invitation
          </h1>
        </div>
        <div className="absolute inset-x-0 flex flex-col items-center gap-2 bottom-[10%]">
          <button
            href="/"
            className="flex justify-between w-[70%] py-3 px-8 items-center gap-1 bg-black border border-transparent rounded-full text-white backdrop-filter backdrop-blur-md bg-opacity-50"
          >
            <h1 className="uppercase text-lg font-medium">Website</h1>
            <Icon icon="carbon:arrow-up" rotate={1} color="white" width="25" />
          </button>
          {/* <button className="flex justify-between w-[70%] py-3 px-8 items-center gap-1 bg-black border border-transparent rounded-full text-white backdrop-filter backdrop-blur-md bg-opacity-50">
            <h1 className="uppercase text-lg font-medium">Katalog</h1>
            <Icon icon="carbon:arrow-up" rotate={1} color="white" width="25" />
          </button> */}
          <button className="flex justify-between w-[70%] py-3 px-8 items-center gap-1 bg-black border border-transparent rounded-full text-white backdrop-filter backdrop-blur-md bg-opacity-50">
            <h1 className="uppercase text-lg font-medium">Whatsapp</h1>
            <Icon icon="carbon:arrow-up" rotate={1} color="white" width="25" />
          </button>
        </div>
      </main>
      <footer className="relative w-full text-white bg-black px-[3%] pt-[4%] pb-[1%]">
        <div className="w-full mb-10 px-[1%] flex flex-col items-center gap-4">
          <h1 className={`${runalto.className} font-bold text-xl`}>ZoeJeton</h1>
          <div className=" flex gap-2">
            <Link href="#" className="bg-white p-2">
              <Image
                src="/assets/icons/instagram.png"
                width={20}
                height={20}
                alt="instagram"
              />
            </Link>
            <Link href="#" className="bg-white p-2">
              <Image
                src="/assets/icons/tiktok.png"
                width={20}
                height={20}
                alt="tiktok"
              />
            </Link>
          </div>
          <p className="font-normal w-4/6 text-xs text-center">
            We specialize in delivering digital elegance right to your
            fingertips.
          </p>
        </div>
        <div className="w-full border-b border-white" />
        <h1 className="w-fit mx-auto my-5 text-xs">copyright ©2023</h1>
      </footer>
    </div>
  );
}
