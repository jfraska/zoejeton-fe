"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { faq } from "@/constants";
import FAQ from "./_components/FAQ";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Bio() {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className="relative md:my-10 max-w-[430px] mx-auto md:rounded-xl md:overflow-hidden bg-white">
      <div
        className="relative w-full h-[25vh] bg-cover"
        style={{
          backgroundImage: "url('/assets/images/palm.jpg')",
        }}
      >
        <button className="absolute top-4 right-4 w-10 aspect-square bg-white rounded-xl flex justify-center items-center">
          <Image
            src={"/assets/icons/qrcode.svg"}
            width={30}
            height={30}
            alt=""
            className="w-8 aspect-square"
          />
        </button>
        <Image
          src={"/assets/icons/logo.svg"}
          width={50}
          height={50}
          alt=""
          className="absolute -bottom-10 inset-x-0 mx-auto w-20 rounded-full border-[3px] border-white aspect-square bg-white shadow-md"
        />
      </div>
      <div className="mt-14 w-full flex flex-col justify-center items-center gap-4 px-4">
        <div className="flex flex-col items-center">
          <h1 className="font-medium text-xl leading-tight">ZoeJeton</h1>
          <h2 className="text-sm">@zoejeton</h2>
        </div>

        <Link
          href={
            process.env.NEXT_PUBLIC_VERCEL_ENV
              ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
              : `http://localhost:3000`
          }
          className="mt-4 w-full flex items-center gap-4 bg-black text-white rounded-xl p-3"
        >
          <div className="flex justify-center items-center bg-white h-full p-3 rounded-xl">
            <Icon icon="solar:link-bold" color="black" width={20} />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="leading-tight">Website</h1>
            <h2 className="text-sm text-neutral-400">Lorem omasfj</h2>
          </div>
        </Link>

        <div className="mt-4 flex justify-between items-center w-full">
          <h1>Galery</h1>
          <div className="flex items-center gap-1 text-sm text-neutral-600">
            <h1>More</h1>
            <Icon icon="carbon:arrow-up" width={20} rotate={1} />
          </div>
        </div>

        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            " --swiper-navigation-size": "15px",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "5px",
          }}
          loop={true}
          spaceBetween={0}
          navigation={true}
          autoplay={{
            delay: 2000,
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full h-60 rounded-xl"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
        </Swiper>

        <div className="mt-4 flex justify-between items-center w-full">
          <h1>FAQ</h1>
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

      <div className="sticky z-50 mt-8 bottom-0 inset-x-0 bg-black w-full h-20 rounded-t-xl flex justify-between items-center p-4">
        <Icon icon="material-symbols:close" width={30} color="white" />
        <h1 className="text-white">Let’s talk</h1>
        <button className="bg-white h-full px-4 rounded-xl">Contact</button>
      </div>
    </div>
  );
}
