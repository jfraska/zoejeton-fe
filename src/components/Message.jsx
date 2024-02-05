"use client";
import { Icon } from "@iconify/react";

export default function Message() {
  return (
    <section
      data-scroll-section
      className="relative w-full pt-20 pb-5 flex gap-2 flex-nowrap whitespace-nowrap overflow-hidden z-10 shadow-xl bg-white"
    >
      <div className="flex gap-2 text-black items-stretch">
        <div className="flex gap-0 flex-col">
          <h1 className="uppercase text-[120px] leading-none">Check</h1>
          <h1 className="uppercase text-[120px] leading-none">These Out</h1>
        </div>
        <div className="flex gap-0 flex-col justify-end">
          <h1 className="m-auto uppercase text-xl leading-none whitespace-pre">
            (SOME MORE {"\n"}
            INFORMATION)
          </h1>
          <div className="flex gap-1">
            <Icon
              icon="carbon:arrow-up"
              vFlip={true}
              color="black"
              width="120"
            />
            <Icon
              icon="carbon:arrow-up"
              vFlip={true}
              color="black"
              width="120"
            />
            <Icon
              icon="carbon:arrow-up"
              vFlip={true}
              color="black"
              width="120"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2 text-black items-stretch">
        <div className="flex gap-0 flex-col">
          <h1 className="uppercase text-[120px] leading-none">Check</h1>
          <h1 className="uppercase text-[120px] leading-none">These Out</h1>
        </div>
        <div className="flex gap-0 flex-col justify-end">
          <h1 className="m-auto uppercase text-xl leading-none whitespace-pre">
            (SOME MORE {"\n"}
            INFORMATION)
          </h1>
          <div className="flex gap-1">
            <Icon
              icon="carbon:arrow-up"
              vFlip={true}
              color="black"
              width="120"
            />
            <Icon
              icon="carbon:arrow-up"
              vFlip={true}
              color="black"
              width="120"
            />
            <Icon
              icon="carbon:arrow-up"
              vFlip={true}
              color="black"
              width="120"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
