import { Section } from "@/components/container/template/wrapper-template";

export default function Story() {
  return (
    <Section
      className="h-full pt-10 pb-20 px-10 bg-secondary-bg flex flex-col justify-start items-center gap-4 text-center"
      id="love-story"
    >
      <h1 className="mb-4 text-2xl">Love Story</h1>

      <div>
        <h1 className="text-sm font-medium">SEMARANG, 19 jUNI 2021</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus.
        </p>
      </div>

      <div>
        <h1 className="text-sm font-medium">SEMARANG, 19 jUNI 2021</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus.
        </p>
      </div>
    </Section>
  );
}
