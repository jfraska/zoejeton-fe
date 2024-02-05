"use client";

import { Icon } from "@iconify/react";
import { templates } from "@/constants";

export default function Template() {
  const numberOfColumns = 4;
  const elementsPerColumn = Math.ceil(templates.length / numberOfColumns);

  const columns = [];
  for (let i = 0; i < numberOfColumns; i++) {
    columns.push(
      templates.slice(i * elementsPerColumn, (i + 1) * elementsPerColumn)
    );
  }

  function getStyleByIndex(index) {
    let style = {};

    if (index === 0) {
      style = {};
    } else if (index === 1) {
      style = { "data-scroll": true, "data-scroll-speed": 3 };
    } else if (index === 2) {
      style = { "data-scroll": true, "data-scroll-speed": 1 };
    } else if (index === 3) {
      style = { "data-scroll": true, "data-scroll-speed": 2 };
    }

    return style;
  }

  return (
    <section data-scroll-section id="template" className="px-[3%]">
      <div className="w-full mt-1.5 border-b border-black" />
      {/* <h1 className="text-sm">Showing 8 of 12 template invitation</h1> */}
      <div className="flex justify-between items-end mt-4 font-medium">
        <h1 className="text-3xl">Katalog</h1>
        <h1 className="text-base">Showing 8 of 12 template invitation</h1>
      </div>
      <div className="flex flex-col md:flex-row mt-6 w-full justify-between items-center">
        {columns.map((column, index) => (
          <div
            {...getStyleByIndex(index)}
            key={index}
            className={`${
              index != 0 ? "hidden md:flex" : "flex"
            } flex-col max-w-[320px] w-full md:w-[23%] gap-5`}
          >
            {column.map((e) => (
              <div key={e.id} className="flex flex-col w-full">
                <div className="relative w-full h-[350px] lg:h-[400px] border border-black rounded-lg">
                  <div className="absolute bottom-4 left-4">
                    <h1 className="text-lg font-medium">{e.title}</h1>
                    <h1>{e.price}</h1>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Icon
                      icon="carbon:arrow-up"
                      color="black"
                      width="30"
                      rotate={1}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="my-20 mx-auto flex hover-underline-animation w-2/4 md:w-1/4 border-b py-2 pr-1 border-black-200 items-end justify-between">
        <h1 className="text-base text-black">See all our template</h1>
        <Icon
          icon="carbon:arrow-up"
          className="text-black"
          width="20"
          rotate={1}
        />
      </div>
    </section>
  );
}
