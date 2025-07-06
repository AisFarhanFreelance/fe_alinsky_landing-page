"use client";

import { Transition, Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

const AgencyServiceSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97] as const,
      },
    },
  };

  const superpowerVariants: Variants = {
    hidden: {
      backgroundPosition: "100% 50%",
      opacity: 0,
    },
    visible: {
      backgroundPosition: "0% 50%",
      opacity: 1,
      transition: {
        backgroundPosition: {
          duration: 1.8,
          ease: "linear",
        },
        opacity: {
          duration: 0.6,
        },
      } as Transition,
    },
  };

  const buttonVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  const t = useTranslations("homepage.agencyService");

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-8 flex h-fit flex-col items-center justify-center space-y-4 rounded-4xl bg-alinsky-midnight-blue py-48 text-alinsky-white alinsky-2xl:mx-[104px] md:mx-14 md:space-y-4 md:py-28 xl:mx-[104px] xl:space-y-6 2xl:mx-[344px]"
        >
          <motion.div
            variants={textVariants}
            className="space-y-4 text-center capitalize md:space-y-4 xl:space-y-6"
          >
            <motion.div
              variants={textVariants}
              className="font-satoshi text-xl font-medium xl:text-4xl"
            >
              {t("headline")}
            </motion.div>
            <div>
              <motion.div
                variants={superpowerVariants}
                className="w-[874px] font-helvetica text-[40px] leading-[100%]
 font-bold italic xl:text-[64px]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FAFAFA, #F9BAB6, #B7B9F4, #FAFAFA)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "300% 100%",
                }}
              >
                {t("headlineBold")}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              asChild
              className="font-helvetica text-[15px] leading-[26px] tracking-[0.46px] uppercase"
            >
              <a
                href="https://wa.me/6281310072368?text=*Hello%20SocialHub!*%0A%0AI%E2%80%99m%20ready%20to%20explore%20your%20agency%20services%2C%20*how%20do%20we%20get%20started%3F*"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cta")}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgencyServiceSection;
