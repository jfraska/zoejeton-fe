import Editable from "@/components/container/editable";
import { Section } from "@/components/container/wrapper-template";
import { GenteRomantica, Catamaran } from "@/styles/fonts";
import Image from "next/image";

export default function Couple() {
  return (
    <Section
      className="flex items-center justify-center min-h-full bg-primary-bg"
      id="couple"
    >
      <div className="bg-secondary-bg rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full shadow-lg p-8 w-full mx-auto z-10">
        <div className="text-center">
          <div className="relative mb-4">
            <Editable
              className="relative rounded-tl-full rounded-tr-full w-full h-72 overflow-hidden"
              type="image"
              field="groom"
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
            <h2
              className={`${GenteRomantica.className} absolute bottom-4 left-1/2 transform -translate-x-1/2 text-primary-text text-4xl`}
            >
              <Editable
                type="text"
                field="groom"
                subfield="name"
                section="couple"
              />
            </h2>
          </div>
          <p className={`${Catamaran.className} text-secondary-text`}>
            Putra Pertama dari
          </p>
          <Editable
            type="text"
            field="groom"
            subfield="desc"
            section="couple"
            className={`${Catamaran.className} text-secondary-text`}
          />
          <Editable
            type="link"
            field="groom"
            subfield="instagram"
            section="couple"
          >
            <a
              href="/"
              target="_blank"
              className="text-blue-500 mt-2 inline-block"
            >
              @Instagram
            </a>
          </Editable>
        </div>

        <hr className="my-8" />

        <div className="text-center">
          <div className="relative mb-4">
            <Editable
              className="relative rounded-tl-full rounded-tr-full w-full object-cover h-72 overflow-hidden"
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

            <h2
              className={`${GenteRomantica.className} absolute bottom-4 left-1/2 transform -translate-x-1/2 text-primary-text text-4xl`}
            >
              <Editable
                type="text"
                field="bride"
                subfield="name"
                section="couple"
              />
            </h2>
          </div>
          <p className={`${Catamaran.className} text-secondary-text`}>
            Putri Kedua dari
          </p>
          <Editable
            type="text"
            field="bride"
            subfield="desc"
            section="couple"
            className={`${Catamaran.className} text-secondary-text`}
          />
          <Editable
            type="link"
            field="bride"
            subfield="instagram"
            section="couple"
          >
            <a
              href="/"
              target="_blank"
              className="text-blue-500 mt-2 inline-block"
            >
              @Instagram
            </a>
          </Editable>
        </div>
      </div>
    </Section>
  );
}
