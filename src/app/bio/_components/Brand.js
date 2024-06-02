import Image from "next/image";
import { Runalto } from "@/styles/fonts";

export default function Brand({ ...props }) {
  return (
    <section {...props}>
      <Image
        src={"/assets/icons/zoejeton-outline.svg"}
        width={30}
        height={30}
        alt="logo-zoejeton"
        className="mx-auto w-8 aspect-square"
      />
      <div className="mt-2 flex flex-col items-center text-white text-center leading-none">
        <h1 className={`${Runalto.className} font-medium text-xl`}>ZoeJeton</h1>
        <h2 className="text-[12px]">Digital Invitation | Undangan Web</h2>
      </div>
    </section>
  );
}
