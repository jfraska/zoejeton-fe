import Editable from "@/components/container/editable";
import { Section } from "@/components/container/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";

export default function Couple() {
  return (
    <Section
      className="relative w-full bg-primary-bg text-secondary-text flex items-center justify-center min-h-screen"
      id="couple"
    >
      <div className="flex items-center justify-center w-full space-y-8 pb-10 px-2">
        <img
          src="/templates/classic/decor-bl.png"
          alt="decor bl"
          className="z-0 w-52 absolute top-0 left-0 transform scale-y-[-1]"
        />
        <div
          className="flex-col z-10 rounded-[100px] pl-5 pt-10 pb-4 w-96 h-[850px] aspect-square bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/templates/classic/couple.png')",
          }}
        >
          <div
            className="flex flex-col items-left justify-around p-5 mb-10 space-x-4 w-72"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <h2 className={`${Selina.className} text-6xl`}>
                <Editable
                  type="text"
                  field="groom"
                  subfield="name"
                  section="couple"
                />
              </h2>
              <Editable
                type="text"
                field="groom"
                subfield="desc"
                section="couple"
                className={`${Catamaran.className} mt-2 text-base`}
              />
              <Editable
                type="link"
                field="groom"
                subfield="instagram"
                section="couple"
                className="mt-10"
              >
                <a
                  href="/"
                  target="_blank"
                  className={`${Catamaran.className} w-28 h-8 bg-white text-black rounded-lg flex items-center justify-center`}
                >
                  <svg
                    className="inline w-5 h-5 mr-1"
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
          <div
            className="flex flex-col items-left justify-around p-5 space-x-4 w-72"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <h2 className={`${Selina.className} text-6xl`}>
                <Editable
                  type="text"
                  field="bride"
                  subfield="name"
                  section="couple"
                />
              </h2>
              <Editable
                type="text"
                field="bride"
                subfield="desc"
                section="couple"
                className={`${Catamaran.className} mt-2 text-base`}
              />
              <Editable
                type="link"
                field="bride"
                subfield="instagram"
                section="couple"
                className="mt-10"
              >
                <a
                  href="/"
                  target="_blank"
                  className={`${Catamaran.className} w-28 h-8 bg-white text-black rounded-lg flex items-center justify-center`}
                >
                  <svg
                    className="inline w-5 h-5 mr-1"
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
        </div>
      </div>
    </Section>
  );
}
