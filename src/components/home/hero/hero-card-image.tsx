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
    <div className="flex flex-col items-end gap-8 lg:grid lg:grid-cols-5">
      {images.map((img, idx) => (
        <Card
          key={idx}
          className="mx-auto w-fit border-0 shadow-none lg:w-full"
        >
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
