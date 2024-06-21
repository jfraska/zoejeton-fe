import { Runalto } from "@/styles/fonts";
import CountDown from "./CountDown";
import Editable from "@/components/container/editable";

export default function Beranda() {
  return (
    <section
      className="relative w-full h-screen bg-black bg-cover bg-center bg-opacity-20 bg-blend-multiply"
      id="beranda"
      style={{
        backgroundImage: "url('/templates/minimalis/5.heic')",
      }}
    >
      <div className="mx-auto flex flex-col gap-6 justify-start items-center px-10 text-center">
        <h2 className="text-lg mt-16">THE WEDDING OF</h2>
        <h1 className={`${Runalto.className} text-5xl font-medium`}>
          <Editable type="text" field="heading" section="beranda" />
        </h1>
        <h3 className="text-xs">
          <Editable type="text" field="subheading" section="beranda" />
        </h3>
      </div>
      <div className={`${Runalto.className} absolute bottom-[20%] inset-x-10`}>
        <Editable type="date" field="akad" subfield="date" section="event">
          <CountDown />
        </Editable>
      </div>
    </section>
  );
}
