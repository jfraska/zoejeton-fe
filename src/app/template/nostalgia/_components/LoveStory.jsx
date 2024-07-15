import { GenteRomantica, Catamaran } from "@/styles/fonts";

export default function LoveStory() {
  return (
    <section
      className="relative w-full h-fit py-20 px-10 flex flex-col justify-start items-center gap-4 text-center"
      name="story"
    >
      <h1 className={`${GenteRomantica.className} mb-4 text-5xl`}>
        Kisah Cinta
      </h1>

      <div>
        <h1 className={`${Catamaran.className}text-base font-medium`}>
          SEMARANG, 19 jUNI 2021
        </h1>
        <p className={`${Catamaran.className}text-sm pt-4`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus.
        </p>
      </div>

      <div>
        <h1 className={`${Catamaran.className}text-base font-medium pt-8`}>
          SEMARANG, 19 jUNI 2021
        </h1>
        <p className={`${Catamaran.className}text-sm pt-4`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus.
        </p>
      </div>
    </section>
  );
}
