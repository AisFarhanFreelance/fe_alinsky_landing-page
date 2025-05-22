import { Hashtag, StatusUp } from "iconsax-reactjs";
import Image from "next/image";

import Avatar1 from "/public/assets/images/avatar/avatar-1.svg";
import Avatar2 from "/public/assets/images/avatar/avatar-2.svg";
import Avatar3 from "/public/assets/images/avatar/avatar-3.svg";
import Avatar4 from "/public/assets/images/avatar/avatar-4.svg";

const TeamRoleAvatarDatas = [
  {
    src: Avatar1,
    bg: "bg-alinsky-orchid-pink",
    icon: <Hashtag color="#e91e63" />,
    label: "Social Media Manager",
  },
  {
    src: Avatar2,
    bg: "bg-alinsky-pink-lavender",
    icon: <StatusUp color="#9c27b0" />,
    label: "Analytics Expert",
  },
  {
    src: Avatar3,
    bg: "bg-alinsky-uranian-blue",
    icon: <StatusUp color="#03A9F4" />,
    label: "Campaign Manager",
  },
  {
    src: Avatar4,
    bg: "bg-alinsky-tea-rose-red",
    icon: <StatusUp color="#F44336" />,
    label: "Lead Tracker",
  },
];

const TeamRoleAvatar = () => {
  return (
    <div className="flex flex-wrap items-end justify-center gap-12">
      {TeamRoleAvatarDatas.map(({ src, bg, icon, label }, idx) => (
        <div
          key={idx}
          className={`flex flex-col items-center ${idx === 0 || idx === 2 ? "translate-y-9" : "-translate-y-9"} mt-12`}
        >
          <div className="relative w-fit">
            <div
              className={`absolute inset-0 z-10 rounded-full ${bg} opacity-60`}
            />
            <Image
              src={src}
              alt={`Avatar${idx + 2}`}
              fetchPriority="high"
              className={`relative z-20 h-[220px] w-[220px] rounded-full object-cover`}
            />
            <div
              className={`absolute -right-2 -bottom-2 z-30 rounded-full p-[21.5px] ${bg}`}
            >
              {icon}
            </div>
          </div>
          <span className="mt-4 font-satoshi text-xl font-bold text-alinsky-onyx">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TeamRoleAvatar;
