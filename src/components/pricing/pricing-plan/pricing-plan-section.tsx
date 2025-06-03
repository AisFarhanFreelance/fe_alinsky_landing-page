import PricingPlanCard from "./pricing-plan-card";

const PricingPlanSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pb-8">
      <div
        className="absolute inset-0 top-0 left-[-35.538px] z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(21, 31, 104, 0.20) 0%, rgba(250, 250, 250, 0.20) 100%)",
          transform: "rotate(30deg)",
          width: "100%",
          height: "100%",
        }}
      />

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
        <div>
          <PricingPlanCard />
        </div>
      </div>
    </div>
  );
};

export default PricingPlanSection;
