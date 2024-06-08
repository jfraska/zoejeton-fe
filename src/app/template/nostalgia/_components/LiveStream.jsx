import { GenteRomantica, Catamaran } from "@/styles/fonts";

export default function LiveStream() {
  return (
    <section
      className="relative w-full h-screen bg-[#333333] p-10 flex flex-col text-center justify-between gap-10"
    >
      <h1 className={`${GenteRomantica.className} text-5xl`}>Live Streaming</h1>
      <h2 className={`${Catamaran.className}text-lg`}>MINGGU, 30 JUNI 2023 </h2>
      <h2 className={`${Catamaran.className}text-lg`}>12.00-14.00</h2>
      <p className={`${Catamaran.className}text-lg`}>
        Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </p>
      <button className="border border-foreground py-2 px-10 mt-10 rounded-3xl">
        Join Now
      </button>
    </section>
  );
}
