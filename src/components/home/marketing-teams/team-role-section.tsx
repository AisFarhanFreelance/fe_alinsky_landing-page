import TeamRoleAvatar from "./team-role-avatar";

const TeamRoleSection = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute z-0 h-full w-full" />
      <div className="mx-8 flex min-h-screen flex-col items-center justify-center space-y-12 py-16 alinsky-2xl:mx-[104px] sm:py-[240px] md:mx-14 xl:mx-[104px]">
        <div className="z-10 mx-auto max-w-[1920px] space-y-8 text-center">
          <div className="flex flex-col items-center space-y-0.5 font-satoshi capitalize">
            <div className="text-xl text-alinsky-onyx capitalize sm:text-2xl lg:text-5xl lg:leading-16">
              Meet Your New&nbsp;
              <span className="font-bold italic">Social Media</span>
            </div>
            <div className="rounded-2xl bg-alinsky-magnolia p-2 text-xl font-black text-alinsky-slate-blue lg:py-6 lg:text-5xl">
              Command Center
            </div>
          </div>
          <div className="font-satoshi text-base font-medium text-alinsky-gray-600 capitalize lg:text-xl">
            Most marketing teams waste 12+ hours weekly on
          </div>
        </div>
        <TeamRoleAvatar />
      </div>
    </div>
  );
};

export default TeamRoleSection;
