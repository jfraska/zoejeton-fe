import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";

export default function Couple() {
  return (
    <Section
      className="relative bg-primary-bg w-full text-secondary-text p-5 -z-[1]"
      id="couple"
    >
      <div className="relative w-full rounded-[100px] px-8 py-32 overflow-hidden shadow-lg">
        <SimpleParallax delay={1} transition="cubic-bezier(0,0,0,1)">
          <Image
            fill
            src="/templates/elva-ega/1.jpg"
            alt="couple bg"
            className="absolute top-[50px] left-[20px] object-cover scale-110 brightness-[.6] saturate-[.8] -z-[1]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </SimpleParallax>

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
            href="https://www.instagram.com/elvaasys_"
            target="_blank"
            className="w-28 h-8 bg-white text-black rounded-lg flex items-center justify-center z-20"
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
            Kec. Ambarawa
          </p>
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="https://www.instagram.com/egachandraaa"
            target="_blank"
            className="w-28 h-8 bg-white text-black rounded-lg flex items-center justify-center z-20"
          >
            Instagram
          </a>
        </div>
      </div>
    </Section>
  );
}
