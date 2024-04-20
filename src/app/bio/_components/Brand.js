import Image from "next/image";
import { Runalto } from "@/styles/fonts";

export default function Brand({ ...props }) {
  return (
    <section {...props}>
      <Image
        src={"/assets/icons/zoejeton-outline.svg"}
        width={40}
        height={40}
        alt="logo-zoejeton"
        className="mx-auto w-10 aspect-square"
      />
      <div className="mt-2 flex flex-col items-center text-white text-center leading-none">
        <h1 className={`${Runalto.className} font-medium text-2xl`}>
          ZoeJeton
        </h1>
        <h2 className="text-[12px]">Digital Invitation | Undangan Web</h2>
        <h2 className="text-[12px] px-10">
          We specialize in delivering digital elegance right to your fingertips
        </h2>
      </div>
    </section>
  );
}
