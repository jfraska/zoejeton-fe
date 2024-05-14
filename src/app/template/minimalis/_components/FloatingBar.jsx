"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FloatingBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 w-12 aspect-square border-none rounded-full bg-white shadow-md">
      <audio ref={audioRef} src="/assets/templates/minimalis/1.mp3" />
      <button
        onClick={() => handlePlayPause()}
        className="absolute inset-0 w-8/12 m-auto aspect-square flex justify-center items-center bg-black rounded-full"
      >
        {/* <Image
        src={"/vercel.svg"}
        alt="music"
        width={20}
        height={20}
        className="w-auto h-auto"
      /> */}
      </button>
    </div>
  );
}
