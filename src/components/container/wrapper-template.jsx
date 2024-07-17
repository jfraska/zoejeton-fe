"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import CustomizeContext from "@/context/customize";
import Aos from "aos";
import "aos/dist/aos.css";

export function Main({ children, className }) {
  const { isEdit } = useContext(CustomizeContext);

  useEffect(() => {
    Aos.init({ disable: isEdit });
    Aos.refreshHard();
  }, [isEdit]);

  return (
    <div
      className={`${className} ${
        isEdit
          ? "absolute h-full flex justify-between"
          : "h-screen ml-auto md:max-w-md"
      } w-full`}
    >
      {children}
    </div>
  );
}

export function Template({ children, className }) {
  const { isEdit } = useContext(CustomizeContext);

  return (
    <div
      className={`${className}  ${
        isEdit && "overflow-y-auto md:max-w-md scroll"
      }`}
    >
      {children}
    </div>
  );
}

export function Section({ children, className, id, style }) {
  const { dataContent } = useContext(CustomizeContext);
  const [background, setBackground] = useState(null);

  useEffect(() => {
    const section = dataContent.find((item) => item.key === id);

    const element = document.getElementById(id);
    if (element) {
      element.style.display = section.visible.disable ? "none" : "block";
    }

    if (section.value.background) {
      setBackground(section.value.background);
    }
  }, [dataContent]);

  return (
    <section id={id} className={`${className}`} style={style}>
      {background && (
        <Image
          fill
          src={
            background[0]?.getFileEncodeDataURL
              ? background[0].getFileEncodeDataURL()
              : background[0]
          }
          alt="background"
          className="object-cover brightness-90 -z-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      {children}
    </section>
  );
}

export function Cover({ children, className }) {
  const { isEdit } = useContext(CustomizeContext);

  return (
    <div
      className={`${className}  ${
        isEdit
          ? "relative w-full h-full "
          : "fixed right-[28rem] inset-y-0 left-0 "
      }`}
    >
      {children}
    </div>
  );
}

export function Floating({ children, className }) {
  const { isEdit } = useContext(CustomizeContext);

  return (
    <div className={`${className}  ${isEdit ? "absolute" : "fixed"}`}>
      {children}
    </div>
  );
}
