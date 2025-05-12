import { Button } from "@/components/ui/button";

import HeroCardImage from "./hero-card-image";

const HeroSection = () => {
  return (
    <div className="mb-16 space-y-8 lg:mx-[54.5px]">
      <div className="mt-[200px] text-center lg:px-[228.5px]">
        <div className="font-helvetica text-2xl font-bold text-alinsky-midnight-blue lg:text-5xl lg:leading-16">
          SOCIAL MEDIA MANAGEMENT MADE SIMPLE
        </div>
        <p className="font-satoshi text-sm font-medium text-alinsky-gray-600 lg:text-xl lg:leading-16">
          One platform that plans, schedules, and proves ROI while you focus on
          strategy.
        </p>
        <Button
          size="lg"
          className="bg-alinsky-persian-blue uppercase hover:bg-alinsky-persian-blue/90"
        >
          Get Started
        </Button>
      </div>
      <HeroCardImage />
    </div>
  );
};

export default HeroSection;
