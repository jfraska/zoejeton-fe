"use client";

import { useContext, useEffect } from "react";
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
