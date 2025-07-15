import PricingFooter from "../footer/pricing-footer";
import AgencyServiceSection from "./agency-service/agency-service-section";
// import PricingPlanSection from "./pricing-plan/pricing-plan-section";
import ServiceBlockSection from "./service-block/service-block-section";

const PricingSection = () => {
  return (
    <div className="my-8">
      {/* <PricingPlanSection /> */}
      <div className="space-y-16">
        <AgencyServiceSection />

        <div className="md:hidden">
          <PricingFooter />
        </div>

        <ServiceBlockSection />

        <div className="hidden md:block">
          <PricingFooter />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
