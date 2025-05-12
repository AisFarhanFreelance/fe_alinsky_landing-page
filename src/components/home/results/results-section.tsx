const ResultsSection = () => {
  return (
    <div className="flex w-full flex-col items-center lg:min-h-screen">
      <div className="mx-4 my-12 space-y-12 lg:mx-auto lg:my-60">
        <div className="text-center font-helvetica text-4xl font-bold text-alinsky-midnight-blue uppercase lg:text-9xl">
          <span>Did You Know?</span>
        </div>
        <div className="px-auto text-center font-satoshi text-base text-alinsky-gray-600 lg:text-xl">
          <span>
            Without automation, the average marketing team loses 520 hours per
            year to manual social media tasks.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
