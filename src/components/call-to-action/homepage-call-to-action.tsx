import { Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
  },
};

const HomePageCallToAction = () => {
  const t = useTranslations("homepage.homepageCta");

  return (
    <motion.div
      className="flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        className="mx-[22px] flex w-[884px] flex-col items-center justify-between space-y-4 rounded-[20px] bg-white p-4 shadow-[0_-8px_24px_0_rgba(0,0,0,0.08)] backdrop-blur-[21px] sm:mx-0 sm:flex-row sm:px-16 sm:py-8"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div variants={itemVariants}>
          <span className="flex flex-col text-center font-satoshi text-base text-alinsky-midnight-blue capitalize sm:text-left sm:text-2xl">
            <motion.span variants={itemVariants}>{t("headline")}</motion.span>
            <motion.span
              className="text-center text-base font-bold text-alinsky-rich-black sm:text-left sm:text-[32px]"
              variants={itemVariants}
            >
              {t("highlight")}
            </motion.span>
          </span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            asChild
            size="lg"
            className="bg-alinsky-midnight-blue px-[22px] py-2 text-[15px] leading-[26px] font-normal tracking-[0.46px] text-alinsky-white hover:bg-alinsky-midnight-blue/90"
          >
            <a
              href="https://wa.me/6281310072368?text=*Hi%20SocialHub!*%0A%0AI%E2%80%99d%20like%20to%20ask%20about%20%E2%80%A6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {t("buttonText")}
              </motion.span>
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePageCallToAction;
