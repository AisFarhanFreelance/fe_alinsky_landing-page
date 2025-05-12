import HeroSection from "@/components/home/hero/hero-section";
import ProblemSolutionSection from "@/components/home/problem-solution/problem-solution-section";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <ProblemSolutionSection />
    </div>
  );
}
