import { GenteRomantica } from "@/styles/fonts";

export default function Galery() {
  return (
    <section className="relative flex flex-col w-full h-fit p-4 items-center mx-auto bg-[#333333]">
      <div className="relative mb-4 w-full">
        <img
          src="/templates/nostalgia/gallery-1.png"
          alt=""
          className="object-cover w-96 h-[431px] rounded-2xl"
        />
        <h2
          className={`${GenteRomantica.className} absolute top-4 inset-x-0 w-full text-center text-4xl`}
        >
          Our Gallery
        </h2>
      </div>

      <div className="relative mb-4 w-full">
        <img
          src="/templates/nostalgia/gallery-2.png"
          alt=""
          className="object-cover w-96 h-56 rounded-2xl"
        />
      </div>

      <div className="flex relative mb-4 w-full gap-5">
        <div className="flex-1">
          <img
            src="/templates/nostalgia/gallery-3.png"
            alt=""
            className="object-cover w-full aspect-9/16 rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <img
            src="/templates/nostalgia/gallery-4.png"
            alt=""
            className="object-cover w-full aspect-9/16 rounded-2xl"
          />
        </div>
      </div>

      <div className="relative mb-4 w-full">
        <img
          src="/templates/nostalgia/gallery-5.png"
          alt=""
          className="object-cover w-96 h-56 rounded-2xl"
        />
      </div>
    </section>
  );
}
