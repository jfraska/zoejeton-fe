import { Section } from "@/components/container/template/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";
import Image from "next/image";

export default function Galery() {
  return (
    <Section
      className="relative flex flex-col w-full h-fit px-5 py-10 items-center mx-auto bg-[#262B2E] text-secondary-text"
      id="galery"
    >
      <div className="flex gap-3 w-full justify-around mb-4 h-20">
        <h2 className={`${Selina.className} text-7xl font-medium`}>GALLERY</h2>
      </div>

      <div className="flex items-center justify-between w-full gap-5">
        <div className="relative w-full flex flex-col items-center justify-between gap-5 mb-4 py-5">
          <div className="relative w-full h-60 rounded-2xl overflow-hidden">
            <Image
              fill
              src="/templates/elva-ega/1.jpg"
              alt="image"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative w-full h-60 rounded-2xl overflow-hidden">
            <Image
              fill
              src="/templates/elva-ega/1.jpg"
              alt="image"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col items-center justify-between gap-5 mb-4 py-5">
          <div className="relative w-full h-40 rounded-2xl overflow-hidden">
            <Image
              fill
              src="/templates/elva-ega/1.jpg"
              alt="image"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <Image
              fill
              src="/templates/elva-ega/1.jpg"
              alt="image"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
