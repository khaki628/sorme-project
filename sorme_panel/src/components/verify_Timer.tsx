import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    let timer: number;

    const endTime = new Date();

    endTime.setMinutes(endTime.getMinutes() + 1);
    endTime.setSeconds(endTime.getSeconds() + 35);

    timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const time: any = minutes + ":" + seconds;
      setCountdown(time.toString());

      if (distance < 0) {
        clearInterval(timer);
        setCountdown("EXPIRED");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <p className="text-[48px] text-white">{countdown}</p>;
};

export default CountdownTimer;
