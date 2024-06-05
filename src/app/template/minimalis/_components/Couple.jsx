import { Runalto } from "@/styles/fonts";

export default function Couple() {
  return (
    <section className="relative w-full h-fit py-10" name="couple">
      <div
        className="relative w-2/3 h-64 bg-secondary bg-cover"
        style={{
          backgroundImage: "url('/templates/minimalis/5.heic')",
        }}
      >
        <div className="absolute -top-[75px] -right-[75px] w-[150px] h-[150px] flex justify-center items-center" />
      </div>
      <div className="mt-7 flex flex-col gap-2 px-8">
        <h1 className={` ${Runalto.className} text-lg font-bold`}>
          Jeton Hizaya
        </h1>
        <p className="text-sm">
          Putra dari Bapak Demak Parsaoran (Alm) & Ibu Ratnawati Hutauruk
        </p>
      </div>
      <div
        className={` ${Runalto.className} w-full text-center text-4xl mt-14 mb-4`}
      >
        The Bride
      </div>
      <div className="flex justify-around w-full h-64 px-10">
        <div className="w-full h-full bg-secondary"></div>
        <div className="w-full h-full flex flex-col justify-around">
          <div className="w-full h-full bg-secondary"></div>
          <div className="w-full h-full bg-secondary"></div>
        </div>
      </div>
      <div className="mt-7 flex flex-col items-center gap-2 px-10 text-center">
        <h1 className={`${Runalto.className} text-lg font-bold`}>Zoe Himaya</h1>
        <p className="text-sm">Putri dari Bpk M Syarik & Ibu Isharni</p>
      </div>
      <div className="flex gap-2 items-center justify-center mt-10">
        <span className="w-5 text-foreground aspect-square icon-[ic--baseline-arrow-circle-right]" />
        <h1>Instagram</h1>
      </div>
    </section>
  );
}
