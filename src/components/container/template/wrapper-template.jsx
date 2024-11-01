"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CustomizeContext from "@/context/CustomizeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { extractClass } from "@/lib/utils";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

export function Main({ children, className }) {
  const { isEdit } = useContext(CustomizeContext);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    function fullscreenAndScroll() {
      document.body.classList.remove("no-scroll");

      const element = document.documentElement; // Ganti ini jika Anda ingin elemen lain

      if (element.requestFullscreen) {
        element.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err);
        });
      } else if (element.mozRequestFullScreen) {
        // Firefox
        element.mozRequestFullScreen().catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err);
        });
      } else if (element.webkitRequestFullscreen) {
        // Safari
        element.webkitRequestFullscreen().catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err);
        });
      } else if (element.msRequestFullscreen) {
        // IE/Edge
        element.msRequestFullscreen().catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err);
        });
      }
    }

    const lockButton = document.getElementById("open");

    lockButton.addEventListener("click", fullscreenAndScroll);

    return () => {
      lockButton.removeEventListener("click", fullscreenAndScroll);
    };
  }, []);

  return (
    <div
      className={`${className} ${
        isEdit
          ? "absolute h-full flex justify-between @container"
          : "h-screen ml-auto lg:max-w-lg"
      } w-full`}
    >
      {children}
      <Template />
    </div>
  );
}

export function Template() {
  const ref = useRef(null);
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
  }, []);

  return (
    <>
      {data?.type === "slide" ? (
        <Slide
          ref={ref}
          isEdit={isEdit}
          pages={pages}
          dataContent={dataContent}
        />
      ) : (
        <Scroll ref={ref} isEdit={isEdit} pages={pages} />
      )}
    </>
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
          : "fixed right-[32rem] inset-y-0 left-0 lg:block"
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

export function Floating({ children, className, id }) {
  const { isEdit } = useContext(CustomizeContext);

  return (
    <div id={id} className={`${className}  ${isEdit ? "absolute" : "fixed"}`}>
      {children}
    </div>
  );
}

const Slide = React.forwardRef(({ pages, dataContent, isEdit }, ref) => {
  const [mainDimensions, setMainDimensions] = useState({ width: 0, height: 0 });
  const mainRef = useRef(null);
  const bnavbarRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && bnavbarRef.current && bnavbarRef.current.splide) {
      mainRef.current.sync(bnavbarRef.current.splide);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      setMainDimensions({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
  }, []);

  const mainOptions = {
    direction: "ttb",
    width: "100%",
    height: `${mainDimensions.height - 55}px`,
    wheel: true,
    releaseWheel: true,
    wheelMinThreshold: 30,
    pagination: false,
    arrows: false,
  };

  const bnavbarOptions = {
    fixedWidth: 70,
    height: 55,
    pagination: false,
    arrows: false,
    focus: "center",
    isNavigation: true,
  };

  return (
    <div
      ref={ref}
      className={`${isEdit && "@3xl:!w-[32rem] scroll"} h-full w-full`}
    >
      {/* Main Page */}
      <Splide
        ref={mainRef}
        options={mainOptions}
        hasTrack={false}
        aria-label="main"
      >
        <SplideTrack>
          {pages.map(
            (PageComponent, index) =>
              PageComponent && (
                <SplideSlide key={index}>
                  <PageComponent />
                </SplideSlide>
              )
          )}
        </SplideTrack>
      </Splide>

      {/* Bottom Navbar */}
      <Splide
        ref={bnavbarRef}
        options={bnavbarOptions}
        hasTrack={false}
        aria-label="bottom-navbar"
        className={`!sticky bottom-0 w-full inset-x-0 bg-white text-black z-10`}
      >
        <SplideTrack>
          {dataContent.map(
            (data, index) =>
              data && <SplideSlide key={index}>{data.key}</SplideSlide>
          )}
        </SplideTrack>
      </Splide>
    </div>
  );
});

const Scroll = React.forwardRef(({ pages, isEdit }, ref) => {
  useEffect(() => {
    Aos.init({ disable: isEdit });
    Aos.refreshHard();
  }, [isEdit]);

  return (
    <div
      ref={ref}
      className={`${
        isEdit && "@3xl:max-w-md overflow-y-auto scroll"
      } h-full  w-full`}
    >
      {pages.map(
        (PageComponent, index) => PageComponent && <PageComponent key={index} />
      )}
    </div>
  );
});
