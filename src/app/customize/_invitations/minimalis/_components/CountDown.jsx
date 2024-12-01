"use client";

import { useEffect, useState } from "react";

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
    const interval = setInterval(() => getTimeUntil(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="flex justify-around items-center text-center text-lg">
      <div>
        <h2>{leading0(days)}</h2>
        <h1 className="text-xl font-medium">day</h1>
      </div>
      <div>
        <h2>{leading0(hours)}</h2>
        <h1 className="text-xl font-medium">hour</h1>
      </div>
      <div>
        <h2>{leading0(minutes)}</h2>
        <h1 className="text-xl font-medium">minute</h1>
      </div>
      <div>
        <h2>{leading0(seconds)}</h2>
        <h1 className="text-xl font-medium">second</h1>
      </div>
    </div>
  );
};

export default CountDown;
