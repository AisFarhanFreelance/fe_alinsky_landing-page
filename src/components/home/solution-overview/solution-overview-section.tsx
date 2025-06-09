import ApprovalWorkflowToolSection from "./solution-overview-card/approval-workflow-tool-section";
import BrandTonePostCreationSection from "./solution-overview-card/brand-tone-post-creation-section";
import PerformanceTrackingInsightsSection from "./solution-overview-card/performance-tracking-insights-section";
import SmartAutomationPostSection from "./solution-overview-card/smart-automation-post-section";

const SolutionOverviewSection = () => {
  return (
    <div className="my-8 space-y-8">
      <BrandTonePostCreationSection />
      <SmartAutomationPostSection />
      <ApprovalWorkflowToolSection />
      <PerformanceTrackingInsightsSection />
    </div>
  );
};

export default SolutionOverviewSection;
