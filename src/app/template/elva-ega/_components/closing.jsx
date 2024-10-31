import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";

export default function Closing() {
  return (
    <Section
      className="relative flex flex-col items-center justify-start h-full text-accent-text"
      id="closing"
    >
      <div
        className="flex flex-col items-start justify-start gap-5 mt-20 w-full pl-10 pr-28"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className={`${Selina.className} text-6xl text-left`}>
          Terima Kasih
        </h1>
        <h2>
          Merupakan suatu kebahagiaan dan kehormataan bagi kami, apabila
          Bapak/Ibu/Saudara, berkenaan hadir dan memberikan do’a restu kepada
          kami.
        </h2>
      </div>
      <div className="absolute bottom-5 inset-x-0 w-full text-center">
        <a
          href="https://www.instagram.com/zoejeton"
          target="_blank"
          className="text-sm"
        >
          @zoejeton
        </a>
        <h2 className="text-sm mt-2">© All right reserved by ZoeJeton</h2>
      </div>
    </Section>
  );
}
