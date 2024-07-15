import { Selina, Catamaran } from "@/styles/fonts";

export default function Gift() {
  return (
    <section
      className="bg-[#333333] flex items-center justify-start w-full h-80 px-5 mx-auto"
      name="gift"
    >
      <div className="rounded-2xl overflow-hidden max-w-sm text-center">
        <div className="relative text-white">
          <img src="/templates/elegance/gift.png" alt="Gift Image" className="bg-cover w-full opacity-50" />
          <div className="absolute inset-0 flex flex-col items-start justify-start gap-5 pt-7 pl-7">
            <h1 className={`${Selina.className} text-5xl`}>WEDDING GIFT</h1>
            <p className={`${Catamaran.className} w-64 text-left text-base`}>
              For those of you who want to give a token of love to the bride and groom, you can use the virtual account / E-wallet below:
            </p>
            <a href="#" className={`${Catamaran.className} w-28 flex items-center justify-center bg-white text-black p-2 rounded-xl`}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 3.54 2.98 6.85 7.72 11.54.38.38.99.38 1.38 0C16.02 15.85 19 12.54 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              Give Gift
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
