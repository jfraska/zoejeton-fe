import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";

export default function Couple() {
  return (
    <Section className="w-full text-secondary-text p-4" id="couple">
      <diV className="relative w-full h-full px-8 pt-40 pb-52  opacity-90">
        <div className="absolute inset-0 w-full h-full rounded-[100px] overflow-hidden shadow-lg -z-0">
          <SimpleParallax delay={1} transition="cubic-bezier(0,0,0,1)">
            <Image
              fill
              src="/templates/elva-ega/1.jpg"
              alt="couple bg"
              className="absolute top-[50px] left-[20px] object-cover scale-110 brightness-[.6] saturate-[.8]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SimpleParallax>

          <Image
            src="/templates/elva-ega/asset-2.svg"
            alt="couple bg"
            className="absolute top-0 right-0"
            width={170}
            height={170}
          />
        </div>

        <div className="relative w-full h-fit space-y-4">
          {/* mempelai wanita */}
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`${Selina.className} w-64 text-5xl font-medium`}
          >
            Elva Asy Syifa Mujahidin
          </h2>
          <div className="w-3/4">
            <p data-aos="fade-up" data-aos-duration="1000">
              Putri Bapak Mujahidin & Ibu Margiyanti
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Dsn. Ba’an Rt 01 Rw 03 Ds. Asinan, Kec. Bawen
            </p>
          </div>

          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="https://www.instagram.com/elvaasys_"
            target="_blank"
            className="w-28 h-8 bg-white text-black rounded-lg flex items-center justify-center"
          >
            Instagram
          </a>

          {/* mempelai pria */}
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`${Selina.className} text-5xl font-medium w-64 mt-40`}
          >
            Ega Chandra Pratama
          </h2>
          <div className="w-3/4">
            <p data-aos="fade-up" data-aos-duration="1000">
              Putra Bapak Sugiyarto & Ibu Indah Widayanti
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Kupang Lor, Rt 04 Rw 03, Kec. Ambarawa
            </p>
          </div>
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
      </diV>
    </Section>
  );
}
