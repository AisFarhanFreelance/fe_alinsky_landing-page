import AgencyServiceSection from "@/components/pricing/agency-service/agency-service-section";
import PricingPlanSection from "@/components/pricing/pricing-plan/pricing-plan-section";
import ServiceBlockSection from "@/components/pricing/service-block/service-block-section";

const Pricing = () => {
  return (
    <div className="min-h-screen items-center justify-items-center">
      <PricingPlanSection />
      <AgencyServiceSection />
      <ServiceBlockSection />
    </div>
  );
};

export default Pricing;
