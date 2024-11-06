import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import Image from "next/image";

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
    </Section>
  );
}
