import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="my-[72px]">
      <div className="flex w-[262px] flex-col items-center justify-center space-y-6 space-x-0 rounded-2xl bg-alinsky-white-smoke p-8 lg:w-[868px] lg:flex-row lg:space-y-0 lg:space-x-20 lg:px-16 lg:py-8">
        <div className="text-center font-helvetica text-xl text-alinsky-rich-black capitalize lg:text-start lg:text-[32px]">
          Your Social Media Dashboard Is Ready, But Are You?
        </div>
        <Button size="lg" className="mt-4 uppercase lg:mt-0">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
