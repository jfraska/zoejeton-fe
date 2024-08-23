import Editable from "@/components/container/editable";
import { Section } from "@/components/container/wrapper-template";

export default function Quotes() {
  return (
    <Section className="bg-primary-bg h-fit py-40 px-10 mx-auto" name="quotes">
      <div className="relative text-center px-5 py-8 flex flex-col items-center gap-3 border-2 rounded-2xl border-accent-bg">
        <img
          src="/templates/vintage/flower4.png"
          alt="decor tl"
          className="absolute -top-20 z-10"
        />
        <img
          src="/templates/vintage/wavyfl1.png"
          alt="decor tl"
          className="absolute -top-36 left-5"
        />
        <img
          src="/templates/vintage/wavyfl2.png"
          alt="decor tl"
          className="absolute -top-36 right-5"
        />
        <p data-aos="fade-right" className="text-sm font-medium">
          <Editable
            type="text"
            field="quotes"
            section="quotes"
            className="outline-black focus:outline-black"
          />
        </p>
        <h1 data-aos="fade-right" className="text-sm font-bold">
          <Editable
            type="text"
            field="tag"
            section="quotes"
            className="outline-black focus:outline-black"
          />
        </h1>
      </div>
    </Section>
  );
}
