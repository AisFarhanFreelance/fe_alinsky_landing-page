import Image from "next/image";

import { Button } from "@/components/ui/button";

import SmartAutomationPostImage from "/public/assets/images/additional/solution-overview/smart-automation/smart-automation-post.svg";

const SmartAutomationPostSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="grid min-h-[600px] grid-cols-1 place-content-center gap-9 rounded-[46px] bg-alinsky-midnight-blue p-12 alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] sm:grid-cols-2 xl:mx-[104px]">
          <div className="flex flex-col justify-center space-y-8 font-satoshi text-alinsky-white">
            <div className="flex flex-row items-center gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="127"
                height="3"
                viewBox="0 0 127 3"
                fill="none"
              >
                <path
                  d="M0.219635 1.53809H126.579"
                  stroke="white"
                  strokeWidth="2.34078"
                />
              </svg>
              <span className="text-xl leading-[126%] font-medium tracking-[-0.6px]">
                Content Autopilot
              </span>
            </div>
            <div className="space-y-3">
              <div className="text-4xl leading-[100%] font-bold tracking-[-0.18px]">
                Eliminate repetitive posting tasks with smart automation
              </div>
              <div className="text-left text-base leading-[140%] tracking-[0.1px] opacity-80">
                No more logging into five different platforms to schedule
                content. ALINSKY automates your entire posting calendar, letting
                you plan weeks ahead while ensuring every post goes out exactly
                when and where it should—with zero effort.
              </div>
            </div>
            <div>
              <Button className="font-satoshi text-[15px] leading-[26px] tracking-[0.46px] uppercase">
                LEARN MORE
              </Button>
            </div>
          </div>
          <div className="">
            <Image
              src={SmartAutomationPostImage}
              alt="Smart Automation Post Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAutomationPostSection;
