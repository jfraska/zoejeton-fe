import Editable from "@/components/container/editable";
import { Section } from "@/components/container/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";

export default function Thanks() {
  return (
    <Section
      className="relative flex flex-col items-center justify-start h-full text-accent-text"
      id="thanks"
    >
      <div className="flex flex-col items-start justify-start gap-5 pt-20 pl-7">
        <h1 className={`${Selina.className} text-6xl text-left`}>
          <Editable type="text" field="heading" section="thanks" />
        </h1>
        <Editable
          type="text"
          field="subheading"
          section="thanks"
          className={`${Catamaran.className} w-64 font-bold text-left text-base`}
        />
      </div>
      <div className="absolute bottom-5 inset-x-0 w-full text-center">
        <h2 className={`${Catamaran.className} text-sm`}>© ZoeJeton</h2>
        <h2 className={`${Catamaran.className} text-sm pt-3`}>
          © All right reserved by ZoeJeton
        </h2>
      </div>
    </Section>
  );
}
