import { TickCircle } from "iconsax-reactjs";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface PricingPlan {
  title: string;
  price: string;
  description?: string;
  features: string[];
  note?: string;
  bg: string;
  text: string;
  buttonVariant?: "default" | "outline";
  featured?: boolean;
}

const plans: PricingPlan[] = [
  {
    title: "Free",
    price: "0",
    features: [],
    bg: "bg-alinsky-white-smoke",
    text: "text-alinsky-midnight-blue",
    buttonVariant: "default",
  },
  {
    title: "Plan A",
    price: "800,000",
    description: "Perfect for solopreneurs and small teams",
    note: "Panel + Content Plan Template Autopost + Limited 3 User",
    features: [
      "Social Media Calendar",
      "Basic Post Scheduling",
      "Content Templates",
      "Simple Analytics",
      "5 Social Profiles",
    ],
    bg: "bg-alinsky-egyptian-blue",
    text: "text-alinsky-white",
    buttonVariant: "outline",
  },
  {
    title: "Plan B",
    price: "1,300,000",
    note: "Panel + Content Plan Template Autopost + Monthly Result Report + Unlimited User + Bonus 1 Video Asset",
    features: [
      "Everything in <strong>Plan A</strong>, plus:",
      "Unlimited User Accounts",
      "Monthly Performance Reports",
      "Email Campaign Tools",
      "1 Video Asset Monthly",
      "Priority Support",
    ],
    bg: "bg-alinsky-egyptian-blue",
    text: "text-alinsky-white",
    buttonVariant: "outline",
    featured: true,
  },
  {
    title: "Plan C",
    price: "3,600,000",
    note: "Panel + Content Plan Template Autopost + Month Result Report + Unlimited User + Bonus 5 Video Asset",
    features: [
      "Everything in <strong>Plan B</strong>, plus:",
      "Affiliate Management",
      "Lead Source Attribution",
      "5 Video Assets Monthly",
      "Strategy Sessions",
      "Dedicated Account Manager",
    ],
    bg: "bg-alinsky-egyptian-blue",
    text: "text-alinsky-white",
    buttonVariant: "outline",
  },
];

const CardItem: React.FC<PricingPlan> = ({
  title,
  price,
  features,
  description,
  note,
  bg,
  text,
  buttonVariant = "default",
  featured = false,
}) => (
  <div
    className={`relative flex justify-center lg:mt-0 ${featured ? "mt-4" : "mt-0"}`}
  >
    {featured && (
      <div className="absolute -top-3 left-1/5 z-10 -translate-x-1/2 rounded-full bg-alinsky-periwinkle px-2.5 py-[7px] font-satoshi text-xs text-alinsky-violet-blue lg:left-1/3">
        Most Popular
      </div>
    )}
    <Card
      className={`flex w-full flex-col justify-between rounded-2xl p-6 font-satoshi lg:max-w-xs ${
        featured ? "border-2 border-alinsky-vista-blue" : "border-none"
      } ${bg} ${text}`}
    >
      <div>
        <CardHeader>
          <CardTitle className="text-base font-black">{title}</CardTitle>
          {description && (
            <CardDescription className="text-xs leading-[18px] font-normal tracking-[0.16px] text-alinsky-periwinkle lg:text-[10px]">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="mt-4 space-y-2">
          <div className="text-xl font-bold">
            <sup>Rp.</sup>&nbsp;{price}&nbsp;<sub>/month</sub>
          </div>
          <div>
            <span className="text-xs font-normal">{note}</span>
          </div>
          {features.length > 0 && (
            <div className="space-y-1 text-xs">
              {features.map((feature: string, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <TickCircle color="#5c6bc0" />
                  <span
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: feature }}
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </div>
      <CardFooter className="mt-6">
        <Button variant={buttonVariant} size="sm" className="w-full uppercase">
          GET STARTED
        </Button>
      </CardFooter>
    </Card>
  </div>
);

const PricingCard = () => {
  return (
    <div className="flex flex-col space-y-4 lg:grid lg:grid-cols-4 lg:gap-4 lg:space-y-0">
      {plans.map((plan, idx) => (
        <CardItem key={idx} {...plan} />
      ))}
    </div>
  );
};

export default PricingCard;
