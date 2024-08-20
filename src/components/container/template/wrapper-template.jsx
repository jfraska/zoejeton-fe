"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CustomizeContext from "@/context/CustomizeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { extractClass } from "@/lib/utils";
import gsap from "gsap";
import dynamic from "next/dynamic";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css/core";

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
          ? "absolute h-full flex justify-between @container"
          : "h-screen ml-auto lg:max-w-md @container-normal"
      } w-full`}
    >
      {children}
    </div>
  );
}

export function Template() {
  const { isEdit, dataContent, data } = useContext(CustomizeContext);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    (async () => {
      const loadedPages = await Promise.all(
        dataContent.map(async (page) => {
          try {
            const module = await import(
              `@/app/template/${data.parent ?? data.slug}/_components/${
                page.key
              }.jsx`
            );

            return dynamic(() => Promise.resolve({ default: module.default }), {
              ssr: false,
            });
          } catch (error) {
            console.error(`Failed to load module for key: ${page.key}`, error);
            return null;
          }
        })
      );
      setPages(loadedPages);
    })();
  }, [dataContent]);

  useEffect(() => {
    const main = new Splide("#main", {
      direction: "ttb",
      width: "100%",
      heightRatio: 16,
      releaseWheel: true,
      wheel: true,
      speed: 100,
      pagination: false,
      arrows: false,
    });
    const navbar = new Splide("#navbar", {
      height: 60,
      releaseWheel: true,
      wheel: true,
      speed: 100,
      pagination: false,
      arrows: false,
    });
    main.sync(navbar);
    main.mount();
    navbar.mount();
  }, []);

  return (
    <div className={`${isEdit && "@3xl:max-w-md scroll"} w-full`}>
      <div id="main" className="splide h-full">
        <div className="splide__track">
          <ul className="splide__list">
            {pages.map(
              (PageComponent, index) =>
                PageComponent && (
                  <li key={index} className="splide__slide">
                    <PageComponent />
                  </li>
                )
            )}
          </ul>
        </div>
      </div>

      <div
        id="navbar"
        className="splide fixed bottom-0 inset-x-0 bg-white text-black"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {dataContent.map(
              (data, index) =>
                data && (
                  <li key={index} className="splide__slide">
                    {data.key}
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
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
          ? "relative w-full h-full @3xl:block"
          : "fixed right-[28rem] inset-y-0 left-0 lg:block"
      } hidden`}
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
  type = "page",
  open,
  id,
  handleOpen,
  handleClose,
}) {
  let lockRef = useRef(null);
  const timeline = useRef(null);
  const { isEdit, dataContent, data } = useContext(CustomizeContext);
  const [background, setBackground] = useState(null);

  useEffect(() => {
    const section = dataContent.find((item) => item.key === "lockscreen");

    if (section?.value?.background) {
      setBackground(section.value.background);
    }
  }, [dataContent]);

  // useEffect(() => {
  //   const handleHashChange = () => {
  //     if (window.location.hash === "#lockscreen") {
  //       handleClose();
  //     } else {
  //       handleOpen();
  //     }
  //   };

  //   window.addEventListener("hashchange", handleHashChange);

  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange);
  //   };
  // }, []);

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
      id={id}
      className={`${isEdit ? "absolute h-full" : "fixed h-screen"} ${
        type === "page" && "!relative !z-0"
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
