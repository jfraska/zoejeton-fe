import { Section } from "@/components/container/template/wrapper-template";
import { GenteRomantica, Catamaran } from "@/styles/fonts";
import Editable from "@/components/container/editable";

export default function LiveStream() {
  return (
    <Section
      className="relative w-full h-full min-h-screen bg-primary-bg "
      id="live-streaming"
    >
      <div
        className="w-full h-full min-h-screen p-10 flex flex-col text-center justify-between gap-10 text-primary-text"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className={`${GenteRomantica.className} text-5xl`}>
          Live Streaming
        </h1>
        <h2 className={`${Catamaran.className}text-lg`}>
          <Editable type="text" field="date" section="live-streaming" />
        </h2>
        <h2 className={`${Catamaran.className}text-lg`}>
          <Editable type="text" field="time" section="live-streaming" />
        </h2>
        <Editable
          type="text"
          field="subheading"
          section="live-streaming"
          className={`${Catamaran.className}text-lg`}
        />
        <Editable
          type="link"
          field="link"
          section="live-streaming"
          className="border border-foreground py-2 px-10 mt-10 rounded-3xl"
        >
          <a href="/" target="_blank">
            Join Now
          </a>
        </Editable>
      </div>
    </Section>
  );
}
