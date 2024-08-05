import { Section } from "@/components/container/wrapper-template";
import { GenteRomantica, Catamaran } from "@/styles/fonts";
import Editable from "@/components/container/editable";

export default function LiveStream() {
  return (
    <Section
      className="relative w-full h-screen bg-[#333333] p-10 flex flex-col text-center justify-between gap-10" id="live-streaming"
    >
      <h1 className={`${GenteRomantica.className} text-5xl`}>Live Streaming</h1>
      <h2 className={`${Catamaran.className}text-lg`}>
      <Editable type="text" field="date" section="live-streaming" />
      </h2>
      <h2 className={`${Catamaran.className}text-lg`}>
      <Editable type="text" field="time" section="live-streaming" />
      </h2>
      <Editable type="text" field="subheading" section="live-streaming" className={`${Catamaran.className}text-lg`} />
      <button className="border border-foreground py-2 px-10 mt-10 rounded-3xl">
        Join Now
      </button>
    </Section>
  );
}
