"use client";

import "./style.css";
import { useEffect, useRef } from "react";

export default function Hamburger({ state, scroll, setState }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (state) {
      button.classList.add("open-menu");
    } else {
      button.classList.remove("open-menu");
    }
  }, [state]);

  return (
    <button
      className="hamburger"
      ref={buttonRef}
      onClick={() => setState(!state)}
    >
      <span className={state || scroll ? "bg-white" : "bg-black"} />
      <span className={state || scroll ? "bg-white" : "bg-black"} />
    </button>
  );
}
