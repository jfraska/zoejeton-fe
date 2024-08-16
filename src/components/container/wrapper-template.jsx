"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CustomizeContext from "@/context/CustomizeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { extractClass } from "@/lib/utils";
import gsap from "gsap";
import Splide from "@splidejs/splide";
import "@splidejs/react-splide/css";
import dynamic from "next/dynamic";

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
            console.log(page);
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
    var splide = new Splide(".splide", {
      direction: "ttb",
      wheel: true,
      gap: 0,
      releaseWheel: true,
      arrows: false,
      paginationDirection: "ltr",
      width: "100%",
      height: "100%",
    });

    splide.mount();
  }, []);

  return (
    <div
      className={`${
        isEdit && "overflow-y-auto @3xl:max-w-md scroll"
      } splide w-full h-full`}
    >
      <div className="splide__track">
        <ul className="splide__list h-full">
          {pages.map((PageComponent, index) => {
            return (
              PageComponent && (
                <li className="splide__slide h-full">
                  <PageComponent key={index} />
                </li>
              )
            );
          })}
        </ul>
      </div>

      <ul
        class="splide__pagination splide__pagination--ltr"
        role="tablist"
        aria-label="Select a slide to show"
      >
        <li role="presentation">
          <button
            class="splide__pagination__page is-active"
            type="button"
            role="tab"
            aria-controls="splide01-slide01"
            aria-label="Go to slide 1"
            aria-selected="true"
          ></button>
        </li>
        <li role="presentation">
          <button
            class="splide__pagination__page"
            type="button"
            role="tab"
            aria-controls="splide01-slide02"
            aria-label="Go to slide 2"
            tabindex="-1"
          ></button>
        </li>
      </ul>
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
