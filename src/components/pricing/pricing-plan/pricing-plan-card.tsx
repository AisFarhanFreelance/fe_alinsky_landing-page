import { TickCircle } from "iconsax-reactjs";
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
  planTitle: string;
  planSubtitle?: string;
  planPriceInitial?: string;
  planPriceDiscount: string;
  planDescription: string;
  planFeatures: string[];
  planButtonVariant?: "default" | "outline";
  planButtonText?: string;
  planFeatured?: boolean;
}

const plans: PricingPlanCardProps[] = [
  {
    planTitle: "Plan A",
    planSubtitle: "Perfect for solopreneurs and small teams",
    planPriceInitial: "1,600,000",
    planPriceDiscount: "800,000",
    planDescription: "Panel + Content Plan Template Autopost + Limited 3 User",
    planFeatures: [
      "Social Media Calendar",
      "Basic Post Scheduling",
      "Content Templates",
      "Simple Analytics",
      "5 Social Profiles",
    ],
    planButtonVariant: "outline",
    planButtonText: "Purchase Now",
    planFeatured: false,
  },
  {
    planTitle: "Plan B",
    planPriceInitial: "2,600,000",
    planPriceDiscount: "1,300,000",
    planDescription:
      "Panel + Content Plan Template Autopost + Monthly Result Report + Unlimited User + Bonus 1 Video Asset",
    planFeatures: [
      "Everything in <strong>Plan A</strong>, plus:",
      "Unlimited User Accounts",
      "Monthly Performance Reports",
      "Email Campaign Tools",
      "1 Video Asset Monthly",
      "Priority Support",
    ],
    planButtonVariant: "default",
    planButtonText: "Purchase Now",
    planFeatured: true,
  },
  {
    planTitle: "Plan C",
    planPriceInitial: "4,200,000",
    planPriceDiscount: "3,600,000",
    planDescription:
      "Panel + Content Plan Template Autopost + Month Result Report + Unlimited User + Bonus 5 Video Asset",
    planFeatures: [
      "Everything in <strong>Plan B</strong>, plus:",
      "Affiliate Management",
      "Lead Source Attribution",
      "5 Video Assets Monthly",
      "Strategy Sessions",
      "Dedicated Account Manager",
    ],
    planButtonVariant: "outline",
    planButtonText: "Upgrade Now",
    planFeatured: false,
  },
];

const PlanCardItem = ({
  planTitle,
  planSubtitle,
  planPriceInitial,
  planPriceDiscount,
  planDescription,
  planFeatures,
  planButtonVariant = "outline",
  planButtonText,
  planFeatured = false,
}: PricingPlanCardProps) => {
  return (
    <div
      className={`relative flex justify-center font-satoshi ${planFeatured ? "h-full rounded-[24px]" : ""}`}
    >
      <div
        className={`flex w-full rounded-[20px] ${
          planFeatured ? "h-full flex-col items-center justify-center px-6" : ""
        }`}
        style={{
          ...(planFeatured
            ? {
                borderRadius: "24px",
                backgroundImage:
                  "url('/assets/images/background/most-popular-background.svg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                boxShadow: "0px 4px 74.6px 0px rgba(26, 36, 107, 0.50)",
              }
            : {
                boxShadow: "0px 4px 56px 0px rgba(0, 0, 0, 0.15)",
              }),
        }}
      >
        {planFeatured && (
          <div className="py-4 text-sm leading-[18px] font-bold tracking-[0.16px] text-alinsky-white">
            Most Popular
          </div>
        )}
        <Card
          className={` flex flex-col justify-between rounded-[20px] border-none bg-alinsky-white p-6 text-alinsky-rich-black drop-shadow-lg backdrop-blur-2xl transition-all duration-300
        ${planFeatured ? "mx-2 mb-2" : "w-full"}
      `}
        >
          <div>
            <CardHeader>
              <CardTitle className="text-4xl leading-[150%] font-black">
                {planTitle}
              </CardTitle>
              {planSubtitle && (
                <CardDescription className="text-[14px] leading-[18px] tracking-[0.16px] text-[#757575]">
                  {planSubtitle}
                </CardDescription>
              )}
            </CardHeader>

            <CardContent className="mt-4 space-y-2">
              <div className="leading-[150%] font-bold capitalize">
                <div className="flex flex-row items-center text-xl text-alinsky-persian-red">
                  <sup>Rp.</sup>
                  <div className="line-through">
                    &nbsp;{planPriceInitial}&nbsp;
                  </div>
                  <sub>/month</sub>
                </div>
                <div className="text-4xl leading-[150%] font-bold">
                  <sup>Rp.</sup>&nbsp;{planPriceDiscount}&nbsp;<sub>/month</sub>
                </div>
              </div>
              <div className="text-base leading-[150%] font-medium">
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
    </div>
  );
};

const PricingPlanCard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 space-y-0">
      {plans.map((plan, idx) => (
        <PlanCardItem key={idx} {...plan} />
      ))}
    </div>
  );
};

export default PricingPlanCard;
