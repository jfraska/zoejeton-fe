import { Selina, Catamaran } from "@/styles/fonts";

export default function Thanks() {
  return (
    <section
      className="bg-[#333333] relative flex flex-col items-center justify-start w-full min-h-screen p-5 mx-auto"
      name="thanks"
    >
      <div className="rounded-2xl overflow-hidden max-w-sm text-center">
        <div className="relative">
          <img src="/templates/elegance/thanks.png" alt="Gift Image" className="bg-cover w-full opacity-50" />
          <div className="absolute inset-0 flex flex-col items-start justify-start gap-5 pt-7 pl-7 text-black">
            <h1 className={`${Selina.className} text-6xl text-left`}>THANK <br /> YOU</h1>
            <p className={`${Catamaran.className} w-64 font-bold text-left text-base`}>
              Merupakan suatu kebahagiaan dan kehormataan bagi kami, apabila Bapak/Ibu/Saudara, berkenaan hadir dan memberikan do’a restu kepada kami.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[20%] inset-x-0 w-full text-center text-white">
        <h2 className={`${Catamaran.className} text-sm`}>© ZoeJeton</h2>
        <h2 className={`${Catamaran.className} text-sm pt-3`}>© All right reserved by ZoeJeton</h2>
      </div>
    </section>
  );
}
