import CallToAction from "@/components/home/call-to-action/call-to-action";
import HeroSection from "@/components/home/hero/hero-section";
import ProblemSolutionSection from "@/components/home/problem-solution/problem-solution-section";
import ResultsSection from "@/components/home/results/results-section";
import SolutionOverviewSection from "@/components/home/solution-overview/solution-overview-section";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <ProblemSolutionSection />
      <SolutionOverviewSection />
      <ResultsSection />
      <CallToAction />
    </div>
  );
}
