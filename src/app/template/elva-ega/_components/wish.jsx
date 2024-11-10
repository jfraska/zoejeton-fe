"use client";

import { useContext } from "react";
import { Section } from "@/components/container/template/wrapper-template";
import { Selina } from "@/styles/fonts";
import GreetingService from "@/services/greeting-service";
import CustomizeContext from "@/context/CustomizeContext";
import usePagination from "@/hooks/usePagination";
import InfiniteScroll from "react-infinite-scroll-component";
import CreateMessage from "./create-message";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

export default function Wish() {
  const { data: template } = useContext(CustomizeContext);

  const { paginatedData, isReachedEnd, setSize, size, mutate } = usePagination(
    GreetingService.getAllGreeting,
    template.id
  );

  return (
    <Section className="text-secondary-text w-full" id="wish">
      <div className="relative flex flex-col gap-5 pt-20 pb-28 px-10 items-center  bg-[#23282A] rounded-[60px] opacity-90 shadow-lg">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className={`${Selina.className} text-4xl font-medium text-center uppercase`}
        >
          UCAPAN & DOA
        </h1>
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-xl text-center"
        >
          Berikan doa dan harapan terbaik untuk kami
        </h2>

        <div className="w-full mt-5">
          <InfiniteScroll
            dataLength={paginatedData?.length ?? 0}
            next={() => setSize(size + 1)}
            hasMore={!isReachedEnd}
            loader={<h4>Loading...</h4>}
            height={300}
            className="space-y-4 rounded-2xl scroll"
          >
            {paginatedData.map((e) => (
              <div
                key={e.id}
                className="w-full flex flex-col gap-2 rounded-xl p-4 bg-white shadow-lg text-black backdrop-filter backdrop-blur-md bg-opacity-60"
              >
                <div className=" flex justify-between items-center">
                  <h1 className="font-medium text-lg capitalize">{e.name}</h1>
                  <h2 className="text-xs">
                    {formatDistanceToNow(e.created_at, {
                      addSuffix: true,
                      locale: id,
                    })}
                  </h2>
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
