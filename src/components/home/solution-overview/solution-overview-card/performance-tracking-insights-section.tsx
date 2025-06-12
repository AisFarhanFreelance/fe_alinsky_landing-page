import Image from "next/image";

import { Button } from "@/components/ui/button";

import PerformanceTrackingImage from "/public/assets/images/additional/solution-overview/performance-tracking/performance-tracking.svg";

const PerformanceTrackingInsightsSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="grid h-[648px] max-h-[648px] grid-cols-2 gap-x-6 alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] xl:mx-[104px]">
          <div className="flex flex-col justify-center space-y-8 rounded-[46px] bg-alinsky-anti-flash-white px-8 font-satoshi text-alinsky-midnight-blue">
            <div className="flex items-center space-x-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="127"
                height="4"
                viewBox="0 0 127 4"
                fill="none"
              >
                <path
                  d="M0.444458 2H126.804"
                  stroke="#693BFF"
                  strokeWidth="2.34078"
                />
              </svg>
              <span className="text-xl leading-[126%] font-medium tracking-[-3%]">
                Real-Time Performance Report
              </span>
            </div>
            <div className="space-y-3 self-stretch">
              <div className="text-4xl leading-[100%] font-bold tracking-[-0.18px]">
                Rack what`s working, pinpoint what`s not, rapidly iterate your
                strategy
              </div>
              <div className="text-base leading-[140%] tracking-[0.1px] opacity-80">
                Forget endless spreadsheets and guessing games. ALINSKY`s
                real-time dashboard shows exactly what content is working,
                what`s falling flat, and helps you pivot fast—so your strategy
                evolves as quickly as your audience does.
              </div>
              <div className="mt-8">
                <Button className="bg-alinsky-midnight-blue font-helvetica text-[15px] leading-[26px] tracking-[0.46px] text-alinsky-white uppercase hover:bg-alinsky-midnight-blue/95">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center  rounded-[46.816px_46.816px_2066.778px_46.816px] bg-alinsky-midnight-blue">
            <Image
              src={PerformanceTrackingImage}
              alt="Performance Tracking Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTrackingInsightsSection;
