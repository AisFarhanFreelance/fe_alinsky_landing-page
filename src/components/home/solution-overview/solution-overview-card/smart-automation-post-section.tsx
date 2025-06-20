import { Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import SmartAutomationPostImage from "/public/assets/images/additional/solution-overview/smart-automation/smart-automation-post.svg";

const SmartAutomationPostSection = () => {
  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275], // backOut easing
      },
    },
  };

  const t = useTranslations("homepage.contentAutoPilot");
  const tShared = useTranslations("shared");

  return (
    <div className="flex justify-center overflow-hidden">
      <div className="w-full max-w-[1920px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-8 grid min-h-[600px] grid-cols-1 place-content-center rounded-[46px] bg-alinsky-midnight-blue p-8 alinsky-2xl:mx-[104px] sm:grid-cols-2 md:mx-14 md:min-h-fit md:gap-x-2 md:py-[72px] xl:mx-[104px] xl:gap-9 xl:p-12 2xl:mx-[344px]"
        >
          <motion.div
            variants={containerVariants}
            className="flex flex-col justify-center space-y-8 font-satoshi text-alinsky-white"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-row items-center gap-x-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="127"
                height="3"
                viewBox="0 0 127 3"
                fill="none"
              >
                <path
                  d="M0.219635 1.53809H126.579"
                  stroke="white"
                  strokeWidth="2.34078"
                />
              </svg>
              <span className="text-base leading-[126%] font-medium tracking-[-0.48px] whitespace-nowrap xl:text-xl xl:tracking-[-0.6px]">
                {t("title")}
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <div className="text-xl leading-[100%] font-bold tracking-[-0.18px] xl:text-4xl">
                {t("heading")}
              </div>
              <div className="text-left text-base leading-[140%] tracking-[0.1px] opacity-80">
                {t("description")}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="font-satoshi text-[15px] leading-[26px] tracking-[0.46px] uppercase">
                {tShared("learnMore")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={imageVariants} className="flex justify-center">
            <Image
              src={SmartAutomationPostImage}
              alt="Smart Automation Post Image"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SmartAutomationPostSection;
