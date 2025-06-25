import Image from "next/image";

import SocialMedia2 from "/public/assets/images/additional/social-media-2.svg";

const SecondSocialMediaCard = () => {
  return (
    <div>
      <svg
        width="242"
        height="242"
        viewBox="0 0 242 242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject
          x="-39.6223"
          y="-39.0674"
          width="316.077"
          height="319.826"
        >
          <div
            className="flex h-full w-full justify-center pt-8"
            style={{
              justifyContent: "center",
              alignItems: "center", // ⬅️ penting untuk vertical centering
              width: "100%",
              height: "100%",
              backdropFilter: "blur(21px)",
              WebkitBackdropFilter: "blur(21px)", // Safari-specific
              clipPath: "url(#bgblur_0_9615_1006_clip_path)",
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
          d="M47.0992 3.59295L87.4567 8.76399C93.7141 9.56581 99.1969 13.3453 102.173 18.9079L109.525 32.651C112.653 38.4988 118.417 42.472 124.995 43.315L216.931 55.0948C227.613 56.4635 235.163 66.2327 233.794 76.9149L215.303 221.235C213.934 231.917 204.165 239.467 193.482 238.099L19.9016 215.858C9.21935 214.489 1.66926 204.72 3.03798 194.037L25.279 20.4565L25.3497 19.9586C26.9535 9.54079 36.5837 2.2456 47.0992 3.59295Z"
          fill="url(#paint0_linear_9615_1006)"
          stroke="url(#paint1_radial_9615_1006)"
        />
        <mask
          id="mask0_9615_1006"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="2"
          y="2"
          width="237"
          height="237"
        >
          <foreignObject
            x="-39.6223"
            y="-39.0674"
            width="316.077"
            height="319.826"
          >
            <div
              style={{
                backdropFilter: "blur(21px)",
                clipPath: "url(#bgblur_1_9615_1006_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <rect
            data-figma-bg-blur-radius="42"
            x="28.2653"
            y="0.615644"
            width="214"
            height="214"
            rx="19.5"
            transform="rotate(7.30156 28.2653 0.615644)"
            fill="url(#paint2_linear_9615_1006)"
            stroke="url(#paint3_radial_9615_1006)"
          />
        </mask>
        <g mask="url(#mask0_9615_1006)"></g>
        <defs>
          <clipPath
            id="bgblur_0_9615_1006_clip_path"
            transform="translate(39.6223 39.0674)"
          >
            <path d="M47.0992 3.59295L87.4567 8.76399C93.7141 9.56581 99.1969 13.3453 102.173 18.9079L109.525 32.651C112.653 38.4988 118.417 42.472 124.995 43.315L216.931 55.0948C227.613 56.4635 235.163 66.2327 233.794 76.9149L215.303 221.235C213.934 231.917 204.165 239.467 193.482 238.099L19.9016 215.858C9.21935 214.489 1.66926 204.72 3.03798 194.037L25.279 20.4565L25.3497 19.9586C26.9535 9.54079 36.5837 2.2456 47.0992 3.59295Z" />
          </clipPath>
          <clipPath
            id="bgblur_1_9615_1006_clip_path"
            transform="translate(39.6223 39.0674)"
          >
            <rect
              x="28.2653"
              y="0.615644"
              width="214"
              height="214"
              rx="19.5"
              transform="rotate(7.30156 28.2653 0.615644)"
            />
          </clipPath>
          <linearGradient
            id="paint0_linear_9615_1006"
            x1="27.3249"
            y1="0.555176"
            x2="297.252"
            y2="157.226"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.47" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_9615_1006"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(27.3249 0.555176) rotate(55.2606) scale(351.716 592.918)"
          >
            <stop stopColor="#E2EBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F7F7F7" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_9615_1006"
            x1="27.8329"
            y1="0.0561523"
            x2="290.271"
            y2="107.818"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint3_radial_9615_1006"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(27.8329 0.0561523) rotate(51.2727) scale(320.752 512.733)"
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
