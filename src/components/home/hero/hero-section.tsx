"use client";

import { Variants, motion } from "framer-motion";
import { Flash } from "iconsax-reactjs";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const lightningVariants: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      x: -20,
    },
    visible: (index: number) => ({
      scale: [1, 1.2, 1],
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.8,
        ease: "backOut",
      },
    }),
    hover: {
      scale: [1, 1.5, 1],
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  const superchargeVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      backgroundPosition: "200% 50%",
    },
    visible: {
      opacity: 1,
      scale: [1, 1.1, 1],
      backgroundPosition: "0% 50%",
      transition: {
        duration: 1.2,
        scale: {
          duration: 0.6,
          repeat: 1,
          repeatType: "reverse",
        },
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      scale: 1.05,
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        backgroundPosition: {
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        },
        scale: {
          duration: 0.3,
        },
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const t = useTranslations("homepage");

  return (
    <div className="relative flex h-[1007px] w-full items-center sm:h-[1194px] md:h-[1175px] 2xl:h-[1315px]">
      <div className="min-h[105vh] z-10 flex w-full justify-center px-4">
        <motion.div
          className="max-w-[1920px] space-y-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center space-y-2 font-helvetica text-2xl font-bold capitalize sm:text-4xl lg:text-[64px] lg:leading-16">
            <motion.div
              className="flex flex-row items-center justify-center gap-x-2.5 rounded-2xl bg-alinsky-anti-flash-white p-[18px] text-center"
              whileHover="hover"
            >
              <motion.div
                custom={0}
                variants={lightningVariants}
                className="hidden lg:block"
                whileHover="hover"
              >
                <Flash size="64" color="#151F68" variant="Bold" />
              </motion.div>
              <motion.div
                custom={0}
                variants={lightningVariants}
                className="block lg:hidden"
                whileHover="hover"
              >
                <Flash size="32" color="#151F68" variant="Bold" />
              </motion.div>

              <motion.span
                className="leading-[100%] text-alinsky-white italic sm:leading-[120%] lg:px-1 lg:leading-20"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #3A377F 0%, #A8A4D6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 100%",
                  display: "inline-block",
                }}
                variants={superchargeVariants}
                whileHover="hover"
              >
                {t("herotitle")}
              </motion.span>

              <motion.div
                custom={1}
                variants={lightningVariants}
                className="hidden lg:block"
                whileHover="hover"
              >
                <Flash size="64" color="#A8A4D6" variant="Bold" />
              </motion.div>
              <motion.div
                custom={1}
                variants={lightningVariants}
                className="block lg:hidden"
                whileHover="hover"
              >
                <Flash size="32" color="#A8A4D6" variant="Bold" />
              </motion.div>
            </motion.div>

            <motion.div
              className="rounded-2xl bg-alinsky-anti-flash-white p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <span
                className="bg-gradient-to-r from-[rgba(32,22,88,0.5)] via-white to-[rgba(29,20,78,0.5)] bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #3A377F 0%, #7B77A9 30.29%, #CEC8EC 55.36%, #3A377F 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("herotitlesub")}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1.5,
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
          >
            <Button
              className="leading-[26px] tracking-[0.46px] uppercase"
              asChild
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
              >
                {t("waitlist")}
              </motion.button>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
