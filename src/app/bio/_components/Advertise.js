"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Advertise({ ...props }) {
  return (
    <section {...props}>
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "5px",
        }}
        loop={true}
        spaceBetween={0}
        effect="slide"
        autoplay={{
          delay: 2000,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full aspect-video rounded-lg shadow-lg"
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
    </section>
  );
}
