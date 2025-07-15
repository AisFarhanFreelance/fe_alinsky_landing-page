"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const PreorderSection = () => {
  const deadline = new Date("2025-07-25T14:00:00Z");

  const [salesTime, setSalesTime] = useState<{
    hours: string;
    minutes: string;
    seconds: string;
  }>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = deadline.getTime() - now.getTime();

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const totalHours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setSalesTime({
        hours: String(totalHours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  const timeUnits = [
    { value: salesTime.hours, label: "Hour(s)" },
    { value: salesTime.minutes, label: "Minute(s)" },
    { value: salesTime.seconds, label: "Second(s)" },
  ];

  const t = useTranslations("homepage.preOrder");

  return (
    <div className="flex justify-center md:my-0">
      <div className="h-full w-full max-w-[1920px]">
        <div className="mx-8 flex flex-col rounded-4xl bg-alinsky-midnight-blue text-center font-satoshi text-alinsky-platinum alinsky-2xl:mx-[104px] xl:mx-[104px] 2xl:mx-[344px]">
          {/* <div className="mx-8 flex flex-col space-y-8 rounded-4xl bg-alinsky-midnight-blue py-20 text-center font-satoshi text-alinsky-platinum alinsky-2xl:mx-[104px] xl:mx-[104px] xl:space-y-14 xl:py-32 2xl:mx-[344px]"></div> */}
          <div className="flex flex-col space-y-6 pt-[80px]">
            <span className="text-xl font-bold capitalize xl:text-[32px]">
              {t("preOrderHeading")}
            </span>
            <div className="flex flex-row justify-center space-x-4 text-5xl leading-[100%] font-normal md:space-x-8 md:text-6xl lg:space-x-12 xl:text-8xl">
              {timeUnits.map((unit, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.1,
                  }}
                >
                  <span
                    className="block"
                    style={{
                      textShadow: "0px 2px 4px rgba(255, 255, 255, 0.3)",
                      color: "var(--grey-300, #E0E0E0)",
                    }}
                  >
                    {unit.value}
                  </span>
                  <span className="mt-1 text-sm text-alinsky-platinum">
                    {unit.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: [1, 1.02, 1],
            }}
            transition={{
              opacity: { duration: 0.4, delay: 0.4 },
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            className="hidden items-center justify-center space-x-1 pt-6 pb-[80px] text-center text-xl font-bold uppercase md:flex xl:text-2xl"
          >
            <span className="text-alinsky-sunset">{t("hurry")}</span>
            <span className="text-alinsky-platinum">{t("only")}</span>
            <span className="font-bold text-alinsky-beige">20</span>
            <span className="text-alinsky-platinum">{t("stockLeft")}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: [1, 1.02, 1],
            }}
            transition={{
              opacity: { duration: 0.4, delay: 0.4 },
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            className="flex flex-col items-center pt-6 pb-[80px] text-xl font-bold uppercase md:hidden"
          >
            <div className="text-alinsky-sunset">{t("hurry")}</div>
            <div className="flex flex-row">
              <span className="text-alinsky-platinum">{t("only")}</span>
              <span className="text-alinsky-beige">20</span>
              <span className="text-alinsky-platinum">{t("stockLeft")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PreorderSection;
