import { Button } from "@/components/ui/button";

import HeroCardImage from "./hero-card-image";
import Avatar1 from "/public/assets/images/avatar-1.svg";
import BarChart from "/public/assets/images/bar-chart.svg";
import DoughnutChart from "/public/assets/images/doughnut-chart.svg";
import Profit from "/public/assets/images/home-page-profit.svg";
import Vendor from "/public/assets/images/home-page-vendors.svg";

const images = [
  {
    src: BarChart,
    alt: "BarChartHero",
    className: "mx-4 my-14",
  },
  {
    src: Profit,
    alt: "ProfitHero",
    className: "mx-4 my-12",
  },
  {
    src: Avatar1,
    alt: "AvatarHero",
    className: "m-4",
  },
  {
    src: Vendor,
    alt: "VendorHero",
    className: "mx-4 my-12",
  },
  {
    src: DoughnutChart,
    alt: "DoughnutHero",
    className: "mx-4 my-14",
  },
];

const HeroSection = () => {
  return (
    <div className="space-y-8 lg:mx-[54.5px]">
      <div className="text-center mt-[200px] lg:px-[228.5px]">
        <div className="font-helvetica font-bold text-2xl lg:text-5xl lg:leading-16">
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
      <div className="grid grid-cols-5 gap-8 items-end">
        {images.map((img, idx) => (
          <HeroCardImage
            key={idx}
            src={img.src}
            alt={img.alt}
            className={img.className}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
