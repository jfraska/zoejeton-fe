import styles from "./styles.module.scss";
import { price } from "@/constants";
import Image from "next/image";

export default function Galery() {
  return (
    <section data-scroll-section className="w-full px-[3%]" id="galery">
      <div className="w-full mt-2 border-b border-black" />
      <div className="flex justify-between items-center text-base mt-2 gap-10">
        <h1 className="w-2/5 text-3xl">Galery</h1>
        <div className="w-3/5 flex justify-end md:justify-between items-center h-full">
          <h1 className="hidden md:block">per conubia nostra</h1>
          <button
            type="submit"
            className="flex px-1 md:text-base text-sm uppercase justify-center items-center border border-black rounded-full text-black"
          >
            Creative Scene
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start mt-10 md:gap-10 gap-3">
        <div
          className="w-2/5 h-40 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: "url('/assets/images/bg2.jpg')",
          }}
        ></div>
        <div
          className="w-3/5 h-40 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: "url('/assets/images/bg2.jpg')",
          }}
        ></div>
      </div>

      <div className="w-full mt-5 border-b border-black" />
    </section>
  );
}
