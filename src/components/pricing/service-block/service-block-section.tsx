import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import Hand from "/public/assets/images/additional/3d-hand.svg";
import Bars from "/public/assets/images/additional/bars.svg";
import Circullar from "/public/assets/images/additional/circullar.svg";

const ServiceBlockSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="flex h-auto items-center justify-center sm:h-[400px]">
          {/* <div
            className="absolute z-0 h-[740px] w-[780px]"
            style={{
              borderRadius: "780px",
              background:
                "linear-gradient(0deg, rgba(27, 37, 108, 0.50) 0%, rgba(27, 37, 108, 0.50) 100%)",
              filter: "blur(364.95px)",
            }}
          /> */}
          <div className="z-10 mx-8 grid grid-cols-1 items-center justify-center gap-6 alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] sm:grid-cols-3 md:mx-14 xl:mx-[104px]">
            <Card className="flex h-full flex-col justify-between bg-alinsky-midnight-blue text-alinsky-white">
              <CardContent className="mx-10 my-[64px] flex flex-1 flex-col items-center justify-between space-y-20 md:mx-1 xl:my-10">
                <div className="max-w-[253px] font-helvetica text-xl leading-12 font-bold tracking-[-0.18px] md:leading-[100%] md:whitespace-nowrap xl:text-4xl">
                  Performance Analytics
                </div>
                <div className="h-auto w-[200px] md:w-[160px] xl:w-[280px]">
                  <Image src={Bars} alt="Bar Chart Image" />
                </div>
              </CardContent>
            </Card>

            <Card className="relative flex h-full flex-col justify-between overflow-hidden bg-alinsky-white">
              <CardContent className="mx-10 my-10 flex flex-1 flex-col justify-between space-y-10 sm:my-[64px] md:mx-1 xl:mx-10">
                <div
                  className="max-w-[306px] self-stretch font-helvetica text-xl leading-[60px] font-bold tracking-[-0.18px] md:leading-[100%] xl:text-4xl xl:leading-[60px]"
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

                <div className="flex justify-end md:absolute md:right-1 md:bottom-[15%] xl:-right-10 xl:bottom-0">
                  <Image
                    src={Hand}
                    alt="3D Hand Image"
                    className="h-[200px] w-[200px] md:h-[146px] md:w-[146px] xl:h-[260px] xl:w-[260px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="relative flex h-[330px] flex-col justify-between overflow-hidden bg-alinsky-white text-alinsky-midnight-blue sm:h-full">
              <CardContent className="mx-10 my-10 flex  flex-1 flex-col justify-between space-y-10 text-center sm:my-[64px] md:mx-1 xl:mx-10">
                <div className="max-w-[315px] font-helvetica text-xl leading-[52px] font-bold tracking-[-0.18px] md:leading-[100%] xl:text-4xl xl:leading-[52px]">
                  Monthly Strategy Session
                </div>
                <div className="absolute -right-14 -bottom-10 xl:-right-20 xl:-bottom-10">
                  <Image
                    src={Circullar}
                    alt="Circular Chart Image"
                    className="h-[250px] w-[250px] xl:h-[325px] xl:w-[325px]"
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
