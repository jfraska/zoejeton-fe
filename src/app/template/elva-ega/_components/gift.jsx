import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";

export default function Gift() {
  return (
    <Section
      className="bg-secondary-bg text-secondary-text flex items-center justify-center w-full h-96 px-5 py-10 mx-auto"
      id="gift"
    >
      <div
        className="flex flex-col gap-5 pt-7 items-center justify-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className={`${Selina.className} text-5xl`}>WEDDING GIFT</h1>
      </div>
    </Section>
  );
}
