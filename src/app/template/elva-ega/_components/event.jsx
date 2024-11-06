import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import Image from "next/image";

export default function Event() {
  return (
    <Section className="text-secondary-text w-full" id="event">
      <div className="relative w-full h-24">
        <Image
          fill
          src="/templates/elva-ega/asset-1.svg"
          alt="image"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative flex flex-col gap-5 h-screen py-10 px-5 items-center justify-center bg-[#c74848]">
        <Image
          src="/templates/elva-ega/asset-3.svg"
          width={300}
          height={300}
          alt="image"
          className="absolute top-0 left-0"
        />
        <Image
          src="/templates/elva-ega/asset-4.svg"
          width={300}
          height={300}
          alt="image"
          className="absolute bottom-10 right-0"
        />
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className={`${Selina.className} text-6xl`}
        >
          Akad Nikah
        </h1>
        <p></p>

        <h1 className={`${Selina.className} text-6xl`}>Resepsi</h1>
        <p></p>

        <a
          href="#"
          className="flex items-center justify-center bg-white text-gray-800 px-4 py-2 rounded-full"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          Location
        </a>
      </div>
    </Section>
  );
}
