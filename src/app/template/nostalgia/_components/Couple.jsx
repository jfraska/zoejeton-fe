import { GenteRomantica, Catamaran } from "@/styles/fonts";

export default function Couple() {
  return (
    <section className="flex items-center justify-center min-h-full">
      <div className="bg-white rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full shadow-lg p-8 w-full mx-auto z-10">
        <div className="text-center">
          <div className="relative mb-4">
            <img
              src="/templates/nostalgia/couple-1.png"
              alt=""
              className="rounded-tl-full rounded-tr-full w-full object-cover h-72"
            />
            <h2
              className={`${GenteRomantica.className} absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-4xl`}
            >
              Qetura Hizaya
            </h2>
          </div>
          <p className={`${Catamaran.className} text-black`}>
            Putra Pertama dari
          </p>
          <p className={`${Catamaran.className} text-black`}>
            Bapak Elkana & Ibu Shopia
          </p>
          <a
            href="https://www.instagram.com"
            className="text-blue-500 mt-2 inline-block"
          >
            @Instagram
          </a>
        </div>

        <hr className="my-8" />

        <div className="text-center">
          <div className="relative mb-4">
            <img
              src="/templates/nostalgia/couple-2.png"
              alt="Couple"
              className="rounded-tl-full rounded-tr-full w-full object-cover h-72"
            />
            <h2
              className={`${GenteRomantica.className} absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-4xl`}
            >
              Zoe Himaya
            </h2>
          </div>
          <p className={`${Catamaran.className} text-black`}>
            Putri Kedua dari
          </p>
          <p className={`${Catamaran.className} text-black`}>
            Bapak Sotama & Ibu Aishah
          </p>
          <a
            href="https://www.instagram.com"
            className="text-blue-500 mt-2 inline-block"
          >
            @Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
