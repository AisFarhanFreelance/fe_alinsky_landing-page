import ProblemSolutionCard from "./problem-solution-card";

const ProblemSolutionSection = () => {
  return (
    <div className="flex min-h-screen items-center justify-center rounded-t-4xl bg-alinsky-anti-flash-white">
      <div className="flex justify-center">
        <div className="w-full max-w-[1920px]">
          <div className="mt-14 mb-8 flex flex-col justify-center space-y-8 alinsky-2xl:mx-[104px] alinsky-3xl:mx-[344px] xl:mx-[104px] ">
            <div className="space-y-[72px] text-alinsky-rich-black">
              <div className="text-center font-helvetica text-5xl capitalize">
                4 Hidden Costs Slowing Down Your Client social media Growth
              </div>
              <div>
                <ProblemSolutionCard />
              </div>
            </div>
            <div className="flex flex-col space-y-6 rounded-2xl py-6 font-satoshi text-alinsky-midnight-blue capitalize">
              <span className="pt-16 text-9xl leading-[20%] font-bold">
                &ldquo;
              </span>
              <span className="text-[32px] leading-[150%] italic">
                If even one of these problems feels too real… <br /> It&apos;s
                time to reflect&nbsp;:
                <b>
                  &nbsp; What if your social media didn`t need more effort, just
                  better tools
                </b>
              </span>
              <span className="self-end pt-10 text-9xl leading-[20%] font-bold">
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
