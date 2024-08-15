import { Section } from "@/components/container/wrapper-template";
import { GenteRomantica } from "@/styles/fonts";
import Editable from "@/components/container/editable";
import Image from "next/image";

export default function Galery() {
  return (
    <Section
      className="relative flex flex-col w-full h-fit p-4 items-center mx-auto bg-[#333333]"
      id="galery"
    >
      <div className="relative mb-4 w-full">
        <Editable
          className="relative w-full h-[431px] rounded-2xl overflow-hidden"
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
        <h2
          className={`${GenteRomantica.className} absolute top-4 inset-x-0 w-full text-center text-4xl`}
        >
          Our Gallery
        </h2>
      </div>

      <div className="relative mb-4 w-full">
        <Editable
          className="relative object-cover w-full h-56 rounded-2xl overflow-hidden"
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
      </div>

      <div className="flex relative mb-4 w-full gap-5">
        <div className="flex-1">
          <Editable
            className="relative object-cover w-full aspect-9/16 rounded-2xl overflow-hidden"
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
        </div>
        <div className="flex-1">
          <Editable
            className="relative object-cover w-full aspect-9/16 rounded-2xl overflow-hidden"
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
      </div>

      <div className="relative mb-4 w-full">
        <Editable
          className="relative object-cover w-full h-56 rounded-2xl overflow-hidden"
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
    </Section>
  );
}
