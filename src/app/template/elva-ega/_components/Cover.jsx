import { Selina, Catamaran } from "@/styles/fonts";
import { Cover as CoverWrapper } from "@/components/container/template/wrapper-template";

export default function Cover() {
  return (
    <CoverWrapper className="text-secondary-text relative hidden md:flex w-full bg-cover flex-col justify-end gap-5 items-start p-32">
      <h2 className={`${Catamaran.className} text-xl mt-16`}>THE WEDDING OF</h2>
      <h1 className={`${Selina.className} text-7xl font-medium`}>cek</h1>
    </CoverWrapper>
  );
}