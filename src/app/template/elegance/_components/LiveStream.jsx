import { Selina, Catamaran } from "@/styles/fonts";

export default function LiveStream() {
  return (
    <section
      className="bg-[#333333] text-white flex items-center justify-center min-h-screen py-8 px-5"
    >
      <div className="max-w-md w-full">
        <h1 className={`${Selina.className} text-6xl font-light mb-4`}>LIVE <br/> STREAMING</h1>
        <p className={`${Catamaran.className} text-lg mb-8`}>MINGGU, 30 JUNI 2023 <br/> 12.00 - 14.00</p>
        <div className="relative mb-8">
          <img src="/templates/elegance/streaming.png" alt="Live Streaming" className="rounded-xl"/>
        </div>
        <p className={`${Catamaran.className} mb-8`}>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        <button className="bg-transparent hover:bg-gray-900 text-white font-normal py-2 px-4 rounded-lg border border-white w-56">Join Now</button>
      </div>
    </section>
  );
}
