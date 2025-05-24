"use client";

import { Floating } from "@/components/container/customize/wrapper-template";
import { useEffect, useRef, useState } from "react";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };

    const playAudio = () => {
      setIsPlaying(true);
    };

    document.getElementById("open").addEventListener("click", playAudio);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <Floating className="bottom-5 left-5 z-40 w-12 aspect-square border-none rounded-full bg-white backdrop-filter backdrop-blur-md bg-opacity-70 shadow-md">
      <audio ref={audioRef} loop>
        <source src="/templates/elva-ega/1.mp3" type="audio/mpeg" />
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
