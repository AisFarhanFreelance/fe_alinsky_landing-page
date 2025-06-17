import PricingPlanCard from "./pricing-plan-card";

const PricingPlanSection = () => {
  return (
    <div className="relative w-full pb-16">
      <div className="flex justify-center">
        <div className="w-full max-w-[1920px] px-8 md:px-14 xl:px-[104px] 2xl:px-[344px]">
          <div className="mt-[108px] space-y-16">
            <div className="space-y-2 text-center capitalize">
              <div className="font-helvetica text-2xl leading-16 font-bold text-alinsky-rich-black lg:text-5xl">
                Pick Your Growth Blueprint
              </div>
              <div className="font-satoshi text-sm font-medium text-alinsky-dim-gray lg:text-xl">
                All Plans Include Our Core Platform.&nbsp;
                <span className="italic">Upgrade Anytime</span>
              </div>
            </div>
            <div className="w-full overflow-x-visible">
              <PricingPlanCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanSection;
