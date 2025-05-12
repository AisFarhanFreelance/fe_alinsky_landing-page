import SolutionOverviewCard from "./solution-overview-card";

const SolutionOverviewSection = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:px-[208px] lg:py-60 min-h-screen w-full space-y-12">
      <div className="text-center space-y-2">
        <div className="font-helvetica capitalize text-5xl text-alinsky-onyx leading-16">
          Meet Yout New&nbsp;
          <span className="font-bold italic">Social Media</span>&nbsp;Command
          Center
        </div>
        <div className="font-satoshi text-alinsky-gray-600 text-xl">
          Most marketing teams waste 12+ hours weekly on
        </div>
      </div>
      <SolutionOverviewCard />
    </div>
  );
};

export default SolutionOverviewSection;
