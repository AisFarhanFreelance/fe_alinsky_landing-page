import Image from "next/image";

import SocialMedia2 from "/public/assets/images/additional/social-media-2.svg";

const SecondSocialMediaCard = () => {
  return (
    <div>
      <svg
        width="241"
        height="241"
        viewBox="0 0 241 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject
          x="-39.9438"
          y="-38.9365"
          width="316.077"
          height="319.826"
        >
          <div
            style={{
              backdropFilter: "blur(21px)",
              clipPath: "url(#bgblur_0_9478_575_clip_path)",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={SocialMedia2}
              alt="Social Media"
              style={{ objectFit: "contain" }}
            />
          </div>
        </foreignObject>
        <path
          data-figma-bg-blur-radius="42"
          d="M46.7777 3.72381L87.1353 8.89485C93.3926 9.69666 98.8754 13.4761 101.851 19.0388L109.203 32.7819C112.331 38.6297 118.095 42.6029 124.674 43.4458L216.609 55.2256C227.292 56.5943 234.842 66.3636 233.473 77.0458L214.981 221.366C213.612 232.048 203.843 239.598 193.161 238.23L19.5801 215.988C8.89787 214.62 1.34779 204.851 2.71651 194.168L24.9575 20.5874L25.0282 20.0894C26.632 9.67165 36.2623 2.37646 46.7777 3.72381Z"
          fill="url(#paint0_linear_9478_575)"
          stroke="url(#paint1_radial_9478_575)"
        />
        <mask
          id="mask0_9478_575"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="2"
          y="2"
          width="237"
          height="237"
        >
          <foreignObject
            x="-39.9438"
            y="-38.9365"
            width="316.077"
            height="319.826"
          >
            <div
              style={{
                backdropFilter: "blur(21px)",
                clipPath: "url(#bgblur_1_9478_575_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <rect
            data-figma-bg-blur-radius="42"
            x="27.9439"
            y="0.746503"
            width="214"
            height="214"
            rx="19.5"
            transform="rotate(7.30156 27.9439 0.746503)"
            fill="url(#paint2_linear_9478_575)"
            stroke="url(#paint3_radial_9478_575)"
          />
        </mask>
        <g mask="url(#mask0_9478_575)"></g>
        <defs>
          <clipPath
            id="bgblur_0_9478_575_clip_path"
            transform="translate(39.9438 38.9365)"
          >
            <path d="M46.7777 3.72381L87.1353 8.89485C93.3926 9.69666 98.8754 13.4761 101.851 19.0388L109.203 32.7819C112.331 38.6297 118.095 42.6029 124.674 43.4458L216.609 55.2256C227.292 56.5943 234.842 66.3636 233.473 77.0458L214.981 221.366C213.612 232.048 203.843 239.598 193.161 238.23L19.5801 215.988C8.89787 214.62 1.34779 204.851 2.71651 194.168L24.9575 20.5874L25.0282 20.0894C26.632 9.67165 36.2623 2.37646 46.7777 3.72381Z" />
          </clipPath>
          <clipPath
            id="bgblur_1_9478_575_clip_path"
            transform="translate(39.9438 38.9365)"
          >
            <rect
              x="27.9439"
              y="0.746503"
              width="214"
              height="214"
              rx="19.5"
              transform="rotate(7.30156 27.9439 0.746503)"
            />
          </clipPath>
          <linearGradient
            id="paint0_linear_9478_575"
            x1="27.0034"
            y1="0.686035"
            x2="296.93"
            y2="157.357"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.47" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_9478_575"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(27.0034 0.686035) rotate(55.2606) scale(351.716 592.918)"
          >
            <stop stopColor="#E2EBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F7F7F7" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_9478_575"
            x1="27.5115"
            y1="0.187012"
            x2="289.949"
            y2="107.949"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint3_radial_9478_575"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(27.5115 0.187012) rotate(51.2727) scale(320.752 512.733)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SecondSocialMediaCard;
