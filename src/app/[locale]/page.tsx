"use client";

import { Variants, motion } from "framer-motion";
import Image from "next/image";

import HomePageCallToAction from "@/components/call-to-action/homepage-call-to-action";
import ContactUsSection from "@/components/contact-us/contact-us-section";
import Footer from "@/components/footer/footer";
import PreorderSection from "@/components/home/countdown/preorder-section";
import BrandVoiceCard from "@/components/home/hero/card/brand-voice-card";
import FirstSocialMediaCard from "@/components/home/hero/card/first-social-media-card";
import SecondSocialMediaCard from "@/components/home/hero/card/second-social-media-card";
import SocialMediaApproval from "@/components/home/hero/card/social-media-approval";
import HeroSection from "@/components/home/hero/hero-section";
import TeamRoleSection from "@/components/home/marketing-teams/team-role-section";
import ProblemSolutionSection from "@/components/home/problem-solution/problem-solution-section";
import SolutionOverviewSection from "@/components/home/solution-overview/solution-overview-section";
import PricingSection from "@/components/pricing/pricing-section";

import BrushBackground from "/public/assets/images/background/brush-background.svg";
import NoiseOverlay from "/public/assets/images/background/noise-brush-background.svg";

const floatingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-[850px] left-0 z-[5] inline-flex origin-left scale-40 md:top-[900px] md:scale-90 lg:top-[1000px] xl:scale-100 2xl:top-[1100px]">
        <motion.div
          className=""
          variants={floatingVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.05 }}
          animate="float"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
        >
          <FirstSocialMediaCard />
        </motion.div>

        <motion.div
          className="-ml-20"
          variants={floatingVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.05 }}
          animate="float"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
        >
          <SecondSocialMediaCard />
        </motion.div>
      </div>

      <motion.div
        className="absolute top-[790px] right-[-40%] z-[5] 
             h-[379px] w-[456px] scale-40 
             md:top-[800px] md:right-[0%] md:scale-90 lg:top-[850px]
             xl:scale-100 2xl:top-[1000px]"
        variants={floatingVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.05 }}
        animate="float"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.6 }}
      >
        <SocialMediaApproval />
      </motion.div>

      <div className="relative">
        <div className="relative flex w-full justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={BrushBackground}
              alt="Brush Background"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
            <Image
              src={NoiseOverlay}
              alt="Noise Overlay"
              fill
              className="object-cover opacity-70 mix-blend-overlay"
              priority
            />
          </div>

          <div className="relative z-10 w-full max-w-[1920px] overflow-hidden">
            <motion.div
              className="absolute top-[5%] right-[-50%] h-[379px] w-[456px] scale-50 alinsky-2xl:right-[-10%] alinsky-2xl:bottom-[25%] alinsky-2xl:scale-75 sm:right-[-20%] md:top-[15%] md:scale-60 xl:right-[-15%] xl:bottom-[25%] xl:scale-75 2xl:right-[2%] 2xl:bottom-[28%] 2xl:scale-90"
              variants={floatingVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              animate="float"
              viewport={{ once: true, margin: "-100px" }}
            >
              <BrandVoiceCard />
            </motion.div>

            <div className="">
              <HeroSection />
            </div>
          </div>
        </div>
      </div>

      <div className="relative -top-7 space-y-16 rounded-t-4xl bg-alinsky-white pt-[72px] pb-16">
        <div>
          <ProblemSolutionSection />
          <TeamRoleSection />
          <SolutionOverviewSection />
        </div>
        <div>
          <PreorderSection />
        </div>
        <div>
          <PricingSection />
        </div>
        <div className="relative">
          <div
            className="absolute top-1/2 left-1/2 z-0 h-[740px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[450px]"
            style={{
              background:
                "linear-gradient(100deg, #151F68 56.79%, #0015D0 67.8%)",
            }}
          />
          <ContactUsSection />
        </div>
      </div>

      <div className="relative">
        <div className="absolute bottom-155 left-1/2 z-10 w-full max-w-4xl -translate-x-1/2 px-4 md:bottom-95 md:scale-75 xl:bottom-110">
          <HomePageCallToAction />
        </div>
        <Footer />
      </div>
    </div>
  );
}
