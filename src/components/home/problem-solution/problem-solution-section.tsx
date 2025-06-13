import ProblemSolutionCard from "./problem-solution-card";

const ProblemSolutionSection = () => {
  return (
    <div className="mx-8 flex min-h-screen items-center justify-center rounded-4xl bg-alinsky-anti-flash-white">
      <div className="flex justify-center">
        <div className="w-full max-w-[1920px]">
          <div className="mt-14 mb-8 flex flex-col justify-center space-y-8 alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] xl:mx-[104px] ">
            <div className="space-y-[72px] px-8 text-alinsky-rich-black">
              <div className="text-center font-helvetica text-xl capitalize sm:text-2xl lg:text-5xl">
                4 Hidden Costs Slowing Down Your Client social media Growth
              </div>
              <div>
                <ProblemSolutionCard />
              </div>
            </div>
            <div className="mx-8 flex flex-col space-y-6 rounded-2xl py-6 font-satoshi text-alinsky-midnight-blue capitalize">
              <span className="pt-16 text-6xl leading-[20%] font-bold lg:text-9xl">
                &ldquo;
              </span>
              <span className="text-xl leading-[150%] italic lg:text-[32px]">
                If even one of these problems feels too real… <br /> It&apos;s
                time to reflect&nbsp;:
                <b>
                  &nbsp; What if your social media didn&apos;t need more effort,
                  just better tools
                </b>
              </span>
              <span className="self-end pt-10 text-6xl leading-[20%] font-bold lg:text-9xl">
                &rdquo;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
