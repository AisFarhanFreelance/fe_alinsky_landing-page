import ProblemSolutionCard from "./problem-solution-card";

const ProblemSolutionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:px-[249px] lg:py-60 bg-alinsky-midnight-blue min-h-screen w-full space-y-12">
      <div className="text-center space-y-2">
        <div className="font-helvetica uppercase text-5xl text-alinsky-seasalt leading-16">
          <span className="font-bold italic">Frustated</span>&nbsp;with social
          media chaos?
        </div>
        <div className="font-satoshi text-alinsky-silver text-xl">
          Most marketing teams waste 12+ hours weekly on
        </div>
      </div>
      <ProblemSolutionCard />
    </div>
  );
};

export default ProblemSolutionSection;
