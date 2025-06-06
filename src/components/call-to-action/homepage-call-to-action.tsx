import { Button } from "@/components/ui/button";

const HomePageCallToAction = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-[884px] flex-row items-center justify-between rounded-[20px] bg-gradient-to-br from-white/40 to-white/0 px-16 py-8 shadow-[0_-8px_24px_0_rgba(0,0,0,0.08)] backdrop-blur-[21px]">
        <div>
          <span className="flex flex-col font-satoshi text-2xl text-alinsky-midnight-blue capitalize">
            Your Social Media Dashboard is Ready,&nbsp;
            <span className="text-[32px] font-bold text-alinsky-rich-black">
              but are you?
            </span>
          </span>
        </div>
        <Button size="lg">Get Started</Button>
      </div>
    </div>
  );
};

export default HomePageCallToAction;
