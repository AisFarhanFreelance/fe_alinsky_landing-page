import { Button } from "@/components/ui/button";

const AgencyServiceSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="flex h-[500px] flex-col items-center justify-center space-y-12 rounded-4xl bg-alinsky-midnight-blue text-alinsky-white alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] xl:mx-[104px]">
          <div className="text-center capitalize">
            <div className="font-satoshi text-4xl font-medium">
              Give Your Team
            </div>
            <div>
              <div
                className="w-[874px] font-helvetica text-[64px] font-bold italic"
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
