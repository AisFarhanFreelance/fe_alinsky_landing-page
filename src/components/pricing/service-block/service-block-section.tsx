import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import Hand from "/public/assets/images/additional/3d-hand.svg";
import Bars from "/public/assets/images/additional/bars.svg";
import Circullar from "/public/assets/images/additional/circullar.svg";

const ServiceBlockSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="flex h-[400px] items-center justify-center">
          <div
            className="absolute z-0 h-[740px] w-[780px]"
            style={{
              borderRadius: "780px",
              background:
                "linear-gradient(0deg, rgba(27, 37, 108, 0.50) 0%, rgba(27, 37, 108, 0.50) 100%)",
              filter: "blur(364.95px)",
            }}
          />

          <div className="z-10 grid h-[400px] w-full grid-cols-3 items-center justify-center gap-6 alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] xl:mx-[104px]">
            <Card className="flex h-full flex-col justify-between bg-alinsky-midnight-blue text-alinsky-white">
              <CardContent className="mx-10 my-[64px] flex flex-1 flex-col justify-between">
                <div className="max-w-[253px] font-helvetica text-4xl leading-12 font-bold tracking-[-0.18px]">
                  Meta/Tiktok Ads
                </div>
                <div className="h-auto w-[280px]">
                  <Image src={Bars} alt="Bar Chart Image" />
                </div>
              </CardContent>
            </Card>

            <Card className="relative flex h-full flex-col justify-between overflow-hidden bg-alinsky-white">
              <CardContent className="mx-10 my-[64px] flex flex-1 flex-col justify-between">
                <div
                  className="max-w-[306px] self-stretch font-helvetica text-4xl leading-[60px] font-bold tracking-[-0.18px]"
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

                <div className="absolute -right-10 bottom-0">
                  <Image
                    src={Hand}
                    alt="3D Hand Image"
                    className="h-[260px] w-[260px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="relative flex h-full flex-col justify-between overflow-hidden bg-alinsky-white text-alinsky-midnight-blue">
              <CardContent className="mx-10 my-[64px] flex flex-1 flex-col justify-between">
                <div className="max-w-[315px] font-helvetica text-4xl leading-[52px] font-bold tracking-[-0.18px]">
                  Monthly Strategy Session
                </div>
                <div className="absolute -right-20 -bottom-10">
                  <Image
                    src={Circullar}
                    alt="Circullar Chart Image"
                    className="h-[325px] w-[325px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlockSection;
