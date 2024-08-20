import { Section } from "@/components/container/template/wrapper-template";
import { GenteRomantica } from "@/styles/fonts";
import Editable from "@/components/container/editable";

export default function Thanks() {
  return (
    <Section className="min-h-screen h-full bg-cover bg-primary-bg" id="thanks">
      <div
        className="flex flex-col justify-center items-center text-primary-text pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          className={`${GenteRomantica.className} text-5xl font-medium w-2/4`}
        >
          <Editable type="text" field="heading" section="thanks" />
        </h1>
        <Editable
          type="text"
          field="subheading"
          section="thanks"
          className="w-2/4 pt-10"
        />
      </div>
      <div className="absolute bottom-5 inset-x-0 w-full text-center">
        <h2 className="text-xs">© ZoeJeton</h2>
        <h2 className="text-xs pt-3">© All right reserved by ZoeJeton</h2>
      </div>
    </Section>
  );
}
