import { Hashtag, StatusUp } from "iconsax-reactjs";
import Image from "next/image";

import Avatar2 from "/public/assets/images/avatar-2.svg";
import Avatar3 from "/public/assets/images/avatar-3.svg";
import Avatar4 from "/public/assets/images/avatar-4.svg";
import Avatar5 from "/public/assets/images/avatar-5.svg";

const cardData = [
  {
    src: Avatar2,
    bg: "bg-alinsky-orchid-pink",
    icon: <Hashtag color="#e91e63" />,
    label: "Social Media Manager",
  },
  {
    src: Avatar3,
    bg: "bg-alinsky-pink-lavender",
    icon: <StatusUp color="#9c27b0" />,
    label: "Analytics Expert",
  },
  {
    src: Avatar4,
    bg: "bg-alinsky-uranian-blue",
    icon: <StatusUp color="#03A9F4" />,
    label: "Campaign Manager",
  },
  {
    src: Avatar5,
    bg: "bg-alinsky-tea-rose-red",
    icon: <StatusUp color="#F44336" />,
    label: "Lead Tracker",
  },
];

const SolutionOverviewCard = () => {
  return (
    <div className="grid grid-cols-4 gap-12">
      {cardData.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="relative w-fit">
            <Image
              src={item.src}
              alt={`Avatar${idx + 2}`}
              fetchPriority="high"
            />
            <div
              className={`absolute -bottom-2 -right-2 rounded-full p-[21.5px] ${item.bg}`}
            >
              {item.icon}
            </div>
          </div>
          <span className="mt-4 font-satoshi font-medium text-base text-alinsky-onyx">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SolutionOverviewCard;
