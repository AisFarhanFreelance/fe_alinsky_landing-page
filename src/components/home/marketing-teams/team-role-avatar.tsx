"use client";

import { Variants, motion } from "framer-motion";
import { Hashtag, StatusUp } from "iconsax-reactjs";
import { useTranslations } from "next-intl";
import Image from "next/image";

import Avatar1 from "/public/assets/images/avatar/avatar-1.svg";
import Avatar2 from "/public/assets/images/avatar/avatar-2.svg";
import Avatar3 from "/public/assets/images/avatar/avatar-3.svg";

const TeamRoleAvatar = () => {
  const floatVariants: Variants = {
    up: {
      y: ["0%", "-5%", "0%"],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut" as const,
      },
    },
    down: {
      y: ["0%", "5%", "0%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut" as const,
        delay: 0.5,
      },
    },
  };

  const popInVariants: Variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: 20,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const TeamRoleAvatarDatas = [
    {
      src: Avatar1,
      bg: "bg-linear-to-b from-alinsky-lavender-blush to-alinsky-white",
      icon: <Hashtag color="#e91e63" />,
      iconBackground: "bg-alinsky-orchid-pink",
      label: "socialMediaManager",
      floatDirection: "up" as const,
    },
    {
      src: Avatar2,
      bg: "bg-linear-to-b from-alinsky-lavender-web to-alinsky-white",
      icon: <StatusUp color="#9c27b0" />,
      iconBackground: "bg-alinsky-pink-lavender",
      label: "analyticsExpert",
      floatDirection: "down" as const,
    },
    {
      src: Avatar3,
      bg: "bg-linear-to-b from-alinsky-light-cyan to-alinsky-white",
      icon: <StatusUp color="#03A9F4" />,
      iconBackground: "bg-alinsky-uranian-blue",
      label: "campaignManager",
      floatDirection: "up" as const,
    },
  ];

  const t = useTranslations("homepage.teamRole");

  return (
    <div className="flex flex-wrap items-end justify-center gap-12">
      {TeamRoleAvatarDatas.map(
        ({ src, bg, icon, iconBackground, label, floatDirection }, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col items-center ${idx === 0 || idx === 2 ? "lg:translate-y-9" : "lg:-translate-y-9"} mt-12`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={popInVariants}
          >
            <motion.div
              className="relative w-fit"
              animate={floatDirection}
              variants={floatVariants}
            >
              <div
                className={`absolute inset-0 z-10 rounded-full ${bg} opacity-60`}
              />
              <Image
                src={src}
                alt={`Avatar${idx + 2}`}
                fetchPriority="high"
                className={`relative z-20 h-[165px] w-[165px] rounded-full object-cover sm:h-[220px] sm:w-[220px] md:h-[160px] md:w-[160px] xl:h-[220px] xl:w-[220px]`}
              />
              <motion.div
                className={`absolute -right-2 -bottom-2 z-30 flex h-[67px] w-[67px] items-center justify-center rounded-full border-4 border-alinsky-white ${iconBackground}`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring" as const }}
              >
                {icon}
              </motion.div>
            </motion.div>
            <motion.span
              className="mt-4 font-satoshi text-xl font-bold text-alinsky-onyx"
              whileHover={{ scale: 1.05 }}
            >
              {t(label)}
            </motion.span>
          </motion.div>
        ),
      )}
    </div>
  );
};

export default TeamRoleAvatar;
