import { Section } from "@/components/container/wrapper-template";
import { GenteRomantica } from "@/styles/fonts";
import Editable from "@/components/container/template/editable";

export default function Thanks() {
  return (
    <Section
      className="h-full bg-cover flex flex-col justify-center items-center bg-[#333333] pb-10"
      id="thanks"
    >
      <h1 className={`${GenteRomantica.className} text-5xl font-medium w-2/4`}>
        <Editable type="text" field="heading" section="thanks" />
      </h1>
      <Editable
        type="text"
        field="subheading"
        section="thanks"
        className="w-2/4 pt-10"
      />

      <div className="absolute bottom-5 inset-x-0 w-full text-center">
        <h2 className="text-xs">© ZoeJeton</h2>
        <h2 className="text-xs pt-3">© All right reserved by ZoeJeton</h2>
      </div>
    </Section>
  );
}
