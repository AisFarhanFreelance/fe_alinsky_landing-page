import TeamRoleAvatar from "./team-role-avatar";

const TeamRoleSection = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute z-0 h-full w-full"
        style={{
          backgroundImage: "linear-gradient(180deg, #EEEEEE 0%, #FAFAFA 20%)",
        }}
      />
      <div className="mx-[104px] flex min-h-screen flex-col items-center justify-center space-y-12 py-[240px]">
        <div className="z-10 mx-auto max-w-[1920px] space-y-8 text-center">
          <div className="flex flex-col items-center space-y-0.5 font-satoshi capitalize">
            <div className="text-2xl text-alinsky-onyx capitalize lg:text-5xl lg:leading-16">
              Meet Your New&nbsp;
              <span className="font-bold italic">Social Media</span>
            </div>
            <div className="rounded-2xl bg-alinsky-magnolia p-4 text-5xl leading-16 font-black text-alinsky-slate-blue">
              Command Center
            </div>
          </div>
          <div className="font-satoshi text-sm font-medium text-alinsky-gray-600 capitalize lg:text-xl">
            Most marketing teams waste 12+ hours weekly on
          </div>
        </div>
        <TeamRoleAvatar />
      </div>
    </div>
  );
};

export default TeamRoleSection;
