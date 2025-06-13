import { Button } from "@/components/ui/button";

const HomePageCallToAction = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-[22px] flex w-[884px] flex-col items-center justify-between space-y-4 rounded-[20px] bg-gradient-to-br from-white/40 to-white/0 p-4 shadow-[0_-8px_24px_0_rgba(0,0,0,0.08)] backdrop-blur-[21px] sm:mx-0 sm:flex-row sm:px-16 sm:py-8">
        <div>
          <span className="flex flex-col text-center font-satoshi text-base text-alinsky-midnight-blue capitalize sm:text-left sm:text-2xl">
            Your Social Media Dashboard is Ready,&nbsp;
            <span className="text-center text-base font-bold text-alinsky-rich-black sm:text-left sm:text-[32px]">
              but are you?
            </span>
          </span>
        </div>
        <Button
          size="lg"
          className="bg-alinsky-midnight-blue px-[22px] py-2 text-[15px] leading-[26px] font-normal tracking-[0.46px] text-alinsky-white hover:bg-alinsky-midnight-blue/90"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default HomePageCallToAction;
