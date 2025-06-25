"use client";

import { cn } from "@/lib/utilities";
import { motion } from "framer-motion";
import { TickCircle } from "iconsax-reactjs";
import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

interface PricingPlanCardProps {
  planKey: string;
  planButtonVariant?: "default" | "outline";
  planFeatured?: boolean;
}

const PlanCardItem = ({
  planKey,
  planButtonVariant = "outline",
  planFeatured = false,
}: PricingPlanCardProps) => {
  const t = useTranslations(`homepage.pricingPlan.plans.${planKey}`);
  const tShared = useTranslations(`homepage.pricingPlan`);
  const planTitle = t("title");
  const planSubtitle = t("subtitle");
  const planPriceInitial = t("priceInitial");
  const planPriceDiscount = t("priceDiscount");
  const planDescription = t("description");
  const planFeatures = t.raw("features") as string[];
  const planButtonText = t("buttonText");

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -4,
        boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
      }}
      whileTap={{
        scale: 0.98,
        y: 0,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="relative flex h-full w-full flex-col justify-center font-satoshi transition-transform duration-150"
    >
      <div
        className={cn(
          "flex h-auto w-full flex-col rounded-[20px] lg:h-full",
          planFeatured
            ? "items-center justify-center bg-[url('/assets/images/background/most-popular-background.svg')] bg-cover bg-center bg-no-repeat px-2 pb-2 shadow-alinsky-most-popular"
            : "shadow-alinsky-soft",
        )}
      >
        {planFeatured && (
          <div className="py-4 text-sm font-bold text-alinsky-white">
            {tShared("mostPopular")}
          </div>
        )}
        <Card className="flex flex-1 flex-col justify-between rounded-[20px] border-none bg-alinsky-white p-6 text-alinsky-rich-black backdrop-blur-2xl">
          <div>
            <CardHeader>
              <CardTitle className="text-xl leading-[150%] font-black xl:text-4xl">
                {planTitle}
              </CardTitle>
              {planSubtitle !== "" && (
                <CardDescription className="text-[14px] leading-[18px] tracking-[0.16px] text-[#757575]">
                  {planSubtitle}
                </CardDescription>
              )}
            </CardHeader>

            <CardContent className="mt-4 space-y-2">
              <div className="leading-[150%] font-bold capitalize">
                <div className="flex flex-row items-center text-base text-alinsky-persian-red xl:text-xl">
                  <sup>Rp.</sup>
                  <div className="line-through">
                    &nbsp;{planPriceInitial}&nbsp;
                  </div>
                  <sub>/month</sub>
                </div>
                <div className="text-2xl leading-[150%] font-bold xl:text-4xl">
                  <sup>Rp.</sup>&nbsp;{planPriceDiscount}&nbsp;<sub>/month</sub>
                </div>
              </div>
              <div className="text-sm leading-[150%] font-medium xl:text-base">
                {planDescription}
              </div>
              {planFeatures.length > 0 && (
                <div className="space-y-1 text-base leading-[150%]">
                  {planFeatures.map((feature: string, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <TickCircle color="#5c6bc0" />
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </div>

          <CardFooter className="p-0">
            <Button
              variant={planButtonVariant}
              className={`w-full uppercase ${planFeatured ? "bg-alinsky-midnight-blue text-alinsky-white hover:bg-alinsky-midnight-blue/80" : "border-2 border-alinsky-midnight-blue text-alinsky-midnight-blue"}`}
            >
              {planButtonText}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
};

const PricingPlanCard = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="w-full lg:flex lg:flex-1 lg:flex-col">
        <PlanCardItem planKey="planA" planButtonVariant="outline" />
      </div>
      <div className="w-full lg:flex lg:flex-1 lg:flex-col">
        <PlanCardItem
          planKey="planB"
          planButtonVariant="default"
          planFeatured={true}
        />
      </div>
      <div className="w-full lg:flex lg:flex-1 lg:flex-col">
        <PlanCardItem planKey="planC" planButtonVariant="outline" />
      </div>
    </div>
  );
};

export default PricingPlanCard;
