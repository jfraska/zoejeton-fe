import { Selina, Catamaran } from "@/styles/fonts";
import Editable from "@/components/container/editable";
import { Section } from "@/components/container/template/wrapper-template";
import Image from "next/image";

export default function LoveStory() {
  return (
    <Section
      className="relative w-full h-fit py-5 px-5 bg-primary-bg flex flex-col justify-start items-center gap-4 text-center"
      id="love-story"
    >
      <div className="bg-accent-bg rounded-2xl overflow-hidden shadow-lg max-w-sm p-4">
        <Editable
          className="relative rounded-2xl w-full h-96 overflow-hidden outline-black focus:outline-black"
          type="image"
          field="image"
          section="love-story"
        >
          <Image
            fill
            alt="image"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Editable>
        <div
          className="p-6 text-accent-text"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1 className={`${Selina.className} text-6xl mb-4`}>Love Story</h1>
          <Editable
            type="text"
            field="story1"
            subfield="subheading"
            section="love-story"
            className={`${Catamaran.className} mb-6 outline-accent-text focus:outline-accent-text`}
          />
          <Editable
            type="link"
            field="more"
            section="love-story"
            className="outline-accent-text focus:outline-accent-text"
          >
            <a
              href="/"
              target="_blank"
              className={`${Catamaran.className} flex items-center justify-center text-accent-text hover:text-gray-500`}
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.585-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.851.07s-3.585-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.851s.012-3.585.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.851-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.42.065-2.688.32-3.737 1.369-1.049 1.049-1.304 2.317-1.369 3.737-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.065 1.42.32 2.688 1.369 3.737 1.049 1.049 2.317 1.304 3.737 1.369 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.42-.065 2.688-.32 3.737-1.369 1.049-1.049 1.304-2.317 1.369-3.737.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.065-1.42-.32-2.688-1.369-3.737-1.049-1.049-2.317-1.304-3.737-1.369-1.28-.059-1.688-.072-4.947-.072z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.882 1.44 1.44 0 0 0 0-2.882z" />
              </svg>
              Instagram
            </a>
          </Editable>
        </div>
      </div>
    </Section>
  );
}
