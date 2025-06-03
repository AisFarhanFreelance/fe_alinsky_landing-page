import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import Hand from "/public/assets/images/additional/3d-hand.svg";
import Bars from "/public/assets/images/additional/bars.svg";
import Circullar from "/public/assets/images/additional/circullar.svg";

const ServiceBlockSection = () => {
  return (
    <div className="grid min-h-screen w-full grid-cols-3 items-center justify-center gap-8 p-8">
      <Card className="flex h-full flex-col justify-between bg-alinsky-midnight-blue text-alinsky-white">
        <CardContent className="mx-10 my-[70px] flex flex-1 flex-col justify-between">
          <div className="max-w-[253px] font-helvetica text-[44px] leading-12 font-bold tracking-[-0.18px]">
            Meta/Tiktok Ads
          </div>
          <div>
            <Image src={Bars} alt="Bar Chart Image" />
          </div>
        </CardContent>
      </Card>

      <Card className="relative flex h-full flex-col justify-between overflow-hidden bg-alinsky-white">
        <CardContent className="mx-10 my-[70px] flex flex-1 flex-col justify-between">
          <div
            className="max-w-[306px] font-helvetica text-[56px] leading-[60px] font-bold tracking-[-0.18px]"
            style={{
              backgroundImage:
                "linear-gradient(145deg, #151F68 0%, #442FB8 62.26%, #6963E5 79.77%, #FDD8D8 95.38%, #5B5A5A 106.88%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Done-For-you Content
          </div>

          <div className="absolute -right-8 bottom-0">
            <Image src={Hand} alt="3D Hand Image" />
          </div>
        </CardContent>
      </Card>

      <Card className="relative flex h-full flex-col justify-between overflow-hidden bg-alinsky-white text-alinsky-midnight-blue">
        <CardContent className="mx-10 my-[70px] flex flex-1 flex-col justify-between">
          <div className="max-w-[211px] font-helvetica text-5xl leading-[52px] font-bold tracking-[-0.18px]">
            Monthly Strategy Session
          </div>
          <div className="absolute -right-24 -bottom-14">
            <Image src={Circullar} alt="Circullar Chart Image" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceBlockSection;
