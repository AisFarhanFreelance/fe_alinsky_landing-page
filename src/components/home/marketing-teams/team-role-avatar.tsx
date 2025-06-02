import { Hashtag, StatusUp } from "iconsax-reactjs";
import Image from "next/image";

import Avatar1 from "/public/assets/images/avatar/avatar-1.svg";
import Avatar2 from "/public/assets/images/avatar/avatar-2.svg";
import Avatar3 from "/public/assets/images/avatar/avatar-3.svg";
import Avatar4 from "/public/assets/images/avatar/avatar-4.svg";

const TeamRoleAvatarDatas = [
  {
    src: Avatar1,
    bg: "bg-linear-to-b from-alinsky-lavender-blush to-alinsky-white",
    icon: <Hashtag color="#e91e63" />,
    iconBackground: "bg-alinsky-orchid-pink",
    label: "Social Media Manager",
  },
  {
    src: Avatar2,
    bg: "bg-linear-to-b from-alinsky-lavender-web to-alinsky-white",
    icon: <StatusUp color="#9c27b0" />,
    iconBackground: "bg-alinsky-pink-lavender",
    label: "Analytics Expert",
  },
  {
    src: Avatar3,
    bg: "bg-linear-to-b from-alinsky-light-cyan to-alinsky-white",
    icon: <StatusUp color="#03A9F4" />,
    iconBackground: "bg-alinsky-uranian-blue",
    label: "Campaign Manager",
  },
  {
    src: Avatar4,
    bg: "bg-linear-to-b from-alinsky-naples-yellow to-alinsky-white",
    icon: <StatusUp color="#F44336" />,
    iconBackground: "bg-alinsky-tea-rose-red",
    label: "Lead Tracker",
  },
];

const TeamRoleAvatar = () => {
  return (
    <div className="flex flex-wrap items-end justify-center gap-12">
      {TeamRoleAvatarDatas.map(
        ({ src, bg, icon, iconBackground, label }, idx) => (
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
                className={`absolute -right-2 -bottom-2 z-30 rounded-full p-[21.5px] ${iconBackground}`}
              >
                {icon}
              </div>
            </div>
            <span className="mt-4 font-satoshi text-xl font-bold text-alinsky-onyx">
              {label}
            </span>
          </div>
        ),
      )}
    </div>
  );
};

export default TeamRoleAvatar;
