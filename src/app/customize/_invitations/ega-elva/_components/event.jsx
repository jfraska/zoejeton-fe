import { Section } from "@/components/container/customize/wrapper-template";
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
        <div className="relative w-full rounded-[100px] overflow-hidden !opacity-100">
          <CountDown deadline={"Sabtu, 30 November 2024"} />
          <SimpleParallax delay={1} transition="cubic-bezier(0,0,0,1)">
            <Image
              src="/templates/elva-ega/2.jpg"
              alt="image"
              className="filter grayscale -z-[1]"
              width={900}
              height={900}
            />
          </SimpleParallax>
        </div>

        <div className="relative flex flex-col gap-4 py-10 px-4 items-center justify-center">
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
            09.00 WIB
          </p>
          <p data-aos="zoom-in" data-aos-duration="1000" className="w-40">
            Dsn. Ba’an Rt 01 Rw 03 Ds. Asinan, Kec. Bawen{" "}
          </p>

          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className={`${Selina.className} text-5xl mt-5`}
          >
            Ngunduh Mantu
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex gap-4 items-center uppercase"
          >
            <h1>Minggu</h1>
            <div className="flex flex-col justify-between px-4 border-l border-l-black border-r border-r-black">
              <h1 className="font-semibold text-4xl">01</h1>
              <h2>2024</h2>
            </div>
            <h1>Desember</h1>
          </div>
          <p data-aos="zoom-in" data-aos-duration="1000">
            10.00 - 12.00
          </p>
          <p data-aos="zoom-in" data-aos-duration="1000" className="w-56">
            Belakang SMP Islam Sudirman Kupang Lor, Rt 04 Rw 03, Kec. Ambarawa
          </p>

          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className={`${Selina.className} text-6xl mt-5`}
          >
            Tasyakuran
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex gap-4 items-center uppercase"
          >
            <h1>Sabtu</h1>
            <div className="flex flex-col justify-between px-4 border-l border-l-black border-r border-r-black">
              <h1 className="font-semibold text-4xl">30</h1>
              <h2>2024</h2>
            </div>
            <h1>November</h1>
          </div>
          <p data-aos="zoom-in" data-aos-duration="1000">
            Jam : -
          </p>
          <p data-aos="zoom-in" data-aos-duration="1000" className="w-56">
            Belakang SMP Islam Sudirman Kupang Lor, Rt 04 Rw 03, Kec. Ambarawa
          </p>

          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex gap-4 items-center uppercase"
          >
            <h1>Minggu</h1>
            <div className="flex flex-col justify-between px-4 border-l border-l-black border-r border-r-black">
              <h1 className="font-semibold text-4xl">01</h1>
              <h2>2024</h2>
            </div>
            <h1>Desember</h1>
          </div>
          <p data-aos="zoom-in" data-aos-duration="1000">
            Jam : 12.00 - selesai
          </p>
          <p data-aos="zoom-in" data-aos-duration="1000" className="w-56">
            Belakang SMP Islam Sudirman Kupang Lor, Rt 04 Rw 03, Kec. Ambarawa
          </p>

          <a
            data-aos="zoom-in"
            data-aos-duration="1000"
            target="_blank"
            href="https://maps.app.goo.gl/2tH4opCbcX9NqUuc7"
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
