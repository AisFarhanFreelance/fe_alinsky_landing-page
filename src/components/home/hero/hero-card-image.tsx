import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import { HeroSectionProp } from "@/lib/types/home/hero";

const HeroCardImage = (hero: HeroSectionProp) => {
  return (
    <div>
      <Card className="border-0 shadow-none w-full">
        <CardContent className="p-0">
          <div className={hero.className}>
            <Image src={hero.src} alt={hero.alt} className="object-contain" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroCardImage;
