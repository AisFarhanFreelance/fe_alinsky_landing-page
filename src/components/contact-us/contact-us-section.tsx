import { Button } from "../ui/button";

const ContactUsSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="my-[72px] flex h-[274px] items-center justify-center overflow-hidden alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] xl:mx-[104px]">
          <div className=" flex flex-col items-center justify-center space-y-10 text-center">
            <div className="font-satoshi text-5xl leading-[100%] font-medium text-alinsky-midnight-blue capitalize">
              See Your Brand In Our Platform
            </div>
            <div className="flex flex-row items-center gap-x-5 font-helvetica uppercase">
              <Button className="bg-alinsky-midnight-blue px-[22px] py-2 text-[15px] leading-[26px] font-normal tracking-[0.46px] text-alinsky-white hover:bg-alinsky-midnight-blue/90">
                Reach Out Directly
              </Button>
              <span className="text-[15px] leading-[100%] font-bold italic">
                or
              </span>
              <Button
                variant="outline"
                className="border-alinsky-midnight-blue px-[22px] py-2 text-[15px] leading-[26px] font-normal tracking-[0.46px] text-alinsky-midnight-blue"
              >
                Book A Free Audit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
