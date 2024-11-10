import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import Image from "next/image";
import CountDown from "./countdown";
import SimpleParallax from "simple-parallax-js";

export default function Event() {
  return (
    <Section
      className="relative w-full h-fit p-4 text-primary-text text-center "
      id="event"
    >
      <div className="bg-[#EEEEEE] rounded-[100px] overflow-hidden w-full p-4 shadow-lg opacity-90">
        <div className="relative w-full h-[700px] rounded-[100px] overflow-hidden outline-primary-text focus:outline-primary-text !opacity-100">
          <CountDown deadline={"Sabtu, 24 November 2024"} />
          <SimpleParallax delay={1} transition="cubic-bezier(0,0,0,1)">
            <Image
              fill
              src="/templates/elva-ega/2.jpg"
              alt="image"
              className="absolute top-[700px] object-cover scale-75 filter grayscale -z-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SimpleParallax>
        </div>

        <div className="relative flex flex-col gap-4 py-10 px-5 items-center justify-center">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className={`${Selina.className} text-6xl`}
          >
            Akad Nikah
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex gap-4 items-center uppercase"
          >
            <h1>Minggu</h1>
            <div className="flex flex-col justify-between px-4 border-l border-l-black border-r border-r-black">
              <h1 className="font-semibold text-4xl">24</h1>
              <h2>2024</h2>
            </div>
            <h1>November</h1>
          </div>
          <p data-aos="zoom-in" data-aos-duration="1000">
            08.00 - selesai
          </p>
          <p data-aos="zoom-in" data-aos-duration="1000" className="w-40">
            Dsn. Ba’an Rt 01 Rw 03 Ds. Asinan, Kec. Bawen{" "}
          </p>

          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className={`${Selina.className} text-6xl mt-5`}
          >
            Resepsi
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex gap-4 items-center uppercase"
          >
            <div className="flex flex-col justify-between">
              <h1>Sabtu</h1>
              <h2>Minggu</h2>
            </div>
            <div className="flex flex-col justify-between px-4 border-l border-l-black border-r border-r-black">
              <h1 className="font-semibold text-2xl"> 23 -24</h1>
              <h2>2024</h2>
            </div>
            <h1>November</h1>
          </div>
          <p data-aos="zoom-in" data-aos-duration="1000">
            jam : -
          </p>
          <p data-aos="zoom-in" data-aos-duration="1000" className="w-40">
            Dsn. Ba’an Rt 01 Rw 03 Ds. Asinan, Kec. Bawen
          </p>

          <a
            data-aos="zoom-in"
            data-aos-duration="1000"
            target="_blank"
            href="https://maps.app.goo.gl/r6wiHxmwSZ8Fup7Y6"
            className="flex items-center justify-center bg-white text-gray-800 px-4 py-2 rounded-full mt-16"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            Lokasi Maps
          </a>
        </div>
      </div>

      <div className="h-40"></div>
    </Section>
  );
}
