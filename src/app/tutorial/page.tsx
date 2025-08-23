import Image from "next/image";

import TutorialTopBar from "@/components/tutorial/top-bar-section";

import tutorialEllipse from "../../../public/assets/images/additional/tutorial-ellipse.svg";

const Tutorial = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-[-400px] right-[-200px] z-0">
        <Image
          src={tutorialEllipse}
          alt="Tutorial Ellipse"
          unoptimized
          width={1564.1}
          height={800}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mt-[184.48px] items-center justify-items-center">
        <TutorialTopBar />
      </div>
    </div>
  );
};

export default Tutorial;
