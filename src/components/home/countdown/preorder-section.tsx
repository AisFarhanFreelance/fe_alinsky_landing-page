"use client";

import { useEffect, useState } from "react";

const PreorderSection = () => {
  const deadline = new Date("2027-06-28T23:59:59Z");

  const [salesTime, setSalesTime] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({ days: "0", hours: "0", minutes: "0", seconds: "0" });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = deadline.getTime() - now.getTime();

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setSalesTime({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="flex justify-center">
      <div className="h-[516px] w-full max-w-[1920px]">
        <div className="flex flex-col space-y-14 rounded-4xl bg-alinsky-midnight-blue py-32 text-center font-satoshi text-alinsky-platinum alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] xl:mx-[104px]">
          <span className="text-[32px] font-bold capitalize">
            Pre-Order Closes In
          </span>
          <div className="flex flex-row justify-center space-x-8 text-8xl leading-[100%] font-normal">
            {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
              <div key={idx} className="flex flex-col">
                <span
                  className="animate-pulse"
                  style={{
                    textShadow: "0px 2px 9px #FFF",
                    color: "var(--grey-300, #E0E0E0)",
                  }}
                >
                  {salesTime[unit as keyof typeof salesTime]}
                </span>
              </div>
            ))}
          </div>
          <div className="text-xl font-bold text-alinsky-sunset uppercase">
            Hurry!! Only&nbsp;
            <span className="text-alinsky-beige">20</span>&nbsp;Left In Stock
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreorderSection;
