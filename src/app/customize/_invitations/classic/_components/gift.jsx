import Editable from "@/components/container/customize/editable";
import { Section } from "@/components/container/customize/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";

export default function Gift() {
  return (
    <Section
      className="bg-secondary-bg text-secondary-text flex items-center justify-center w-full h-96 px-5 py-10 mx-auto"
      name="gift"
    >
      <div
        className="flex flex-col gap-5 pt-7 items-center justify-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className={`${Selina.className} text-5xl`}>WEDDING GIFT</h1>
        <Editable
          type="text"
          field="subheading"
          section="gift"
          className={`${Catamaran.className} w-64 text-center`}
        />
        <a
          href="#"
          className={`${Catamaran.className} w-28 flex items-center justify-center bg-white text-black p-2 rounded-xl`}
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          Give Gift
        </a>
      </div>
    </Section>
  );
}
