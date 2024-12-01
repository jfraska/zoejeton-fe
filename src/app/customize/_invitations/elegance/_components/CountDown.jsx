"use client";

import React, { useEffect, useState } from "react";
import { Selina, Catamaran } from "@/styles/fonts";

const CountDown = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="bg-secondary-bg text-secondary-text flex flex-col justify-center gap-10 items-center text-center text-lg py-20 px-5">
      <h1 className={`${Selina.className} text-6xl`}>COUNTDOWN</h1>
      <div className="flex items-center justify-between gap-10 pb-5">
        <div>
          <h2>{leading0(days)}</h2>
          <h1 className={`${Catamaran.className} text-lg font-normal`}>day</h1>
        </div>
        <div>
          <h2>{leading0(hours)}</h2>
          <h1 className={`${Catamaran.className} text-lg font-normal`}>hour</h1>
        </div>
        <div>
          <h2>{leading0(minutes)}</h2>
          <h1 className={`${Catamaran.className} text-lg font-normal`}>
            minute
          </h1>
        </div>
        <div>
          <h2>{leading0(seconds)}</h2>
          <h1 className={`${Catamaran.className} text-lg font-normal`}>
            second
          </h1>
        </div>
      </div>
      <a
        href="#"
        className={`${Catamaran.className} flex items-center justify-center bg-transparent text-secondary-text text-lg px-4 rounded-lg border w-full`}
      >
        Save Date
      </a>
    </div>
  );
};

export default CountDown;
