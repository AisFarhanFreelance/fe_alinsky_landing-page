import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import Hand from "/public/assets/images/additional/3d-hand.svg";
import Bars from "/public/assets/images/additional/bars.svg";
import Circullar from "/public/assets/images/additional/circullar.svg";

const ServiceBlockSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px] px-8 md:px-14 xl:px-[104px] 2xl:px-[344px]">
        <div className="flex h-fit flex-col items-center justify-center space-y-6 text-alinsky-white xl:h-[500px]">
          <div className="z-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            <Card className="flex flex-col justify-between bg-alinsky-midnight-blue text-alinsky-white">
              <CardContent className="flex min-h-[400px] flex-col items-center justify-between space-y-6 border-0 p-6 sm:p-8 xl:p-10">
                <div className="w-full text-center font-helvetica text-lg font-bold tracking-[-0.18px] sm:text-xl xl:self-start xl:text-left xl:text-4xl xl:leading-[120%]">
                  Performance Analytics
                </div>
                <div className="w-full max-w-[200px] sm:max-w-[160px] xl:max-w-[280px]">
                  <Image
                    src={Bars}
                    alt="Bar Chart Image"
                    className="h-auto w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col justify-between overflow-hidden bg-alinsky-white">
              <CardContent className="flex min-h-[400px] flex-col items-center justify-between space-y-6 border-0 p-6 sm:p-8 xl:p-10">
                <div
                  className="w-full text-center font-helvetica text-lg font-bold tracking-[-0.18px] sm:text-xl xl:text-4xl xl:leading-[60px]"
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
                <div className="">
                  <Image src={Hand} alt="3D Hand" className="h-full w-auto" />
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between overflow-hidden bg-alinsky-white text-alinsky-midnight-blue">
              <CardContent className="flex min-h-[400px] flex-col items-center justify-between space-y-6 border-0 p-6 sm:p-8 xl:p-10">
                <div className="w-full text-center font-helvetica text-lg font-bold tracking-[-0.18px] sm:text-xl xl:self-end xl:text-right xl:text-4xl xl:leading-[52px]">
                  Monthly Strategy Session
                </div>
                <div>
                  <Image
                    src={Circullar}
                    alt="Circular Chart Image"
                    className="h-full w-auto"
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
