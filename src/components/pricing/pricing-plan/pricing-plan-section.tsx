"use client";

import { Variants, motion, useAnimation } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import PricingPlanCard from "./pricing-plan-card";

const PricingPlanSection = () => {
  const t = useTranslations("homepage.pricingPlan");

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative w-full pb-16"
    >
      <div id="pricing" className="flex justify-center">
        <div className="w-full max-w-[1920px] px-8 md:px-14 xl:px-[104px] 2xl:px-[344px]">
          <motion.div
            variants={containerVariants}
            className="space-y-6 lg:mt-[108px] lg:space-y-16"
          >
            <motion.div
              variants={itemVariants}
              className="text-center capitalize"
            >
              <div className="font-helvetica text-2xl leading-16 font-bold text-alinsky-rich-black lg:text-5xl">
                {t("title")}
              </div>
              <div className="font-satoshi text-sm font-medium text-alinsky-dim-gray lg:text-xl">
                {t("description")}
                <span className="italic">{t("descriptionHighlight")}</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full overflow-x-visible"
            >
              <PricingPlanCard />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PricingPlanSection;
