import "./style.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";

import Brand from "./_components/Brand";
import Button from "./_components/Button";
import ButtonShare from "@/components/container/button-share";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Bio | ZoeJeton",
  description: "by fraska",
};

export default function Page() {
  const urlShare = process.env.NEXT_PUBLIC_ROOT_DOMAIN
    ? `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/bio`
    : `localhost:3000/bio`;

  return (
    <main
      className={`${montserrat.className} h-screen relative lg:my-10 lg:max-w-md w-full min-h-full px-5 pt-24 pb-5 mx-auto lg:rounded-lg lg:overflow-hidden`}
    >
      <Image
        className="h-full -z-10 brightness-75"
        alt="background image"
        src="/assets/images/bio.jpg"
        style={{ objectFit: "cover" }}
        fill
        priority
      />

      <ButtonShare link={urlShare}>
        <button className="absolute top-4 right-4 w-10 aspect-square rounded-lg flex justify-center items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-60 shadow-lg transition-all ease-linear duration-100 hover:scale-105 hover:bg-opacity-90 focus:outline-none">
          <Image
            src={"/assets/icons/qrcode.svg"}
            width={30}
            height={30}
            alt="share-icon"
            className="w-8 aspect-square"
          />
        </button>
      </ButtonShare>
      <Brand />

      <section className="mt-10 flex flex-col gap-2">
        <Button
          className="text-black bg-white backdrop-filter backdrop-blur-sm bg-opacity-60"
          title={"Katalog & Price List"}
          desc={"lihat desain undangan "}
          href={"/"}
        />
        <Button
          className="text-black bg-white backdrop-filter backdrop-blur-md bg-opacity-60"
          title={"Dashboard"}
          desc={"kelola undanganmu dengan mudah"}
          type="dashboard"
          href={"/"}
        />
        <Button
          className="text-black bg-white backdrop-filter backdrop-blur-md bg-opacity-60"
          title={"Guestbook"}
          desc={"sistem check in acaramu"}
          type="guestbook"
          href={"/"}
        />
      </section>

      <section className="mt-10 w-full rounded-lg flex justify-between items-center p-3 bg-neutral-800 backdrop-filter backdrop-blur-md bg-opacity-60 shadow-lg">
        <div className="flex gap-2">
          <span
            className="w-5 aspect-square icon-[fluent--chat-20-regular]"
            style={{ color: "white" }}
          />
          <h1 className="text-[14px] text-white">Customer Care</h1>
        </div>
        <a
          href="https://wa.me/+6285161710045"
          target="_blank"
          className="text-[14px] bg-white h-full px-4 py-2 rounded-lg transition-all ease-linear duration-100 hover:scale-105"
        >
          Contact
        </a>
      </section>

      <footer className="mt-20 text-white text-center p-3 text-[12px]">
        <p>Business Hours :</p>
        <p>Monday - Friday | 09.00 - 20.00 WIB</p>
        <p>Saturday | 10.00 - 16.00 WIB (Slow response)</p>
        <p>Sunday | Off</p>
        <p className="mt-10 text-[10px]">© All right reserved by ZoeJeton</p>
      </footer>
    </main>
  );
}
