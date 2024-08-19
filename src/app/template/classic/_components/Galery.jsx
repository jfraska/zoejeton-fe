import { Section } from "@/components/container/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";
import Editable from "@/components/container/editable";
import Image from "next/image";

export default function Galery() {
  return (
    <Section
      className="relative flex flex-col w-full h-fit px-5 py-10 items-center mx-auto bg-[#29414A]"
      id="galery"
    >
      <div className="flex gap-3 w-full justify-around mb-4 h-20">
        <h2 className={`${Selina.className} text-white text-7xl`}>GALLERY</h2>
      </div>
      <Editable
        className="relative w-[100%] h-56 rounded-2xl overflow-hidden"
        type="image"
        field="image1"
        section="galery"
      >
        <Image
          fill
          alt="image"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Editable>

      <div className="flex items-center justify-between w-full gap-5">
        <div className="relative w-full flex flex-col items-center justify-between gap-5 mb-4 py-5">
          <Editable
            className="relative w-full h-60 rounded-2xl overflow-hidden"
            type="image"
            field="image2"
            section="galery"
          >
            <Image
              fill
              alt="image"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Editable>
          <Editable
            className="relative w-full h-60 rounded-2xl overflow-hidden"
            type="image"
            field="image4"
            section="galery"
          >
            <Image
              fill
              alt="image"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Editable>
        </div>

        <div className="relative w-full flex flex-col items-center justify-between gap-5 mb-4 py-5">
          <Editable
            className="relative w-full h-40 rounded-2xl overflow-hidden"
            type="image"
            field="image3"
            section="galery"
          >
            <Image
              fill
              alt="image"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Editable>
          <Editable
            className="relative w-full h-80 rounded-2xl overflow-hidden"
            type="image"
            field="image5"
            section="galery"
          >
            <Image
              fill
              alt="image"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Editable>
        </div>
      </div>

      <Editable type="link" field="link" section="gift" className="mt-5">
        <a
          href="/"
          target="_blank"
          className={`${Catamaran.className} w-32 flex items-center justify-center bg-white text-black p-2 rounded-xl`}
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          More Gallery
        </a>
      </Editable>
    </Section>
  );
}
