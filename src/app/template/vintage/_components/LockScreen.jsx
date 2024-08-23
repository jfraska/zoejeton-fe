"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { Runalto } from "@/styles/fonts";
import CustomizeContext from "@/context/CustomizeContext";
import { LockScreen as LockScreenWrapper } from "@/components/container/wrapper-template";
import Editable from "@/components/container/editable";

export default function LockScreen({ type, id }) {
  const [state, setState] = useState(false);
  const { dataGuest } = useContext(CustomizeContext);

  return (
    <LockScreenWrapper
      open={state}
      type={type}
      className="flex flex-col justify-around items-center text-secondary-text"
      id={id}
    >
      <div className="max-w-xs text-center ">
        <Image
          className="w-8 aspect-square mx-auto mb-2"
          src={"/assets/icons/zoejeton-outline.svg"}
          width={20}
          height={20}
          alt="logo"
        />
        <h1 className="mt-5 text-xl">
          <Editable type="text" field="heading" section="lockscreen" />
        </h1>
      </div>

      <h1
        className={`${Runalto.className} flex flex-wrap text-6xl font-bold text-center`}
      >
        <Editable type="text" field="name" section="lockscreen" />
      </h1>

      <div className="w-64">
        <h1 className="text-center text-sm uppercase">
          <Editable type="text" field="subheading" section="lockscreen" />
        </h1>
        <h1 className="text-center font-medium capitalize mt-2">
          {dataGuest?.name || "guest"}
        </h1>

        {type === "lock" && (
          <button
            onClick={() => setState(true)}
            className="relative rounded-full p-2 w-full bg-white text-black flex justify-between items-center backdrop-filter backdrop-blur-md bg-opacity-50 mt-5"
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
