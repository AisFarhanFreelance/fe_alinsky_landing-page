import Image from "next/image";

import { Button } from "@/components/ui/button";

import ApprovalWorkflowImage from "/public/assets/images/additional/solution-overview/approval-workflow/approval-workflow.svg";

const ApprovalWorkflowToolSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="grid min-h-[600px] grid-cols-1 place-content-center gap-x-[60px] rounded-[46px] bg-alinsky-midnight-blue p-12 alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] sm:grid-cols-2 xl:mx-[104px]">
          <div className="h-[420px]">
            <Image
              src={ApprovalWorkflowImage}
              alt="Smart Automation Post Image"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-center space-y-8 text-right font-satoshi text-alinsky-white">
            <div className="flex flex-row items-center justify-end gap-x-4">
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
                Effortless Pipeline
              </span>
            </div>
            <div className="space-y-3">
              <div className="text-4xl leading-[100%] font-bold tracking-[-0.18px]">
                Simplify teamwork with built-in approval flows
              </div>
              <div className="text-base leading-[140%] tracking-[0.1px] opacity-80">
                Collaborating with your team has never been easier. ALINSKY
                centralizes content review with smart approval workflows and
                real-time notifications, Team stays aligned and nothing slips
                through the cracks.
              </div>
            </div>
            <div>
              <Button className="font-satoshi text-[15px] leading-[26px] tracking-[0.46px] uppercase">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalWorkflowToolSection;
