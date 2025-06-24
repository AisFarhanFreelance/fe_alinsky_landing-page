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
          className="mx-8 flex h-fit flex-col items-center justify-center space-y-6 rounded-4xl bg-alinsky-midnight-blue py-48 text-alinsky-white alinsky-2xl:mx-[104px] md:mx-14 md:py-28 xl:mx-[104px] xl:h-[500px] xl:space-y-12 2xl:mx-[344px]"
        >
          <motion.div
            variants={textVariants}
            className="text-center capitalize"
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
                className="w-[874px] font-helvetica text-[40px] font-bold italic xl:text-[64px]"
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
            <Button className="font-helvetica text-[15px] leading-[26px] tracking-[0.46px] uppercase">
              {t("cta")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgencyServiceSection;
