import Image from "next/image";
import Editable from "@/components/container/editable";
import { Runalto } from "@/styles/fonts";
import { Cover as CoverWrapper } from "@/components/container/template/wrapper-template";

export default function Cover() {
  return (
    <CoverWrapper className="absolute bottom-32 left-20 flex flex-col justify-end gap-2 items-start">
      <h2 className="text-xl">THE WEDDING OF</h2>
      <h1 className={`${Runalto.className} text-7xl font-medium`}>
        <Editable type="text" field="heading" section="cover" />
      </h1>
    </CoverWrapper>
  );
}
