import Editable from "@/components/container/template/editable";
import { Section } from "@/components/container/template/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";

export default function LiveStream() {
  return (
    <Section
      className="bg-secondary-bg text-secondary-text relative w-full min-h-screen pb-5 px-5 gap-4 text-center"
      id="live-streaming"
    >
      <div className="bg-[#D9D9D9] rounded-[100px] overflow-hidden max-w-sm p-4 flex flex-col items-center shadow-xl">
        <div className="w-full h-[455px] bg-[#797979] rounded-[100px]">
          <div className="flex flex-col text-left items-center justify-start pt-16">
            <div
              className="flex flex-col text-left items-start justify-start"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h1 className={`${Selina.className} text-6xl`}>
                LIVE <br /> STREAMING
              </h1>
              <Editable
                type="text"
                field="date"
                section="live-streaming"
                className={`${Catamaran.className} mt-2`}
              />
              <Editable
                type="text"
                field="time"
                section="live-streaming"
                className={`${Catamaran.className} mb-4`}
              />
            </div>
          </div>
        </div>
        <div
          className="py-6 px-10 flex flex-col items-center justify-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <Editable
            type="text"
            field="subheading"
            section="live-streaming"
            className={`${Catamaran.className} text-primary-text text-left mb-20 outline-black focus:outline-black`}
          />
          <button className="bg-transparent hover:bg-gray-300 text-primary-text font-normal py-2 px-4 rounded-lg border border-primary-text w-56">
            Join Now
          </button>
        </div>
      </div>
    </Section>
  );
}
