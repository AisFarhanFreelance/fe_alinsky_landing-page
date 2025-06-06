import Image from "next/image";

import SocialMediaApprovalContent from "/public/assets/images/additional/social-media-approval-content.svg";

const SocialMediaApproval = () => {
  return (
    <div>
      <svg
        width="505"
        height="439"
        viewBox="0 0 505 439"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject
          x="-39.5529"
          y="-39.4136"
          width="579.964"
          height="518.331"
        >
          <div
            style={{
              backdropFilter: "blur(21px)",
              clipPath: "url(#bgblur_0_9475_410_clip_path)",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={SocialMediaApprovalContent}
              alt="Social Media Approval Content Card"
              style={{ objectFit: "contain" }}
            />
          </div>
        </foreignObject>
        <path
          data-figma-bg-blur-radius="42"
          d="M72.4824 3.2786L184.727 19.0535C191.575 20.016 196.985 25.3466 198.05 32.1791C199.183 39.447 204.94 45.1173 212.224 46.141L481.122 83.9323C491.829 85.437 499.268 95.3656 497.703 106.064L451.835 419.736C450.283 430.35 440.448 437.717 429.826 436.225L19.7357 378.59C9.071 377.091 1.64056 367.231 3.13939 356.566L50.4583 19.875L50.535 19.3779C52.2382 9.14534 61.6778 2.03213 71.9834 3.21537L72.4824 3.2786Z"
          fill="url(#paint0_linear_9475_410)"
          stroke="url(#paint1_radial_9475_410)"
        />
        <mask
          id="mask0_9475_410"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="2"
          y="2"
          width="500"
          height="435"
        >
          <foreignObject
            x="-39.5529"
            y="-39.4136"
            width="579.964"
            height="518.331"
          >
            <div
              style={{
                backdropFilter: "blur(21px)",
                clipPath: "url(#bgblur_1_9475_410_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <path
            data-figma-bg-blur-radius="42"
            d="M72.4824 3.2786L484.434 61.1746C495.099 62.6734 502.529 72.534 501.03 83.1987L453.851 418.9C452.352 429.564 442.491 436.995 431.827 435.496L19.8749 377.6C9.21018 376.101 1.77974 366.241 3.27857 355.576L50.4583 19.875C51.9571 9.21021 61.8176 1.77976 72.4824 3.2786Z"
            fill="url(#paint2_linear_9475_410)"
            stroke="url(#paint3_radial_9475_410)"
          />
        </mask>
        <g mask="url(#mask0_9475_410)"></g>
        <defs>
          <clipPath
            id="bgblur_0_9475_410_clip_path"
            transform="translate(39.5529 39.4136)"
          >
            <path d="M72.4824 3.2786L184.727 19.0535C191.575 20.016 196.985 25.3466 198.05 32.1791C199.183 39.447 204.94 45.1173 212.224 46.141L481.122 83.9323C491.829 85.437 499.268 95.3656 497.703 106.064L451.835 419.736C450.283 430.35 440.448 437.717 429.826 436.225L19.7357 378.59C9.071 377.091 1.64056 367.231 3.13939 356.566L50.4583 19.875L50.535 19.3779C52.2382 9.14534 61.6778 2.03213 71.9834 3.21537L72.4824 3.2786Z" />
          </clipPath>
          <clipPath
            id="bgblur_1_9475_410_clip_path"
            transform="translate(39.5529 39.4136)"
          >
            <path d="M72.4824 3.2786L484.434 61.1746C495.099 62.6734 502.529 72.534 501.03 83.1987L453.851 418.9C452.352 429.564 442.491 436.995 431.827 435.496L19.8749 377.6C9.21018 376.101 1.77974 366.241 3.27857 355.576L50.4583 19.875C51.9571 9.21021 61.8176 1.77976 72.4824 3.2786Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_9475_410"
            x1="52.7466"
            y1="0"
            x2="579.133"
            y2="365.874"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.47" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_9475_410"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(52.7466) rotate(50.8685) scale(678.607 1146.93)"
          >
            <stop stopColor="#E2EBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F7F7F7" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_9475_410"
            x1="52.7466"
            y1="0"
            x2="534.555"
            y2="328.56"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint3_radial_9475_410"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(52.7466) rotate(54.0246) scale(612.948 1003.15)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SocialMediaApproval;
