import { GenteRomantica } from "@/styles/fonts";
import Editable from "@/components/container/template/editable";
import { Cover as CoverWrapper } from "@/components/container/template/wrapper-template";

export default function Cover() {
  return (
    <CoverWrapper className="flex w-full h-full bg-cover flex-col justify-end gap-5 items-start p-32 text-primary-text">
      <h2 className="text-xl mt-16">THE WEDDING OF</h2>
      <h1 className={`${GenteRomantica.className} text-7xl font-medium`}>
        <Editable type="text" field="heading" section="cover" />
      </h1>
    </CoverWrapper>
  );
}
