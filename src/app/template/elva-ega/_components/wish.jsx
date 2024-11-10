"use client";

import { useContext } from "react";
import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import GreetingService from "@/services/greeting-service";
import CustomizeContext from "@/context/CustomizeContext";
import usePagination from "@/hooks/usePagination";
import InfiniteScroll from "react-infinite-scroll-component";
import CreateMessage from "./create-message";
import Image from "next/image";

export default function Wish() {
  const { data: template } = useContext(CustomizeContext);

  const { paginatedData, isReachedEnd, setSize, size, mutate } = usePagination(
    GreetingService.getAllGreeting,
    template.id
  );

  return (
    <Section className="text-secondary-text w-full h-fit" id="wish">
      <div className="relative flex flex-col gap-5 pt-20 pb-36 px-10 items-center bg-[#23282A] rounded-[99px]">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className={`${Selina.className} text-4xl font-medium text-center uppercase`}
        >
          UCAPAN & DOA
        </h1>
        <h2 className="text-xl">Berikan doa dan harapan terbaik untuk kami</h2>

        <div className="w-full mt-5">
          <InfiniteScroll
            dataLength={paginatedData?.length ?? 0}
            next={() => setSize(size + 1)}
            hasMore={!isReachedEnd}
            loader={<h4>Loading...</h4>}
            height={500}
            className="space-y-4 scroll"
          >
            {paginatedData.map((e) => (
              <div
                key={e.id}
                className="w-full flex flex-col gap-2 rounded-xl px-6 py-2 bg-white shadow-lg text-black backdrop-filter backdrop-blur-md bg-opacity-60"
              >
                <div className=" flex justify-between">
                  <h1 className="font-medium text-lg capitalize">{e.name}</h1>
                  <h2 className="text-xs">{e.name}</h2>
                </div>
                <p className="text-sm">{e.message}</p>
              </div>
            ))}
          </InfiniteScroll>
        </div>

        <CreateMessage mutate={mutate} data={template} />
      </div>
    </Section>
  );
}
