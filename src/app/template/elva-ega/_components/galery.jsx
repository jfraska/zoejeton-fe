import { Section } from "@/components/container/template/wrapper-template";
import { Selina, Catamaran } from "@/styles/fonts";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Galery() {
  return (
    <Section
      className="relative flex flex-col w-full px-5 pt-20 pb-32 items-center mx-auto bg-[#262B2E] text-secondary-text rounded-tr-[99px] rounded-tl-[99px]"
      id="galery"
    >
      <div className="flex gap-3 w-full justify-around h-20">
        <h2 className={`${Selina.className} text-7xl font-medium`}>GALLERY</h2>
      </div>

      <PhotoProvider>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative w-full h-64 rounded-2xl overflow-hidden mt-10"
        >
          <PhotoView src="/templates/elva-ega/5.jpg">
            <Image
              fill
              src="/templates/elva-ega/5.jpg"
              alt="image"
              style={{
                objectFit: "cover",
                objectPosition: "40% 0%",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </PhotoView>
        </div>

        <div className="flex items-center justify-between w-full gap-5">
          <div className="relative w-full flex flex-col items-center justify-between gap-5 mb-4 py-5">
            <PhotoView src="/templates/elva-ega/4.jpg">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="relative w-full h-72 rounded-2xl overflow-hidden"
              >
                <Image
                  fill
                  src="/templates/elva-ega/4.jpg"
                  alt="image"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </PhotoView>
            <PhotoView src="/templates/elva-ega/3.jpg">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="relative w-full h-72 rounded-2xl overflow-hidden"
              >
                <Image
                  fill
                  src="/templates/elva-ega/3.jpg"
                  alt="image"
                  className="filter grayscale"
                  style={{
                    objectFit: "cover",
                    objectPosition: "40% 0%",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </PhotoView>
          </div>

          <div className="relative w-full flex flex-col items-center justify-between gap-5 mb-4 py-5">
            <PhotoView src="/templates/elva-ega/1.jpg">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="relative w-full h-48 rounded-2xl overflow-hidden"
              >
                <Image
                  fill
                  src="/templates/elva-ega/1.jpg"
                  alt="image"
                  className="filter grayscale"
                  style={{
                    objectFit: "cover",
                    objectPosition: "40% 0%",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </PhotoView>
            <PhotoView src="/templates/elva-ega/6.jpg">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="relative w-full h-96 rounded-2xl overflow-hidden"
              >
                <Image
                  fill
                  src="/templates/elva-ega/6.jpg"
                  alt="image"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>
    </Section>
  );
}
