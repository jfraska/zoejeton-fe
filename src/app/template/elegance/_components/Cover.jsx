import Editable from "@/components/container/editable";
import { Selina, Catamaran } from "@/styles/fonts";
import { Cover as CoverWrapper } from "@/components/container/template/wrapper-template";

export default function Cover() {
  return (
    <CoverWrapper className="relative text-primary-text hidden md:flex w-full h-full bg-cover bg-top flex-col justify-end gap-5 items-start p-32">
      <h2 className={`${Catamaran.className} text-xl mt-16`}>THE WEDDING OF</h2>
      <h1 className={`${Selina.className} text-8xl font-medium`}>
        <Editable type="text" field="heading" section="cover" />
      </h1>
    </CoverWrapper>
  );
}
