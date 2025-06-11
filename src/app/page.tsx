import Image from "next/image";

import HomePageCallToAction from "@/components/call-to-action/homepage-call-to-action";
import ContactUsSection from "@/components/contact-us/contact-us-section";
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

export default function Home() {
  return (
    <div className="relative min-h-screen">
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
              className="object-cover mix-blend-overlay"
              priority
            />
          </div>
          <div className="relative z-10 w-full max-w-[1920px] overflow-hidden">
            <div className="absolute h-[379px] w-[456px] alinsky-2xl:right-[-10%] alinsky-2xl:bottom-[25%] alinsky-2xl:scale-75 alinsky-3xl:right-[2%] alinsky-3xl:bottom-[28%] alinsky-3xl:scale-90">
              <BrandVoiceCard />
            </div>
            <div className="absolute h-[379px] w-[456px] alinsky-2xl:right-[5%] alinsky-2xl:bottom-[-2%] alinsky-2xl:scale-75 alinsky-3xl:right-[15%] alinsky-3xl:bottom-8 alinsky-3xl:scale-90">
              <SocialMediaApproval />
            </div>
            <div className="absolute h-[215px] w-[215px] alinsky-2xl:bottom-0 alinsky-2xl:left-[5%] alinsky-2xl:scale-75 alinsky-3xl:bottom-5 alinsky-3xl:left-[15%] alinsky-3xl:scale-90">
              <FirstSocialMediaCard />
            </div>
            <div className="absolute h-[215px] w-[215px] alinsky-2xl:bottom-0 alinsky-2xl:left-[15%] alinsky-2xl:scale-75 alinsky-3xl:bottom-5 alinsky-3xl:left-[24%] alinsky-3xl:scale-90">
              <SecondSocialMediaCard />
            </div>

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

      <div className="absolute -bottom-16 left-1/2 z-10 w-full max-w-4xl -translate-x-1/2">
        <HomePageCallToAction />
      </div>
    </div>
  );
}
