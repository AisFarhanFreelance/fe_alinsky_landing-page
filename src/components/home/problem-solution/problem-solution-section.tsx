import ProblemSolutionCard from "./problem-solution-card";

const ProblemSolutionSection = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center space-y-12 bg-alinsky-midnight-blue px-2 py-14 lg:px-[249px] lg:py-60">
      <div className="space-y-2 text-center">
        <div className="font-helvetica text-2xl text-alinsky-seasalt uppercase lg:text-5xl lg:leading-16">
          <span className="font-bold italic">Frustated</span>&nbsp;with social
          media chaos?
        </div>
        <div className="font-satoshi text-sm text-alinsky-silver lg:text-xl">
          Most marketing teams waste 12+ hours weekly on
        </div>
      </div>
      <ProblemSolutionCard />
    </div>
  );
};

export default ProblemSolutionSection;
