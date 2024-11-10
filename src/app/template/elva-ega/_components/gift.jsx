import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import Image from "next/image";

export default function Gift() {
  return (
    <Section className="text-secondary-text w-full p-8" id="gift">
      <div className="w-full px-10 py-20">
        <div className="z-20">
          <h1 className={`${Selina.className} text-4xl font-medium uppercase`}>
            Wedding Gift
          </h1>
          <p className="mt-4">
            Kehadiran dan doa restu Anda sudah cukup bagi kami. Namun, jika Anda
            ingin memberikan hadiah, kami menyediakan Amplop Digital untuk
            mempermudah. Terima kasih.
          </p>

          <button className="flex items-center justify-center bg-white text-gray-800 px-4 py-2 rounded-full mt-10">
            Klik disini
          </button>
        </div>
      </div>
    </Section>
  );
}
