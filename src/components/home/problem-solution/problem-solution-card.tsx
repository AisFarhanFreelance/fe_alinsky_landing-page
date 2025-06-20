"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarRemove,
  Chart21,
  TaskSquare,
} from "iconsax-reactjs";
import { useMessages } from "next-intl";
import { JSX } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CardItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ProblemSolutionCard = () => {
  const messages = useMessages();
  const costs = messages.homepage.hiddencosts;

  const cardData: CardItem[] = costs.map((item, index: number) => {
    const icons = [
      <TaskSquare color="#151f68" key="icon-1" />,
      <CalendarRemove color="#151f68" key="icon-2" />,
      <Chart21 color="#151f68" key="icon-3" />,
    ];

    return {
      icon: icons[index],
      title: item.title,
      description: item.desc,
    };
  });

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
