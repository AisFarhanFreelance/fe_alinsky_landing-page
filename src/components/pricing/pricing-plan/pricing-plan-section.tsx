"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import PricingPlanCard from "./pricing-plan-card";

const PricingPlanSection = () => {
  const t = useTranslations("homepage.pricingPlan");

  return (
    <div className="relative w-full pb-16">
      <div className="flex justify-center">
        <div className="w-full max-w-[1920px] px-8 md:px-14 xl:px-[104px] 2xl:px-[344px]">
          <div className="mt-[108px] space-y-16">
            <motion.div
              className="space-y-2 text-center capitalize"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="font-helvetica text-2xl leading-16 font-bold text-alinsky-rich-black lg:text-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {t("title")}
              </motion.div>
              <motion.div
                className="font-satoshi text-sm font-medium text-alinsky-dim-gray lg:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {t("description")}
                <span className="italic">{t("descriptionHighlight")}</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full overflow-x-visible"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <PricingPlanCard />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanSection;
