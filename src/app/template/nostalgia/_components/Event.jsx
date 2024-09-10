import Editable from "@/components/container/template/editable";
import { Section } from "@/components/container/template/wrapper-template";
import { GenteRomantica, Catamaran } from "@/styles/fonts";

export default function Event() {
  return (
    <Section
      className="flex items-center justify-center bg-primary-bg"
      id="event"
    >
      <div className="bg-secondary-bg rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full shadow-lg p-8 w-full mx-auto">
        <div className="text-center">
          <div className="relative mb-4">
            <img
              src="/templates/nostalgia/event.png"
              alt=""
              className="rounded-tl-full rounded-tr-full w-full object-cover h-72"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div
              className="flex flex-col gap-3 text-secondary-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className={`${GenteRomantica.className}`}>Akad Nikah</p>
              <Editable
                type="text"
                field="akad"
                subfield="date"
                section="event"
                className={`${Catamaran.className}`}
              />
              <Editable
                type="text"
                field="akad"
                subfield="loc"
                section="event"
                className={`${Catamaran.className}`}
              />
              <Editable
                type="text"
                field="akad"
                subfield="time"
                section="event"
                className={`${Catamaran.className}`}
              />
              <Editable
                type="text"
                field="akad"
                subfield="desc"
                section="event"
                className={`${Catamaran.className}`}
              />
            </div>
            <div
              className="flex flex-col gap-3 text-secondary-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className={`${GenteRomantica.className}`}>Resepsi</p>
              <Editable
                type="text"
                field="resepsi"
                subfield="date"
                section="event"
                className={`${Catamaran.className}`}
              />
              <Editable
                type="text"
                field="resepsi"
                subfield="loc"
                section="event"
                className={`${Catamaran.className}`}
              />
              <Editable
                type="text"
                field="resepsi"
                subfield="time"
                section="event"
                className={`${Catamaran.className}`}
              />
              <Editable
                type="text"
                field="resepsi"
                subfield="desc"
                section="event"
                className={`${Catamaran.className}`}
              />
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-secondary-bg text-secondary-text px-4 py-2 border rounded-tl-full rounded-bl-full shadow">
                Save The Date
              </button>
              <button className="bg-secondary-bg text-secondary-text px-4 py-2 border rounded-tr-full rounded-br-full shadow">
                Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
