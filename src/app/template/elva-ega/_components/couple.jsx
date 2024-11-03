import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import Image from "next/image";

export default function Couple() {
  return (
    <Section
      className="relative bg-primary-bg w-full text-secondary-text p-5 -z-[1]"
      id="couple"
    >
      <img
        src="/templates/classic/decor-bl.png"
        alt="decor bl"
        className="-z-[1] w-52 absolute top-0 left-0 transform scale-y-[-1]"
      />
      <div className="relative w-full h-screen rounded-[100px] px-8 py-32 overflow-hidden shadow-lg">
        <Image
          fill
          src="/templates/elva-ega/1.jpg"
          alt="couple bg"
          className="absolute top-[50px] left-[20px] object-cover scale-110 brightness-[.6] saturate-[.8] -z-[1]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* mempelai wanita */}
        <div className="space-y-4 w-64">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`${Selina.className} text-5xl font-medium`}
          >
            Elva Asy Syifa Mujahidin
          </h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            Putri Bapak Mujahidin & Ibu Margiyanti Dsn. Ba’an Rt 01 Rw 03 Ds.
            Asinan, Kec. Bawen
          </p>

          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="/"
            target="_blank"
            className={`w-28 h-8 bg-white text-black rounded-lg flex items-center justify-center`}
          >
            Instagram
          </a>
        </div>

        {/* mempelai pria */}
        <div className="mt-28 space-y-4 w-64">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`${Selina.className} text-5xl font-medium`}
          >
            Ega Chandra Pratama
          </h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            Putra Bapak Sugiyarto & Ibu Indah WIdiyanti Kupang Lor, Rt 04 Rw 03,
            Kec. Ambarawa{" "}
          </p>
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="/"
            target="_blank"
            className={`w-28 h-8 bg-white text-black rounded-lg flex items-center justify-center`}
          >
            Instagram
          </a>
        </div>
      </div>
    </Section>
  );
}
