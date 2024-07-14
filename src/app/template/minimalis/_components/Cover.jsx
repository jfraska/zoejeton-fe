import Image from "next/image";
import Editable from "@/components/container/editable";
import { Runalto } from "@/styles/fonts";

export default function Cover() {
  return (
    <div className="relative w-full h-full hidden md:block">
      <Image
        fill
        src="/templates/minimalis/5.heic"
        alt="image"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute bottom-32 left-20 flex flex-col justify-end gap-2 items-start">
        <h2 className="text-xl">THE WEDDING OF</h2>
        <h1 className={`${Runalto.className} text-7xl font-medium`}>
          <Editable type="text" field="heading" section="cover" />
        </h1>
      </div>
    </div>
  );
}
