import { Section } from "@/components/container/wrapper-template";
import { GenteRomantica, Catamaran } from "@/styles/fonts";
import Editable from "@/components/container/template/editable";

export default function LoveStory() {
  return (
    <Section
      className="min-h-full py-20 px-10 flex flex-col justify-start items-center gap-4 text-center"
      id="love-story"
    >
      <h1 className={`${GenteRomantica.className} mb-4 text-5xl`}>
        Kisah Cinta
      </h1>

      <div>
        <h1 className={`${Catamaran.className}text-base font-medium`}>
          <Editable
            type="text"
            field="story1"
            subfield="heading"
            section="love-story"
          />
        </h1>
        <p className={`${Catamaran.className}text-sm pt-4`}>
          <Editable
            type="text"
            field="story1"
            subfield="subheading"
            section="love-story"
          />
        </p>
      </div>

      <div>
        <h1 className={`${Catamaran.className}text-base font-medium`}>
          <Editable
            type="text"
            field="story2"
            subfield="heading"
            section="love-story"
          />
        </h1>
        <p className={`${Catamaran.className}text-sm pt-4`}>
          <Editable
            type="text"
            field="story2"
            subfield="subheading"
            section="love-story"
          />
        </p>
      </div>
    </Section>
  );
}
