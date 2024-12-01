"use client";

import { Floating } from "@/components/container/customize/wrapper-template";
import { useEffect, useRef, useState } from "react";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <Floating className="bottom-5 left-5 z-40 w-12 aspect-square border-none rounded-full bg-white backdrop-filter backdrop-blur-md bg-opacity-70 shadow-md">
      <audio ref={audioRef} loop>
        <source src="/templates/nostalgia/1.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="absolute inset-0 w-8/12 m-auto aspect-square flex justify-center items-center bg-black rounded-full "
      >
        {isPlaying ? (
          <span
            className="w-4 aspect-square icon-[ion--pause-outline]"
            style={{ color: "white" }}
          />
        ) : (
          <span
            className="w-4 aspect-square icon-[ph--play]"
            style={{ color: "white" }}
          />
        )}
      </button>
    </Floating>
  );
}
