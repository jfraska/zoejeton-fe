import Editable from "@/components/container/editable";
import { Runalto } from "@/styles/fonts";
import Image from "next/image";

export default function Couple() {
  return (
    <section className="relative h-fit py-10" id="couple">
      <Editable
        className="relative w-72 aspect-square bg-secondary animate"
        type="image"
        field="bride"
        subfield="image"
        section="couple"
      >
        <Image
          fill
          alt="image"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Editable>
      <div className="mt-7 flex flex-col items-start text-start gap-2 px-8">
        <h1 className={`${Runalto.className} text-lg font-bold`}>
          <Editable
            type="text"
            field="bride"
            subfield="name"
            section="couple"
          />
        </h1>
        <p className="text-sm">
          Putra dari Bapak Demak Parsaoran (Alm) & Ibu Ratnawati Hutauruk
        </p>
      </div>
      <div
        className={` ${Runalto.className} w-full text-center text-4xl mt-14 mb-4`}
      >
        The Bride
      </div>
      <div className="flex justify-around w-full h-64 px-10">
        <Editable
          className="relative w-full h-full bg-secondary"
          type="image"
          field="groom"
          subfield="image"
          section="couple"
        >
          <Image
            fill
            src="/"
            alt="image"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Editable>
        <div className="w-full h-full flex flex-col justify-around">
          <div className="w-full h-full bg-secondary"></div>
          <div className="w-full h-full bg-secondary"></div>
        </div>
      </div>
      <div className="mt-7 flex flex-col items-center gap-2 px-10 text-center">
        <h1 className={`${Runalto.className} text-lg font-bold`}>
          <Editable
            type="text"
            field="groom"
            subfield="name"
            section="couple"
          />
        </h1>
        <p className="text-sm">Putri dari Bpk M Syarik & Ibu Isharni</p>
      </div>
      <div className="mt-10 flex justify-center w-full">
        <Editable
          type="link"
          field="groom"
          subfield="instagram"
          section="couple"
        >
          <a
            href="/"
            target="_blank"
            className="flex gap-2 items-center justify-center"
          >
            <span className="w-5 text-foreground aspect-square icon-[ic--baseline-arrow-circle-right]" />
            <h1>Instagram</h1>
          </a>
        </Editable>
      </div>
    </section>
  );
}
