import TeamRoleAvatar from "./team-role-avatar";

const TeamRoleSection = () => {
  return (
    <div className="mx-44 my-60 min-h-screen space-y-12">
      <div className="mx-[65px] space-y-2 text-center">
        <div className="font-helvetica text-2xl text-alinsky-onyx capitalize lg:text-5xl lg:leading-16">
          Meet Yout New&nbsp;
          <span className="font-bold italic">Social Media</span>&nbsp;Command
          Center
        </div>
        <div className="font-satoshi text-sm font-medium text-alinsky-gray-600 lg:text-xl">
          Most marketing teams waste 12+ hours weekly on
        </div>
      </div>
      <TeamRoleAvatar />
    </div>
  );
};

export default TeamRoleSection;
