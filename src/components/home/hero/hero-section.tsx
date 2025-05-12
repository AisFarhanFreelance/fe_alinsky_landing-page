import { Button } from "@/components/ui/button";

import HeroCardImage from "./hero-card-image";

const HeroSection = () => {
  return (
    <div className="space-y-8 mb-16 lg:mx-[54.5px]">
      <div className="text-center mt-[200px] lg:px-[228.5px]">
        <div className="font-helvetica font-bold text-alinsky-midnight-blue text-2xl lg:text-5xl lg:leading-16">
          SOCIAL MEDIA MANAGEMENT MADE SIMPLE
        </div>
        <p className="font-satoshi font-medium text-sm text-alinsky-gray-600 lg:text-xl lg:leading-16">
          One platform that plans, schedules, and proves ROI while you focus on
          strategy.
        </p>
        <Button size="lg" className="font-satoshi uppercase">
          Get Started
        </Button>
      </div>
      <HeroCardImage />
    </div>
  );
};

export default HeroSection;
