"use client";

import { useContext } from "react";
import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import GreetingService from "@/services/greeting-service";
import CustomizeContext from "@/context/CustomizeContext";
import { ScrollArea } from "@/components/UI/scroll-area";
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
    <Section
      className="bg-primary-bg text-secondary-text w-full h-fit"
      id="wish"
    >
      <div className="relative w-full h-28">
        <Image
          fill
          src="/templates/elva-ega/asset-1.svg"
          alt="image"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative flex flex-col gap-5 aspect-9/16 py-10 px-10 items-center bg-[#c74848]">
        <Image
          src="/templates/elva-ega/asset-3.svg"
          width={300}
          height={300}
          alt="image"
          className="absolute top-0 left-0 "
        />
        <Image
          src="/templates/elva-ega/asset-4.svg"
          width={300}
          height={300}
          alt="image"
          className="absolute bottom-10 right-0 "
        />
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className={`${Selina.className} text-6xl font-medium text-center`}
        >
          Wedding WIsh
        </h1>

        {/* <ScrollArea
          id="scrollableDiv"
          className="h-2/3 w-full rounded-md border"
        > */}
        <InfiniteScroll
          dataLength={paginatedData?.length ?? 0}
          next={() => setSize(size + 1)}
          hasMore={!isReachedEnd}
          loader={<h4>Loading...</h4>}
          height={400}
          // scrollableTarget="scrollableDiv"
        >
          {paginatedData?.map((message) => {
            <div key={message.id}>{message.name}</div>;
          })}
        </InfiniteScroll>
        {/* </ScrollArea> */}

        <CreateMessage mutate={mutate} />
      </div>
    </Section>
  );
}
