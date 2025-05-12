import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="my-[72px]">
      <div className="flex w-[868px] flex-row items-center justify-center space-x-20 rounded-2xl bg-alinsky-white-smoke px-16 py-8">
        <div className="font-helvetica text-[32px] text-alinsky-rich-black capitalize">
          Your Social Media Dashboard Is Ready, But Are You?
        </div>
        <Button size="lg" className="uppercase">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
