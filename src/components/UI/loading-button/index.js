"use client";

import styles from "./styles.module.css";
import React from "react";
import { useSpring, animated } from "react-spring";

export default function LoadingButton({ onClick, children, ...props }) {
  /* showLoader digunakan untuk tetap berada dalam "state isLoading" sedikit lebih lama untuk menghindari kedipan saat loading
   jika durasi loading terlalu singkat. */
  const handleClick = () => {
    setShowLoader(true);
    onClick();
  };
  const [showLoader, setShowLoader] = React.useState(false);

  React.useEffect(() => {
    // Menampilkan loader sedikit lebih lama untuk menghindari kedipan saat loading
    if (showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showLoader]);

  /* Capture the dimensions of the button before the loading happens
  so it doesn’t change size.
  These hooks can be put in a seprate file. */
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [children]);

  // Hooks used to fade in/out the loader or the button contents
  const fadeOutProps = useSpring({ opacity: showLoader ? 1 : 0 });
  const fadeInProps = useSpring({ opacity: showLoader ? 0 : 1 });

  return (
    <button
      onClick={handleClick}
      ref={ref}
      style={
        showLoader
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {}
      }
    >
      {showLoader ? (
        <animated.div style={fadeOutProps} {...props}>
          <div className={styles.loading} />
        </animated.div>
      ) : (
        <animated.div style={fadeInProps} {...props}>
          {children}
        </animated.div>
      )}
    </button>
  );
}
