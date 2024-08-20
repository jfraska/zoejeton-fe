import { Selina, Catamaran } from "@/styles/fonts";
import Editable from "@/components/container/editable";
import { Section } from "@/components/container/template/wrapper-template";
import Image from "next/image";

export default function Event() {
  return (
    <Section
      className="bg-secondary-bg text-secondary-text flex flex-col items-center justify-center min-h-full space-y-8 py-10 px-3"
      id="event"
    >
      <div className="relative h-full rounded-xl shadow-lg max-w-sm text-center flex flex-col items-center justify-around py-3">
        <Image
          fill
          src="/templates/elegance/event-1.png"
          alt="Akad Nikah Image"
          className="brightness-125 bg-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="z-10" data-aos="zoom-in" data-aos-duration="1000">
          <h1 className={`${Selina.className} text-6xl`}>
            AKAD <br /> NIKAH
          </h1>
          <Editable
            type="text"
            field="akad"
            subfield="date"
            section="event"
            className={`${Catamaran.className} mt-2 text-base`}
          />
          <Editable
            type="text"
            field="akad"
            subfield="time"
            section="event"
            className={`${Catamaran.className} mb-4 text-base`}
          />
          <Editable
            type="text"
            field="akad"
            subfield="desc"
            section="event"
            className={`${Catamaran.className} mb-6 px-4 text-sm`}
          />
          <Editable type="link" field="akad" subfield="loc" section="event">
            <a
              href="/"
              target="_blank"
              className={`${Catamaran.className} flex items-center justify-center bg-accent-bg text-accent-text px-4 py-2 rounded-full`}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              Location
            </a>
          </Editable>
        </div>
      </div>
      <div className="relative h-full rounded-xl shadow-lg max-w-sm text-center flex flex-col items-center justify-around py-3">
        <Image
          fill
          src="/templates/elegance/event-2.png"
          alt="Akad Nikah Image"
          className="brightness-125 bg-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="z-10" data-aos="zoom-in" data-aos-duration="1000">
          <h1 className={`${Selina.className} text-6xl`}>RESEPSI</h1>
          <Editable
            type="text"
            field="resepsi"
            subfield="date"
            section="event"
            className={`${Catamaran.className} mt-2 text-base`}
          />
          <Editable
            type="text"
            field="resepsi"
            subfield="time"
            section="event"
            className={`${Catamaran.className} mb-4 text-base`}
          />
          <Editable
            type="text"
            field="resepsi"
            subfield="desc"
            section="event"
            className={`${Catamaran.className} mb-6 px-4 text-sm`}
          />
          <Editable type="link" field="resepsi" subfield="loc" section="event">
            <a
              href="/"
              target="_blank"
              className={`${Catamaran.className} flex items-center justify-center bg-accent-bg text-accent-text px-4 py-2 rounded-full`}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              Location
            </a>
          </Editable>
        </div>
      </div>
    </Section>
  );
}
