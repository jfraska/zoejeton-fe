import "./style.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cart({ state, setState }) {
  let sidebarMenu = useRef(null);
  const menuTimeline = useRef();

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenu],
      {
        duration: 0,
        x: "100%",
      },
      {
        duration: 0.75,
        x: "0%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    state ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [state]);

  return (
    <>
      <div
        ref={(el) => (sidebarMenu = el)}
        className={`flex fixed flex-col h-screen top-0 right-0 z-50 justify-end md:w-1/4 w-full bg-white shadow-md`}
      ></div>

      <div
        className={`${
          state ? "z-10 bg-opacity-20" : "-z-10 bg-opacity-0"
        } fixed inset-0 bg-black transition-all ease-linear delay-200`}
        onClick={() => setState(false)}
      />
    </>
  );
}
