import HomePageCallToAction from "@/components/call-to-action/homepage-call-to-action";
import PreorderSection from "@/components/home/countdown/preorder-section";
import HeroSection from "@/components/home/hero/hero-section";
import TeamRoleSection from "@/components/home/marketing-teams/team-role-section";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <div className="rounded-t-full4xl bg-alinsky-white">
        <TeamRoleSection />
      </div>
      <PreorderSection />

      <div className="absolute -bottom-16 left-1/2 z-10 w-full max-w-4xl -translate-x-1/2">
        <HomePageCallToAction />
      </div>
    </div>
  );
}
