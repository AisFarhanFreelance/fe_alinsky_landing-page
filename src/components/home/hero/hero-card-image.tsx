import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

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

const HeroCardImage = () => {
  return (
    <div className="grid grid-cols-5 gap-8 items-end">
      {images.map((img, idx) => (
        <Card key={idx} className="border-0 shadow-none w-full">
          <CardContent className="p-0">
            <div className={img.className}>
              <Image src={img.src} alt={img.alt} className="object-contain" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HeroCardImage;
