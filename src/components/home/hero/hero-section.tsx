import Image from "next/image";

import { Button } from "@/components/ui/button";

import BlurredCard from "./blurred-card";
import ReminderCard from "./reminder-card";
import BrushBackground from "/public/assets/images/background/brush-background.svg";
import NoiseOverlay from "/public/assets/images/background/noise-brush-background.svg";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden">
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

      <div className="absolute top-[132px] right-[-215.327px] h-[379px] w-[456px]">
        <ReminderCard />
      </div>

      <div className="absolute top-[199px] right-[-300px] h-[380px] w-[456px]">
        <BlurredCard />
      </div>

      <div className="z-10 flex w-full justify-center px-4">
        <div className="max-w-4xl space-y-6 text-center">
          <div className="space-y-2">
            <div className="flex flex-col font-helvetica text-2xl font-bold lg:text-[64px] lg:leading-16">
              <span className="text-alinsky-white">SOCIAL MEDIA</span>
              <span
                className="bg-gradient-to-r from-[rgba(32,22,88,0.5)] via-white to-[rgba(29,20,78,0.5)] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(32, 22, 88, 0.50) 25.9%, #FFFFFF 38.26%, #FFFFFF 52.22%, rgba(255, 255, 255, 0.89) 73.48%, rgba(29, 20, 78, 0.50) 83.49%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MANAGEMENT, SIMPLIFIED.
              </span>
            </div>
            <p className="font-satoshi text-sm font-medium text-alinsky-white lg:text-xl lg:leading-16">
              One dashboard that plans, schedules, and proves your ROI&nbsp;
              <span className="font-bold italic">
                while you focus on growth.
              </span>
            </p>
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
