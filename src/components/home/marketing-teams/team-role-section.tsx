"use client";

import { Variants, motion } from "framer-motion";

import TeamRoleAvatar from "./team-role-avatar";

const TeamRoleSection = () => {
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

  const subtitleVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
      rotateX: 90,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const commandCenterVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="relative min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="absolute z-0 h-full w-full" />

      <motion.div className="mx-8 flex min-h-screen flex-col items-center justify-center space-y-12 py-16 alinsky-2xl:mx-[104px] sm:py-[240px] md:mx-14 xl:mx-[104px]">
        <motion.div
          className="z-10 mx-auto max-w-[1920px] space-y-8 text-center"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col items-center space-y-0.5 font-satoshi capitalize"
            variants={containerVariants}
          >
            <motion.div
              className="text-xl text-alinsky-onyx capitalize sm:text-2xl lg:text-5xl lg:leading-16"
              variants={titleVariants}
            >
              Meet Your New&nbsp;
              <span className="font-bold italic">Social Media</span>
            </motion.div>

            <motion.div
              className="rounded-2xl bg-alinsky-magnolia p-2 text-xl font-black text-alinsky-slate-blue lg:py-6 lg:text-5xl"
              variants={commandCenterVariants}
            >
              Command Center
            </motion.div>
          </motion.div>

          <motion.div
            className="font-satoshi text-base font-medium text-alinsky-gray-600 capitalize lg:text-xl"
            variants={subtitleVariants}
          >
            Most marketing teams waste 12+ hours weekly on
          </motion.div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              },
            },
          }}
        >
          <TeamRoleAvatar />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TeamRoleSection;
