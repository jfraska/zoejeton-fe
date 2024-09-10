import { Selina, Catamaran } from "@/styles/fonts";
import { Cover as CoverWrapper } from "@/components/container/template/wrapper-template";
import Editable from "@/components/container/template/editable";

export default function Cover() {
  return (
    <CoverWrapper className="text-secondary-text relative hidden md:flex w-full bg-cover flex-col justify-end gap-5 items-start p-32">
      <h2 className={`${Catamaran.className} text-xl mt-16`}>THE WEDDING OF</h2>
      <h1 className={`${Selina.className} text-7xl font-medium`}>
        <Editable type="text" field="heading" section="cover" />
      </h1>
    </CoverWrapper>
  );
}
