import { Flash } from "iconsax-reactjs";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex min-h-[105vh] w-full items-center overflow-hidden">
      <div className="z-10 flex w-full justify-center px-4">
        <div className="max-w-[1920px] space-y-6 text-center">
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-2 font-helvetica text-2xl font-bold capitalize lg:text-[64px] lg:leading-16">
              <div className="flex flex-row items-center justify-center gap-x-2.5 rounded-2xl bg-alinsky-anti-flash-white p-0 text-center lg:p-1">
                <Flash size="64" color="#151F68" variant="Bold" />
                <span
                  className="px-1 leading-20 text-alinsky-white italic"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #3A377F 0%, #A8A4D6 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Supercharge
                </span>
                <Flash size="64" color="#A8A4D6" variant="Bold" />
              </div>
              <div className="rounded-2xl bg-alinsky-anti-flash-white p-4">
                <span
                  className="bg-gradient-to-r from-[rgba(32,22,88,0.5)] via-white to-[rgba(29,20,78,0.5)] bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(90deg, #3A377F 0%, #7B77A9 30.29%, #CEC8EC 55.36%, #3A377F 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Your Social Media Workflow
                </span>
              </div>
            </div>
            <Button className="leading-[26px] tracking-[0.46px] uppercase">
              Join The Waitlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
