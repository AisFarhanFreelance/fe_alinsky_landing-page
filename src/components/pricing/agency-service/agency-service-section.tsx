import { Button } from "@/components/ui/button";

const AgencyServiceSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="mx-8 flex h-fit flex-col items-center justify-center space-y-6 rounded-4xl bg-alinsky-midnight-blue py-48 text-alinsky-white alinsky-2xl:mx-[104px] md:mx-14 md:py-28 xl:mx-[104px] xl:h-[500px] xl:space-y-12 2xl:mx-[344px]">
          <div className="text-center capitalize">
            <div className="font-satoshi text-xl font-medium xl:text-4xl">
              Give Your Team
            </div>
            <div>
              <div
                className="w-[874px] font-helvetica text-[40px] font-bold italic xl:text-[64px]"
                style={{
                  backgroundImage:
                    "radial-gradient(65.27% 65.54% at 19.22% 50.39%, #FAFAFA 0%, #F9BAB6 61.54%, #B7B9F4 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Superpower
              </div>
            </div>
          </div>
          <div>
            <Button className="font-helvetica text-[15px] leading-[26px] tracking-[0.46px] uppercase">
              Get It Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyServiceSection;
