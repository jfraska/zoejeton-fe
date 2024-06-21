import Editable from "@/components/container/editable";
import Image from "next/image";

export default function Galery() {
  return (
    <section className="relative w-full flex flex-col" id="galery">
      <Editable
        className="relative w-full aspect-video bg-secondary"
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
      <div className="flex justify-between w-full">
        <Editable
          className="relative w-1/2 aspect-square bg-secondary"
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
        <div
          className="w-1/2 aspect-square bg-cover bg-center"
          style={{
            backgroundImage: "url('/templates/minimalis/8.heic')",
          }}
        />
      </div>

      <div
        className="w-full aspect-video bg-cover"
        style={{
          backgroundImage: "url('/templates/minimalis/3.jpg')",
        }}
      />

      <div
        className="w-full aspect-video bg-cover"
        style={{
          backgroundImage: "url('/templates/minimalis/5.heic')",
        }}
      />
    </section>
  );
}
