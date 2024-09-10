import Editable from "@/components/container/template/editable";
import { Section } from "@/components/container/template/wrapper-template";
import { Runalto } from "@/styles/fonts";

export default function Thanks() {
  return (
    <Section
      className="h-full flex flex-col justify-center items-center pb-10"
      id="thanks"
    >
      <h1 className={`${Runalto.className} text-5xl font-medium w-2/4`}>
        <Editable type="text" field="heading" section="thanks" />
      </h1>
      <h2 className="w-2/4">
        <Editable type="text" field="subheading" section="thanks" />
      </h2>

      <div className="absolute bottom-5 inset-x-0 w-full text-center">
        <h2 className="text-xs">© All right reserved by ZoeJeton</h2>
      </div>
    </Section>
  );
}
