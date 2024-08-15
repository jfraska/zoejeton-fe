import Editable from "@/components/container/template/editable";
import { Section } from "@/components/container/wrapper-template";
import { Runalto } from "@/styles/fonts";

export default function LiveStream() {
  return (
    <Section
      className="h-full p-10 flex flex-col justify-between"
      id="live-streaming"
    >
      <div>
        <h1 className={`${Runalto.className} text-5xl`}>Live Streaming</h1>
        <h2 className="text-lg">Minggu</h2>
        <h2 className="text-lg">jam 12.00</h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <Editable
          className="mt-10"
          type="link"
          field="link"
          section="live-streaming"
        >
          <a
            href="/"
            target="_blank"
            className="border border-primary-text py-2 px-10"
          >
            Join Now
          </a>
        </Editable>
      </div>
    </Section>
  );
}
