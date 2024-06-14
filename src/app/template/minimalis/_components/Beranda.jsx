"use client";

import { useContext } from "react";
import { Runalto } from "@/styles/fonts";
import CountDown from "./CountDown";
import ContentEditable from "react-contenteditable";
import CustomizeContext from "@/context/customize";

export default function Beranda() {
  const { dataContent, setDataContent, isEdit } = useContext(CustomizeContext);

  const handleChange = (e, key, field) => {
    const updatedData = dataContent?.map((item) => {
      if (item.key === key) {
        return { ...item, value: { ...item.value, [field]: e.target.value } };
      }
      return item;
    });

    setDataContent(updatedData);
  };

  return (
    <>
      {dataContent?.map(
        (item) =>
          item.key === "beranda" && (
            <section
              key={item.key}
              className="relative w-full h-screen bg-black bg-cover bg-center bg-opacity-20 bg-blend-multiply"
              name="beranda"
              style={{
                backgroundImage: "url('/templates/minimalis/5.heic')",
              }}
            >
              <div className="mx-auto flex flex-col gap-6 justify-start items-center px-10 text-center">
                <h2 className="text-lg mt-16">THE WEDDING OF</h2>
                <h1 className={`${Runalto.className} text-5xl font-medium`}>
                  <ContentEditable
                    className="focus:outline-blue-300 focus:outline-dashed"
                    html={item.value.title}
                    disabled={!isEdit}
                    onChange={(e) => handleChange(e, item.key, "title")}
                  />
                </h1>
                <h3 className="text-xs">
                  <ContentEditable
                    className="focus:outline-blue-300 focus:outline-dashed"
                    html={item.value.desc}
                    disabled={!isEdit}
                    onChange={(e) => handleChange(e, item.key, "desc")}
                  />
                </h3>
              </div>
              <div
                className={`${Runalto.className} absolute bottom-[20%] inset-x-10`}
              >
                <CountDown deadline="maret, 10, 2024" />
              </div>
            </section>
          )
      )}
    </>
  );
}
