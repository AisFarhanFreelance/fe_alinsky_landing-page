import Image from "next/image";

import BrandVoiceCardContent from "/public/assets/images/additional/brand-voice-card-content.svg";

const BrandVoiceCard = () => {
  return (
    <div>
      <svg
        width="474"
        height="297"
        viewBox="0 0 474 297"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject
          x="-40.6543"
          y="-40.4004"
          width="553.436"
          height="377.821"
        >
          <div
            style={{
              backdropFilter: "blur(21px)",
              clipPath: "url(#bgblur_0_9603_999_clip_path)",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={BrandVoiceCardContent}
              alt="Reminder Card Content"
              style={{ objectFit: "contain" }}
            />
          </div>
        </foreignObject>
        <path
          data-figma-bg-blur-radius="42"
          d="M38.4353 2.14782L154.758 10.2819C159.862 10.639 164.268 13.9924 165.972 18.8173C167.809 24.0179 172.557 27.632 178.059 28.0169L452.142 47.1826C462.777 47.9264 470.81 57.0609 470.255 67.6454L470.222 68.1502L453.946 276.936C453.114 287.612 443.828 295.62 433.145 294.873L19.9862 265.982C9.24304 265.231 1.14295 255.913 1.89398 245.169L17.6226 20.2401C18.3738 9.49675 27.692 1.39657 38.4353 2.14782Z"
          fill="url(#paint0_linear_9603_999)"
          stroke="url(#paint1_radial_9603_999)"
        />
        <mask
          id="mask0_9603_999"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="1"
          y="1"
          width="472"
          height="295"
        >
          <foreignObject
            x="-40.6543"
            y="-40.4004"
            width="553.436"
            height="377.821"
          >
            <div
              style={{
                backdropFilter: "blur(21px)",
                clipPath: "url(#bgblur_1_9603_999_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <path
            data-figma-bg-blur-radius="42"
            d="M38.453 1.89391L453.44 30.9126C464.183 31.6639 472.283 40.982 471.532 51.7254L455.82 276.418C455.069 287.161 445.75 295.261 435.007 294.51L20.0205 265.491C9.27719 264.74 1.17702 255.422 1.92824 244.679L17.6403 19.9862C18.3915 9.24284 27.7097 1.14267 38.453 1.89391Z"
            fill="url(#paint2_linear_9603_999)"
            stroke="url(#paint3_radial_9603_999)"
          />
        </mask>
        <g mask="url(#mask0_9603_999)"></g>
        <defs>
          <clipPath
            id="bgblur_0_9603_999_clip_path"
            transform="translate(40.6543 40.4004)"
          >
            <path d="M38.4353 2.14782L154.758 10.2819C159.862 10.639 164.268 13.9924 165.972 18.8173C167.809 24.0179 172.557 27.632 178.059 28.0169L452.142 47.1826C462.777 47.9264 470.81 57.0609 470.255 67.6454L470.222 68.1502L453.946 276.936C453.114 287.612 443.828 295.62 433.145 294.873L19.9862 265.982C9.24304 265.231 1.14295 255.913 1.89398 245.169L17.6226 20.2401C18.3738 9.49675 27.692 1.39657 38.4353 2.14782Z" />
          </clipPath>
          <clipPath
            id="bgblur_1_9603_999_clip_path"
            transform="translate(40.6543 40.4004)"
          >
            <path d="M38.453 1.89391L453.44 30.9126C464.183 31.6639 472.283 40.982 471.532 51.7254L455.82 276.418C455.069 287.161 445.75 295.261 435.007 294.51L20.0205 265.491C9.27719 264.74 1.17702 255.422 1.92824 244.679L17.6403 19.9862C18.3915 9.24284 27.7097 1.14267 38.453 1.89391Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_9603_999"
            x1="18.5189"
            y1="0.253906"
            x2="465.195"
            y2="373.345"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.47" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_9603_999"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(18.5189 0.253906) rotate(36.963) scale(592.788 917.282)"
          >
            <stop stopColor="#E2EBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F7F7F7" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_9603_999"
            x1="18.5366"
            y1="0"
            x2="430.223"
            y2="335.996"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint3_radial_9603_999"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(18.5366) rotate(39.9547) scale(525.769 818.455)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BrandVoiceCard;
