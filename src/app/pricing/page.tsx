import AgencyServiceSection from "@/components/pricing/agency-service/agency-service-section";
import PricingPlanSection from "@/components/pricing/pricing-plan/pricing-plan-section";

const Pricing = () => {
  return (
    <div className="min-h-screen items-center justify-items-center">
      <PricingPlanSection />
      <AgencyServiceSection />
    </div>
  );
};

export default Pricing;
