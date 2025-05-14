import PricingCard from "./pricing-card";

const PricingSection = () => {
  return (
    <div className="my-8 flex min-h-screen flex-col items-center justify-center space-y-16 rounded-2xl bg-alinsky-midnight-blue px-4 py-6 lg:m-[42px] lg:p-16">
      <div className="space-y-2 text-center capitalize">
        <div className="font-helvetica text-2xl leading-16 font-bold text-alinsky-seasalt lg:text-5xl">
          Pick Your Growth Blueprint
        </div>
        <div className="font-satoshi text-sm font-medium text-alinsky-silver lg:text-xl">
          All Plans Include Our Core Platform.&nbsp;
          <span className="italic">Upgrade Anytime</span>
        </div>
      </div>
      <div className="w-full">
        <PricingCard />
      </div>
    </div>
  );
};

export default PricingSection;
