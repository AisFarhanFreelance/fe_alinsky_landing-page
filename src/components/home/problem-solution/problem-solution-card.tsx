import {
  ArrowRight,
  CalendarRemove,
  Chart21,
  TaskSquare,
} from "iconsax-reactjs";
import { JSX } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CardItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const cardData: CardItem[] = [
  {
    icon: <TaskSquare color="#151f68" />,
    title: "Too Many Tools, Zero Flow",
    description:
      "Switching between calendars, schedulers, and analytics tools isn’t just tiring—it creates confusion, missed deadlines, and costly mistakes.",
  },
  {
    icon: <CalendarRemove color="#151f68" />,
    title: "You're Blind Without Real-Time Insights",
    description:
      "Guesswork kills campaigns. Without instant feedback on what’s working, you risk wasting budget and momentum. Smart teams iterate fast—and win faster.",
  },
  {
    icon: <Chart21 color="#151f68" />,
    title: "You’re Paying for Tasks That Could Run Themselves",
    description:
      "replaces the need for a full-time scheduler—cutting costs while boosting efficiency.",
  },
];

const ProblemSolutionCard = () => {
  return (
    <div className="flex min-h-[400px] flex-col space-y-4 lg:mx-0 lg:grid lg:h-[215px] lg:grid-cols-3 lg:gap-5 lg:space-y-0">
      {cardData.map((item, idx) => (
        <Card
          key={idx}
          className="flex flex-col gap-y-12 rounded-2xl bg-alinsky-seasalt p-6"
        >
          <CardHeader className="flex flex-row justify-between">
            {item.icon}
            <ArrowRight color="#151f68" className="-rotate-45" />
          </CardHeader>
          <CardContent className="space-y-3 font-satoshi leading-[150%] text-alinsky-midnight-blue capitalize">
            <div className="text-xl font-bold">{item.title}</div>
            <div className="text-base">{item.description}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProblemSolutionCard;
