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
    <div className="mx-8 min-h-screen ">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col space-y-14 rounded-4xl bg-alinsky-midnight-blue py-[72px] text-center font-satoshi text-alinsky-platinum">
          <span className="text-[32px] capitalize">Pre-Order Closes In</span>
          <div className="flex flex-row justify-center space-x-8 text-8xl font-light">
            {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="animate-pulse drop-shadow-[0_0_16px_rgba(255,255,255,0.7)]">
                  {salesTime[unit as keyof typeof salesTime]}
                </span>
              </div>
            ))}
          </div>
          <span className="text-xl italic">Secure Early Access & Save 15%</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 rounded-4xl bg-alinsky-midnight-blue py-[72px] text-center font-satoshi text-alinsky-platinum">
          <span className="text-[32px] uppercase">
            Pre-Order Now&nbsp;<span className="normal-case">for</span>&nbsp;
            <span className="font-black">IDR 1,111,000</span>
          </span>
          <span className="text-xl">(Before prices rises to IDR,300,000)</span>
        </div>
      </div>
    </div>
  );
};

export default PreorderSection;
