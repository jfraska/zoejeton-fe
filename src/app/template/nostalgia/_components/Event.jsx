import { GenteRomantica, Catamaran } from "@/styles/fonts";

export default function Event() {
  return (
    <section
      className=" bg-[#333333] flex items-center justify-center min-h-screen"
      name="event"
    >
      <div className="bg-white rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full shadow-lg p-8 w-full mx-auto">
        <div className="text-center">
          <div className="relative mb-4">
            <img src="/templates/nostalgia/event.png" alt="" className="rounded-tl-full rounded-tr-full w-full object-cover h-72" />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className={`${GenteRomantica.className} text-black`}>Akad Nikah</p>
              <p className={`${Catamaran.className} text-black`}>Minggu, 30 Juni 2023</p>
              <p className={`${Catamaran.className} text-black`}>Grand Hotel</p>
              <p className={`${Catamaran.className} text-black`}>12.00 - 14.00</p>
              <p className={`${Catamaran.className} text-black`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Etiam eu turpis molestie,</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className={`${GenteRomantica.className} text-black`}>Resepsi</p>
              <p className={`${Catamaran.className} text-black`}>Minggu, 30 Juni 2023</p>
              <p className={`${Catamaran.className} text-black`}>Grand Hotel</p>
              <p className={`${Catamaran.className} text-black`}>12.00 - 14.00</p>
              <p className={`${Catamaran.className} text-black`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Etiam eu turpis molestie,</p>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-white text-black px-4 py-2 border rounded-tl-full rounded-bl-full shadow">Save The Date</button>
              <button className="bg-white text-black px-4 py-2 border rounded-tr-full rounded-br-full shadow">Maps</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
