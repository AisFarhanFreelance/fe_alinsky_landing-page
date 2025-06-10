import HomePageCallToAction from "@/components/call-to-action/homepage-call-to-action";
import PreorderSection from "@/components/home/countdown/preorder-section";
import FirstSocialMediaCard from "@/components/home/hero/card/first-social-media-card";
import SecondSocialMediaCard from "@/components/home/hero/card/second-social-media-card";
import HeroSection from "@/components/home/hero/hero-section";
import TeamRoleSection from "@/components/home/marketing-teams/team-role-section";
import ProblemSolutionSection from "@/components/home/problem-solution/probelm-solution-section";
import SolutionOverviewSection from "@/components/home/solution-overview/solution-overview-section";
import PricingSection from "@/components/pricing/pricing-section";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative">
        <div className="pointer-events-none absolute -bottom-5 z-10 h-[215px] w-full">
          <div className="absolute left-[14.813px] h-[215px] w-[215px] scale-75">
            <FirstSocialMediaCard />
          </div>

          <div className="absolute left-[160px] h-[215px] w-[215px] scale-75">
            <SecondSocialMediaCard />
          </div>
        </div>
        <HeroSection />
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
      </div>

      <div className="absolute -bottom-16 left-1/2 z-10 w-full max-w-4xl -translate-x-1/2">
        <HomePageCallToAction />
      </div>
    </div>
  );
}
