import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import Image from "next/image";

export default function Beranda() {
  return (
    <Section className="bg-primary-bg w-full h-full" id="greeting">
      <div
        className="relative h-full w-full px-4 py-10 flex flex-col justify-start items-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="text-lg my-8">THE WEDDING OF</h2>
        <div className="relative w-[60%] h-96 rounded-full overflow-hidden outline-primary-text focus:outline-primary-text">
          <Image
            fill
            src="/templates/elva-ega/2.jpg"
            alt="image"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h2 className={`${Selina.className} text-6xl font-medium my-8`}>
          Elva & Ega
        </h2>
        <p className="text-center">
          Glory be to Allah who has created humans in pairs. By asking for the
          Grace and Ridho of Allah SWT, we intend to invite you to our wedding
          reception.
        </p>
      </div>
      <img
        src="/templates/classic/decor-tl.png"
        alt="decor tl"
        className="w-52 aspect-square absolute top-0 left-0"
      />
      <img
        src="/templates/classic/decor-tr.png"
        alt="decor tr"
        className="w-40 absolute top-0 right-0"
      />
      <img
        src="/templates/classic/decor-bl.png"
        alt="decor bl"
        className="w-52 absolute bottom-0 left-0"
      />
    </Section>
  );
}
