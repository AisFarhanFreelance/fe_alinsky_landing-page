"use client";

import { Variants, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import ProblemSolutionCard from "./problem-solution-card";

const ProblemSolutionSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
      } as const,
    },
  };

  const quoteVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.5,
      } as const,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex min-h-screen items-center justify-center rounded-4xl bg-alinsky-anti-flash-white"
    >
      <div className="flex justify-center">
        <div className="w-full max-w-[1920px]">
          <motion.div
            variants={containerVariants}
            className="mt-14 mb-8 flex flex-col justify-center space-y-8 alinsky-2xl:mx-[104px] xl:mx-[104px] 2xl:mx-[344px]"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-[72px] px-8 text-alinsky-rich-black"
            >
              <motion.div
                variants={itemVariants}
                className="text-center font-helvetica text-xl capitalize sm:text-2xl lg:text-5xl"
              >
                4 Hidden Costs Slowing Down Your Client social media Growth
              </motion.div>

              <motion.div variants={itemVariants}>
                <ProblemSolutionCard />
              </motion.div>
            </motion.div>

            <motion.div
              variants={quoteVariants}
              className="mx-8 flex flex-col space-y-6 rounded-2xl py-6 font-satoshi text-alinsky-midnight-blue capitalize"
            >
              <motion.span
                variants={itemVariants}
                className="pt-16 text-6xl leading-[20%] font-bold lg:text-9xl"
              >
                &ldquo;
              </motion.span>

              <motion.span
                variants={itemVariants}
                className="text-xl leading-[150%] italic lg:text-[32px]"
              >
                If even one of these problems feels too real... <br /> It&apos;s
                time to reflect&nbsp;:
                <b>
                  &nbsp; What if your social media didn&apos;t need more effort,
                  just better tools
                </b>
              </motion.span>

              <motion.span
                variants={itemVariants}
                className="self-end pt-10 text-6xl leading-[20%] font-bold lg:text-9xl"
              >
                &rdquo;
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemSolutionSection;
