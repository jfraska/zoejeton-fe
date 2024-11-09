"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { Selina } from "@/styles/fonts";
import { LockScreen as LockScreenWrapper } from "@/components/container/template/wrapper-template";
import CustomizeContext from "@/context/CustomizeContext";
import { useSearchParams } from "next/navigation";

export default function Lockscreen({ type, id }) {
  const [state, setState] = useState(false);
  const searchParams = useSearchParams();
  const { dataGuest } = useContext(CustomizeContext);

  return (
    <LockScreenWrapper
      open={state}
      type={type}
      className="flex flex-col justify-between py-16 items-center text-secondary-text"
      id={id}
    >
      <div className="text-center w-full max-w-xs">
        <Image
          className="w-6 aspect-square mx-auto"
          src={"/assets/icons/zoejeton-outline.svg"}
          width={26}
          height={20}
          alt="logo"
        />
        <h2 className="uppercase mt-6 text-xl">The Wedding of</h2>
        <h1
          className={`${Selina.className} flex flex-col text-center mt-10 text-7xl font-medium`}
        >
          <span>Elva</span> <span>&</span>
          <span>Ega</span>
        </h1>
      </div>

      <div className="mb-10 w-64 text-center">
        <h1 className={`uppercase`}>Special Invitation</h1>
        <h1>Kepada Yth:</h1>
        <h1 className="text-lg font-medium capitalize mt-2">
          {dataGuest?.name || searchParams.has("to")
            ? searchParams.get("to")
            : "tamu"}
        </h1>

        {type === "lock" && (
          <button
            id="open"
            onClick={() => setState(true)}
            className="relative rounded-full p-1 w-full bg-white text-black flex justify-between items-center backdrop-filter backdrop-blur-md bg-opacity-50 mt-10"
          >
            <div className="h-10 aspect-square rounded-full bg-black flex justify-center items-center z-10">
              <span
                className="w-4 aspect-square icon-[heroicons--envelope-open-20-solid]"
                style={{ color: "white" }}
              />
            </div>
            <h1 className="w-full text-center">Buka Undangan</h1>
          </button>
        )}
      </div>
    </LockScreenWrapper>
  );
}
