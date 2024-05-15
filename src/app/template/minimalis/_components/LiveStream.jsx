import { Runalto } from "@/styles/fonts";

export default function LiveStream() {
  return (
    <section
      className="relative w-full h-screen bg-[#9D9E9A] p-10 flex flex-col justify-between bg-cover bg-center text-white bg-opacity-20 bg-blend-multiply"
      style={{
        backgroundImage: "url('/assets/templates/minimalis/4.heic')",
      }}
    >
      <div>
        <h1 className={`${Runalto.className} text-5xl`}>Live Streaming</h1>
        <h2 className="text-lg">Minggu</h2>
        <h2 className="text-lg">jam 12.00</h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <button className="border border-white py-2 px-10 mt-10">
          Join Now
        </button>
      </div>
    </section>
  );
}
