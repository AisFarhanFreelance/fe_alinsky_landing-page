import SolutionOverviewCard from "./solution-overview-card";

const SolutionOverviewSection = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center space-y-12 py-14 lg:px-[208px] lg:py-60">
      <div className="space-y-2 text-center">
        <div className="font-helvetica text-2xl text-alinsky-onyx capitalize lg:text-5xl lg:leading-16">
          Meet Yout New&nbsp;
          <span className="font-bold italic">Social Media</span>&nbsp;Command
          Center
        </div>
        <div className="font-satoshi text-sm font-medium text-alinsky-gray-600 lg:text-xl">
          Most marketing teams waste 12+ hours weekly on
        </div>
      </div>
      <SolutionOverviewCard />
    </div>
  );
};

export default SolutionOverviewSection;
