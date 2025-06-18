"use client";

import { motion } from "framer-motion";
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
      "Switching between calendars, schedulers, and analytics tools isn't just tiring—it creates confusion, missed deadlines, and costly mistakes.",
  },
  {
    icon: <CalendarRemove color="#151f68" />,
    title: "You're Blind Without Real-Time Insights",
    description:
      "Guesswork kills campaigns. Without instant feedback on what's working, you risk wasting budget and momentum. Smart teams iterate fast—and win faster.",
  },
  {
    icon: <Chart21 color="#151f68" />,
    title: "You're Paying for Tasks That Could Run Themselves",
    description:
      "Replaces the need for a full-time scheduler—cutting costs while boosting efficiency.",
  },
];

const ProblemSolutionCard = () => {
  return (
    <div className="flex min-h-[400px] flex-col space-y-4 lg:mx-0 lg:grid lg:h-[215px] lg:grid-cols-3 lg:gap-5 lg:space-y-0">
      {cardData.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.05,
            zIndex: 10,
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="origin-center"
        >
          <Card className="flex h-full flex-col gap-y-12 rounded-2xl bg-alinsky-seasalt p-6 transition-all duration-300 hover:bg-white hover:shadow-xl">
            <CardHeader className="flex flex-row justify-between">
              <motion.div whileHover={{ scale: 1.2 }}>{item.icon}</motion.div>
              <motion.div
                whileHover={{
                  rotate: 0,
                  x: 5,
                }}
                initial={{ rotate: -45 }}
              >
                <ArrowRight color="#151f68" />
              </motion.div>
            </CardHeader>
            <CardContent className="space-y-3 font-satoshi leading-[150%] text-alinsky-midnight-blue capitalize">
              <motion.div
                className="text-xl font-bold"
                whileHover={{ color: "#151F68" }}
              >
                {item.title}
              </motion.div>
              <motion.div
                className="text-base"
                whileHover={{ color: "#2D3748" }}
              >
                {item.description}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ProblemSolutionCard;
