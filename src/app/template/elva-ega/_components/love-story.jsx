import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import Image from "next/image";
import CountDown from "./countdown";

export default function LoveStory() {
  return (
    <Section
      className="relative w-full h-fit p-5 bg-primary-bg text-primary-text text-center"
      id="love-story"
    >
      <div className="bg-[#EEEEEE] rounded-[100px] overflow-hidden w-full p-4 shadow-lg">
        <div className="relative w-full h-96 rounded-[100px] overflow-hidden outline-primary-text focus:outline-primary-text filter grayscale">
          <Image
            fill
            src="/templates/elva-ega/2.jpg"
            alt="image"
            style={{
              objectFit: "cover",
              transform: "scale(1.5)",
              objectPosition: "center",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className="p-6 flex flex-col items-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1 className={`${Selina.className} text-5xl mb-4 font-medium`}>
            Love Story
          </h1>
          <p>lorem ipsum ajbasbfansbf asknfbaksbf asfbkasb</p>
        </div>
      </div>

      <div className="relative mt-6 bg-[#EEEEEE] w-full overflow-hidden rounded-[50px] text-center shadow-lg">
        <div
          className="flex flex-col items-center justify-around p-5 z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <CountDown deadline={"Sabtu, 24 November 2024"} />
          <a
            href="#"
            className="flex items-center justify-center mt-4 w-full bg-white text-gray-800 px-4 py-2 rounded-full"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            Save date
          </a>
        </div>
      </div>
    </Section>
  );
}
