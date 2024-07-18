import { Section } from "@/components/container/wrapper-template";
import { Runalto } from "@/styles/fonts";

export default function Event() {
  return (
    <Section
      className="h-fit pt-10 pb-20 px-14 flex flex-col justify-start items-center gap-4 text-center bg-primary-bg"
      name="date"
    >
      <h1 className={`${Runalto.className} font-medium text-4xl`}>
        Wedding Event
      </h1>

      <div className="mb-4 w-full aspect-video bg-secondary-bg"></div>

      <div>
        <h1 className={`${Runalto.className} font-medium text-xl uppercase`}>
          Akad
        </h1>
        <p className="text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus.
        </p>
      </div>

      <div>
        <h1 className={`${Runalto.className} font-medium text-xl uppercase`}>
          Resepsi
        </h1>
        <p className="text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus.
        </p>
      </div>
    </Section>
  );
}
