import Image from "next/image";

// import BrandToneImage from "/public/assets/images/additional/solution-overview/brand-tone-image.svg";
import ContentAI2 from "/public/assets/images/additional/solution-overview/content-ai-2.svg";
import ContentAI3 from "/public/assets/images/additional/solution-overview/content-ai-3.svg";
import ContentAI4 from "/public/assets/images/additional/solution-overview/content-ai-4.svg";

const BrandTonePostCreationSection = () => {
  return (
    <div className="mx-8 grid min-h-screen grid-cols-2 gap-x-14">
      <div className="relative flex items-center justify-center  rounded-[2340.778px_46.816px_46.816px_46.816px] bg-alinsky-midnight-blue">
        <Image
          src={ContentAI3}
          alt="Content Image 3"
          width={300}
          height={200}
          className="absolute top-[17%] -left-[3%] z-10 rounded-2xl"
        />

        <Image
          src={ContentAI4}
          alt="Content Image 4"
          width={581}
          height={338}
          className="absolute top-[36%] left-[2%] z-0 rounded-2xl"
        />

        <Image
          src={ContentAI2}
          alt="Content Image 2"
          width={400}
          height={228}
          className="absolute -right-[8%] bottom-[5%] z-10 rounded-2xl"
        />
      </div>

      <div className="flex flex-col space-y-8 rounded-[46px] bg-alinsky-anti-flash-white px-8 py-[72px] font-satoshi text-alinsky-midnight-blue">
        <div className="flex items-center space-x-8">
          <span className="text-[32px] leading-[126%] font-medium tracking-[-3%]">
            Consistent Brand Tone
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="127"
            height="4"
            viewBox="0 0 127 4"
            fill="none"
          >
            <path
              d="M0.444458 2H126.804"
              stroke="#693BFF"
              strokeWidth="2.34078"
            />
          </svg>
        </div>
        <div className="space-y-3 self-stretch">
          <div className="text-[64px] leading-[100%] font-bold tracking-[-0.18px]">
            Craft posts that match your brand voice in seconds
          </div>
          <div className="text-2xl leading-[140%] tracking-[0.1px]">
            Imagine having an assistant that instantly understands your brand
            voice and writes like your best copywriter—on demand. With ALINSKY’s
            AI Copy Enhancer, generate scroll-stopping posts in seconds, freeing
            up hours of content creation time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandTonePostCreationSection;
