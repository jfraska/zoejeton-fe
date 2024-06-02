import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full md:pt-[20vh] pt-[15vh] pb-[10vh] text-black  bg-opacity-30 flex flex-col md:items-center items-start px-[3%] justify-center">
      <h1 className="text-2xl md:text-center text-left uppercase w-2/3">
        Tentukan tema, warna, ornament, dan impian lain yang kamu inginkan
        bersama tim desain yang sudah ahli dibidangnya.
      </h1>
      {/* <p className="w-2/4 text-xs md:text-lg">
        Tentukan tema, warna, ornament, dan impian lain yang kamu inginkan
        bersama tim desain yang sudah ahli dibidangnya.
      </p> */}
      <a
        href=""
        className="mt-7 py-1 flex gap-2 uppercase px-2 border border-black rounded-full text-black"
      >
        <h1>Konsultasi Sekarang</h1>
        <span
          className="w-5 aspect-square icon-[carbon--arrow-up]"
          style={{ color: "black", transform: "rotate(90deg)" }}
        />
      </a>
    </header>
  );
}
