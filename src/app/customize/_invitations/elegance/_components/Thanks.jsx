import { Section } from "@/components/container/customize/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";
import Editable from "@/components/container/customize/editable";

export default function Thanks() {
  return (
    <Section
      className="bg-secondary-bg text-secondary-text relative flex flex-col items-center justify-start w-full h-full p-5 mx-auto"
      id="thanks"
    >
      <div className="rounded-2xl overflow-hidden max-w-sm text-center relative">
        <img
          src="/templates/elegance/thanks.png"
          alt="Gift Image"
          className="bg-cover w-full opacity-50"
        />
        <div
          className="absolute inset-0 flex flex-col items-start justify-start gap-5 pt-7 pl-7"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 className={`${Selina.className} text-6xl text-left`}>
            THANK <br /> YOU
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
      </div>
    </Section>
  );
}
