import { Flash } from "iconsax-reactjs";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import ReminderCard from "./card/reminder-card";
import SocialMediaApproval from "./card/social-media-approval";
import BrushBackground from "/public/assets/images/background/brush-background.svg";
import NoiseOverlay from "/public/assets/images/background/noise-brush-background.svg";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-[105vh] w-full items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={BrushBackground}
          alt="Brush Background"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <Image
          src={NoiseOverlay}
          alt="Noise Overlay"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>

      <div className="absolute top-[100px] right-[-215.327px] h-[379px] w-[456px] scale-75">
        <ReminderCard />
      </div>

      <div className="absolute top-[400px] right-[-12.541px] h-[379px] w-[456px] scale-75">
        <SocialMediaApproval />
      </div>

      <div className="z-10 flex w-full justify-center px-4">
        <div className="max-w-4xl space-y-6 text-center">
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-2 font-helvetica text-2xl font-bold capitalize lg:text-[64px] lg:leading-16">
              <div className="flex flex-row items-center justify-center gap-x-2.5 rounded-2xl bg-alinsky-anti-flash-white p-4 text-center">
                <Flash size="64" color="#151F68" variant="Bold" />
                <span
                  className="leading-20 text-alinsky-white italic"
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
