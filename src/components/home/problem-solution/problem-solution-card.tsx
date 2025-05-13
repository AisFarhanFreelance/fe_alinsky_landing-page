import {
  ArrowRight,
  CalendarRemove,
  Chart21,
  CpuSetting,
  TaskSquare,
} from "iconsax-reactjs";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const cardData = [
  {
    icon: <TaskSquare color="#151f68" />,
    text: "Juggling multiple disjointed tools.",
  },
  {
    icon: <CalendarRemove color="#151f68" />,
    text: "Missing critical posting windows.",
  },
  {
    icon: <Chart21 color="#151f68" />,
    text: "Struggling to prove ROI to skeptical executives.",
  },
  {
    icon: <CpuSetting color="#151f68" />,
    text: "Manually handling tasks that should be automated.",
  },
];

const ProblemSolutionCard = () => {
  return (
    <div className="mx-20 flex h-auto flex-col space-y-4 lg:mx-0 lg:grid lg:h-[215px] lg:grid-cols-4 lg:gap-2.5 lg:space-y-0">
      {cardData.map((item, idx) => (
        <Card key={idx} className="flex flex-col justify-between p-6">
          <CardHeader className="flex flex-row justify-between">
            {item.icon}
            <ArrowRight color="#151f68" className="-rotate-45" />
          </CardHeader>
          <CardContent className="font-satoshi text-[15px] font-medium text-alinsky-midnight-blue">
            <span>{item.text}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProblemSolutionCard;
