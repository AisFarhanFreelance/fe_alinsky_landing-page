"use client";

import { Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import Hand from "/public/assets/images/additional/3d-hand.svg";
import Bars from "/public/assets/images/additional/bars.svg";
import Circullar from "/public/assets/images/additional/circullar.svg";

const ServiceBlockSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const cardItemVariants: Variants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
      rotate: -3,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const imagePopVariants: Variants = {
    hidden: {
      scale: 0.7,
      opacity: 0,
      rotate: -10,
    },
    show: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 6,
        delay: 0.5,
        duration: 0.7,
      },
    },
    hover: {
      scale: 1.15,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.6,
      },
    },
  };

  const textSlideVariants: Variants = {
    hidden: {
      x: -30,
      opacity: 0,
      scale: 0.95,
    },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.3],
      },
    },
  };

  const t = useTranslations("homepage.serviceBlock");

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px] px-8 md:px-14 xl:px-[104px] 2xl:px-[344px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex h-fit flex-col items-center justify-center space-y-6 text-alinsky-white"
        >
          <div className="z-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            <motion.div
              variants={cardItemVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="flex h-full flex-col justify-between rounded-2xl bg-alinsky-midnight-blue text-alinsky-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                <CardContent className="flex h-full flex-col justify-between p-6 sm:p-8 xl:p-10">
                  <motion.div
                    variants={textSlideVariants}
                    className="mb-6 font-helvetica text-lg font-bold tracking-[-0.18px] sm:text-xl xl:self-start xl:text-left xl:text-4xl xl:leading-[120%]"
                  >
                    {t("perfAnalytics")}
                  </motion.div>
                  <div className="flex-1" />
                  <motion.div
                    variants={imagePopVariants}
                    whileHover="hover"
                    className="mt-6 w-full max-w-[200px] sm:max-w-[160px] xl:max-w-[280px]"
                  >
                    <Image
                      src={Bars}
                      alt="Bar Chart Image"
                      className="h-auto w-full"
                      priority
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={cardItemVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-alinsky-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                <CardContent className="flex h-full flex-col justify-between p-6 sm:p-8 xl:p-10">
                  <motion.div
                    variants={textSlideVariants}
                    className="mb-6 font-helvetica text-lg font-bold tracking-[-0.18px] sm:text-xl xl:text-4xl xl:leading-[60px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(145deg, #151F68 0%, #442FB8 62.26%, #6963E5 79.77%, #FDD8D8 95.38%, #5B5A5A 106.88%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {t("doneContent")}
                  </motion.div>
                  <div className="flex-1" />
                  <motion.div
                    variants={imagePopVariants}
                    whileHover="hover"
                    className="mt-6 flex justify-center"
                  >
                    <Image
                      src={Hand}
                      alt="3D Hand"
                      className="h-auto max-h-[200px] w-auto"
                      priority
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={cardItemVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-alinsky-white text-alinsky-midnight-blue transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30">
                <CardContent className="flex h-full flex-col justify-between p-6 sm:p-8 xl:p-10">
                  <motion.div
                    variants={textSlideVariants}
                    className="mb-6 font-helvetica text-lg font-bold tracking-[-0.18px] sm:text-xl xl:self-end xl:text-right xl:text-4xl xl:leading-[52px]"
                  >
                    {t("monthlyStrategy")}
                  </motion.div>
                  <div className="flex-1" />
                  <motion.div
                    variants={imagePopVariants}
                    whileHover="hover"
                    className="mt-6 flex justify-center"
                  >
                    <Image
                      src={Circullar}
                      alt="Circular Chart Image"
                      className="h-auto max-h-[200px] w-auto"
                      priority
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceBlockSection;
