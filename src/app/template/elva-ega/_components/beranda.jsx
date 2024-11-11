import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import Image from "next/image";

export default function Beranda() {
  return (
    <Section className="w-full text-secondary-text" id="beranda">
      <div className="absolute inset-0 h-[1750px] w-full -z-[1]">
        <Image
          fill
          src="/templates/elva-ega/7.jpg"
          alt="beranda bg"
          style={{
            objectFit: "cover",
            objectPosition: "40% center",
          }}
          sizes="1750px"
        />
      </div>
      <div className="absolute inset-0 top-[1750px] h-[1750px] w-full -z-[1]">
        <Image
          fill
          src="/templates/elva-ega/7.jpg"
          alt="beranda bg"
          style={{
            objectFit: "cover",
            objectPosition: "40% center",
          }}
          sizes="1750px"
        />
      </div>
      <div className="absolute inset-0 top-[3500px] h-[1750px] w-full -z-[1]">
        <Image
          fill
          src="/templates/elva-ega/7.jpg"
          alt="beranda bg"
          style={{
            objectFit: "cover",
            objectPosition: "40% center",
          }}
          sizes="1750px"
        />
      </div>
      <div
        className="relative h-full w-full px-4 pt-28 pb-40 flex flex-col justify-start items-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <Image
          src="/templates/elva-ega/asset-5.svg"
          alt="beranda"
          width={100}
          height={100}
        />
        <p className="text-center mt-16 w-5/6">
          “Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antara mau rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir”
        </p>
        <p className="text-center mt-6 font-medium">QS. Ar - Rum 21</p>
      </div>
    </Section>
  );
}
