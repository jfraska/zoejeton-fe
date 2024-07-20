"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CustomizeContext from "@/context/customize";
import Aos from "aos";
import "aos/dist/aos.css";
import { extractClass } from "@/libs/utils";
import gsap from "gsap";

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
          ? "absolute h-full flex justify-between @container/main"
          : "h-full ml-auto md:max-w-md @container-normal"
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

export function Section({ children, className, id }) {
  const { dataContent, data } = useContext(CustomizeContext);
  const [background, setBackground] = useState(null);

  useEffect(() => {
    const section = dataContent.find((item) => item.key === id);

    const element = document.getElementById(id);
    if (element) {
      element.style.display = section.visible.disable ? "none" : "block";
    }

    if (section?.value?.background) {
      setBackground(section.value.background);
    }
  }, [dataContent]);

  return (
    <section
      id={id}
      className={`${extractClass(className, "h-")} ${
        background && "relative"
      } w-full`}
    >
      {background && (
        <Image
          fill
          priority
          src={
            background[0]?.getFileEncodeDataURL
              ? background[0].getFileEncodeDataURL()
              : `/templates/${data.slug}/${background[0]}`
          }
          alt="background"
          className="object-cover brightness-90 image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      <div className={`${className} relative w-full h-full`}>{children}</div>
    </section>
  );
}

export function Cover({ children, className }) {
  const { isEdit, dataContent, data } = useContext(CustomizeContext);
  const [background, setBackground] = useState(null);

  useEffect(() => {
    const section = dataContent.find((item) => item.key === "cover");

    if (section?.value?.background) {
      setBackground(section.value.background);
    }
  }, [dataContent]);

  return (
    <div
      className={`${
        isEdit
          ? "relative w-full h-full "
          : "fixed right-[28rem] inset-y-0 left-0 md:block"
      } hidden @md/main:block`}
      id="cover"
    >
      {background && (
        <Image
          fill
          priority
          src={
            background[0]?.getFileEncodeDataURL
              ? background[0].getFileEncodeDataURL()
              : `/templates/${data.slug}/${background[0]}`
          }
          alt="background"
          className="object-cover brightness-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      <div className={`${className} relative w-full h-full`}>{children}</div>
    </div>
  );
}

export function LockScreen({
  children,
  className,
  open,
  handleOpen = () => {},
}) {
  let lockRef = useRef(null);
  const timeline = useRef(null);
  const { isEdit, dataContent, data } = useContext(CustomizeContext);
  const [background, setBackground] = useState(null);

  useEffect(() => {
    const section = dataContent.find((item) => item.key === "lockscreen");

    if (section?.value?.background && section?.value?.background !== []) {
      setBackground(section.value.background);
    }
  }, [dataContent]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#lockscreen") {
        handleOpen();
        window.location.hash = "";
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current.fromTo(
      lockRef,
      {
        duration: 0,
        y: "0",
      },
      {
        duration: 0.75,
        y: "-100%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    open ? timeline.current.play() : timeline.current.reverse();
  }, [open]);

  return (
    <div
      ref={(el) => (lockRef = el)}
      className={`${
        isEdit ? "absolute h-full" : "fixed h-screen"
      } inset-0 w-full z-40 bg-primary-bg`}
    >
      {background && (
        <Image
          fill
          priority
          src={
            background[0]?.getFileEncodeDataURL
              ? background[0].getFileEncodeDataURL()
              : `/templates/${data.slug}/${background[0]}`
          }
          alt="background"
          className="object-cover brightness-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <div className={`${className} relative w-full h-full`}>{children}</div>
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
