import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, createContext, useState } from "react";
import "locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollContext = createContext({
  scroll: null,
});

export const SmoothScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    const scrollEl = document.querySelector("#main-container") ?? undefined;

    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;

          setScroll(
            LocomotiveScroll({
              el: scrollEl,
              smooth: true,
              multiplier: 0.8,
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
              class: "is-reveal",
            })
          );
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }

    scroll.on("scroll", () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (scroll) {
          return arguments.length
            ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : scroll.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (scroll) {
          return arguments.length
            ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : scroll.scroll.instance.scroll.x;
        }
        return null;
      },
    });

    const lsUpdate = () => {
      if (scroll) {
        scroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (scroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        scroll.destroy();
        setScroll(null);
        console.log("Kill", scroll);
      }
    };
  }, [scroll]);

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
