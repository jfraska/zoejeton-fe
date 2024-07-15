import { Selina, Catamaran } from "@/styles/fonts";

export default function Galery() {
  return (
    <section className="relative flex flex-col w-full h-fit px-5 py-10 items-center mx-auto bg-[#29414A]">
      <div className="flex gap-3 justify-around mb-4 h-20">
        <h2 className={`${Selina.className} text-white text-8xl`}>GALLERY</h2>
      </div>
      <img src="/templates/elegance/gallery-1.png" alt="" className="w-96 h-56 rounded-2xl" />

      <div className="flex items-center justify-between w-full gap-5">
        <div className="relative flex flex-col items-center justify-between gap-5 mb-4 py-5">
          <img src="/templates/elegance/gallery-2.png" alt="" className="object-cover w-48 h-60 rounded-2xl" />
          <img src="/templates/elegance/gallery-4.png" alt="" className="object-cover w-48 h-60 rounded-2xl" />
        </div>

        <div className="relative flex flex-col items-center justify-between gap-5 mb-4 py-5">
          <img src="/templates/elegance/gallery-3.png" alt="" className="object-cover w-48 h-40 rounded-2xl" />
          <img src="/templates/elegance/gallery-5.png" alt="" className="object-cover w-48 h-80 rounded-2xl" />
        </div>
      </div>

      <a href="#" className={`${Catamaran.className} w-32 flex items-center justify-center bg-white text-black p-2 rounded-xl`}>
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
        More Gallery
      </a>
    </section>
  );
}
