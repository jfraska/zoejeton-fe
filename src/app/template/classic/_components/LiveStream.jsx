import { Selina, Catamaran } from "@/styles/fonts";

export default function LiveStream() {
  return (
    <section
      className="bg-[#75787C] relative w-full min-h-screen pb-5 px-5 gap-4 text-center"
    >
      <div className="bg-[#D9D9D9] rounded-[100px] overflow-hidden max-w-sm p-4 flex flex-col items-center shadow-xl">
        <div className="w-[345px] h-[455px] bg-[#797979] rounded-[100px]">
          <div className="flex flex-col text-left items-start justify-start pt-16 pl-10">
            <h1 className={`${Selina.className} text-6xl text-white`}>LIVE <br /> STREAMING</h1>
            <p className={`${Catamaran.className} text-white mt-2 text-base`}>Minggu, 30 Juni 2023</p>
            <p className={`${Catamaran.className} text-white mb-4 text-base`}>12.00 - 14.00</p>
          </div>
        </div>
        <div className="py-6 px-10 flex flex-col items-center justify-center">
          <p className={`${Catamaran.className} text-black text-left mb-20`}>
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <button className="bg-transparent hover:bg-gray-300 text-black font-normal py-2 px-4 rounded-lg border border-black w-56">Join Now</button>
        </div>
      </div>
    </section>
  );
}
