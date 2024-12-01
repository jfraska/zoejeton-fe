import { Section } from "@/components/container/customize/wrapper-template";
import { Selina } from "@/styles/fonts";

export default function Closing() {
  return (
    <Section
      className="flex flex-col justify-center items-center text-secondary-text h-full"
      id="closing"
      styles={{
        objectPosition: "40% center",
        filter: "brightness(0.8)",
      }}
    >
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className={`${Selina.className} text-7xl text-left font-medium w-64`}
      >
        Terima Kasih
      </h1>
      <p data-aos="fade-up" data-aos-duration="1000" className="mt-2 w-64">
        Merupakan suatu kebahagiaan dan kehormataan bagi kami, apabila
        Bapak/Ibu/Saudara, berkenaan hadir dan memberikan do’a restu kepada
        kami.
      </p>
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
