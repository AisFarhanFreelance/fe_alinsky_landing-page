import { Variants, motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import BrandToneImage from "/public/assets/images/additional/solution-overview/brand-tone/brand-tone-image.svg";

const BrandTonePostCreationSection = () => {
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
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };

  return (
    <div className="flex justify-center overflow-hidden">
      <div className="w-full max-w-[1920px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-8 grid grid-cols-1 gap-6 alinsky-2xl:mx-[104px] sm:max-h-[648px] sm:grid-cols-2 md:mx-14 xl:mx-[104px] 2xl:mx-[344px]"
        >
          <motion.div
            variants={imageVariants}
            className="flex h-[360px] justify-center rounded-[2340.778px_46.816px_46.816px_46.816px] bg-alinsky-midnight-blue md:h-full xl:h-[648px]"
          >
            <Image src={BrandToneImage} alt="Content Image 3" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex h-fit flex-col justify-center space-y-8 rounded-[46px] bg-alinsky-anti-flash-white px-8 py-[72px] font-satoshi text-alinsky-midnight-blue xl:h-[648px]"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 sm:space-x-8"
            >
              <span className="text-base leading-[126%] font-medium tracking-[-0.48px] whitespace-nowrap sm:tracking-[-3%] lg:text-xl">
                Consistent Brand Tone
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="127"
                height="4"
                viewBox="0 0 127 4"
                fill="none"
              >
                <path
                  d="M0.444458 2H126.804"
                  stroke="#693BFF"
                  strokeWidth="2.34078"
                />
              </svg>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-3 self-stretch"
            >
              <div className="text-xl leading-[100%] font-bold tracking-[-0.18px] lg:text-4xl">
                Craft posts that match your brand voice in seconds
              </div>
              <div className="text-base leading-[140%] tracking-[0.1px] opacity-80">
                Imagine having an assistant that instantly understands your
                brand voice and writes like your best copywriter—on demand. With
                ALINSKY&apos;s AI Copy Enhancer, generate scroll-stopping posts
                in seconds, freeing up hours of content creation time.
              </div>
              <motion.div
                variants={itemVariants}
                className="mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-alinsky-midnight-blue font-helvetica text-[15px] leading-[26px] tracking-[0.46px] text-alinsky-white uppercase hover:bg-alinsky-midnight-blue/95">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandTonePostCreationSection;
