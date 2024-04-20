import Image from "next/image";

export default function Header() {
  return (
    <header
      data-scroll-section
      className="relative w-full h-[70vh] bg-blend-multiply bg-black text-white  bg-opacity-30 bg-cover flex flex-col items-center justify-center "
      style={{
        backgroundImage: "url('/assets/images/palm.jpg')",
      }}
    >
      <h1 className="text-xl md:text-4xl">Wujudkan desain impianmu!</h1>
      <p className="w-2/4 text-xs md:text-lg text-center">
        Tentukan tema, warna, ornament, dan impian lain yang kamu inginkan
        bersama tim desain yang sudah ahli dibidangnya.
      </p>
      <a
        href=""
        className="flex mt-7 justify-between items-center bg-white rounded-full py-2 px-4 text-black"
      >
        <h1 className="uppercase text-base md:text-xl leading-none">
          Konsultasi Undangan
        </h1>
        <span
          className="w-5 aspect-square icon-[carbon--arrow-up]"
          style={{ color: "black", transform: "rotate(90deg)" }}
        />
      </a>
    </header>
  );
}
