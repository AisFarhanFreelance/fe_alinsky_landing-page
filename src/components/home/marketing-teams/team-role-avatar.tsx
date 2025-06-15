import { Hashtag, StatusUp } from "iconsax-reactjs";
import Image from "next/image";

import Avatar1 from "/public/assets/images/avatar/avatar-1.svg";
import Avatar2 from "/public/assets/images/avatar/avatar-2.svg";
import Avatar3 from "/public/assets/images/avatar/avatar-3.svg";

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
];

const TeamRoleAvatar = () => {
  return (
    <div className="flex flex-wrap items-end justify-center gap-12">
      {TeamRoleAvatarDatas.map(
        ({ src, bg, icon, iconBackground, label }, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center ${idx === 0 || idx === 2 ? "lg:translate-y-9" : "lg:-translate-y-9"} mt-12`}
          >
            <div className="relative w-fit">
              <div
                className={`absolute inset-0 z-10 rounded-full ${bg} opacity-60`}
              />
              <Image
                src={src}
                alt={`Avatar${idx + 2}`}
                fetchPriority="high"
                className={`relative z-20 h-[165px] w-[165px] rounded-full object-cover sm:h-[220px] sm:w-[220px] md:h-[160px] md:w-[160px]`}
              />
              <div
                className={`absolute -right-2 -bottom-2 z-30 flex h-[67px] w-[67px] items-center justify-center rounded-full border-4 border-alinsky-white ${iconBackground}`}
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
