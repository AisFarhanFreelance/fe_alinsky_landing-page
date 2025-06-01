import PreorderSection from "@/components/home/countdown/preorder-section";
import HeroSection from "@/components/home/hero/hero-section";
import TeamRoleSection from "@/components/home/marketing-teams/team-role-section";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <PreorderSection />
      <TeamRoleSection />
    </div>
  );
}
