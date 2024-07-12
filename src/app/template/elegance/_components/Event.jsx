import { Selina, Catamaran } from "@/styles/fonts";

export default function Event() {
  return (
    <section
      className="bg-[#333333] flex flex-col items-center justify-center min-h-screen space-y-8 py-10"
      name="event"
    >
      <div className="rounded-xl overflow-hidden shadow-lg max-w-sm h-96 text-center">
        <div className="relative">
          <img src="/templates/elegance/event-1.png" alt="Akad Nikah Image" className="w-full opacity-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-around py-3">
            <h1 className={`${Selina.className} text-6xl text-white`}>AKAD <br /> NIKAH</h1>
            <p className={`${Catamaran.className} text-white mt-2 text-base`}>Minggu, 30 Juni 2023</p>
            <p className={`${Catamaran.className} text-white mb-4 text-base`}>12.00 - 14.00</p>
            <p className={`${Catamaran.className} text-gray-400 mb-6 px-4 text-sm`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.
            </p>
            <a href="#" className={`${Catamaran.className} flex items-center justify-center bg-white text-gray-800 px-4 py-2 rounded-full`}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              Location
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg max-w-sm text-center">
        <div className="relative">
          <img src="/templates/elegance/event-2.png" alt="Resepsi Image" className="w-full opacity-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-around py-3">
            <h1 className={`${Selina.className} text-6xl text-white`}>RESEPSI</h1>
            <p className={`${Catamaran.className} text-white mt-2 text-base`}>Minggu, 30 Juni 2023</p>
            <p className={`${Catamaran.className} text-white mb-4 text-base`}>12.00 - 14.00</p>
            <p className={`${Catamaran.className} text-gray-400 mb-6 px-4 text-sm`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.
            </p>
            <a href="#" className={`${Catamaran.className} flex items-center justify-center bg-white text-gray-800 px-4 py-2 rounded-full`}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
