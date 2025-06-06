import Image from "next/image";

import SocialMedia1 from "/public/assets/images/additional/social-media-1.svg";

const FirstSocialMediaCard = () => {
  return (
    <div>
      <svg
        width="253"
        height="253"
        viewBox="0 0 253 253"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-38.8806" y="-12.29" width="329.184" height="303.552">
          <div
            style={{
              backdropFilter: "blur(21px)",
              clipPath: "url(#bgblur_0_9478_554_clip_path)",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={SocialMedia1}
              alt="Social Media"
              style={{ objectFit: "contain" }}
            />
          </div>
        </foreignObject>
        <path
          data-figma-bg-blur-radius="42"
          d="M19.4024 38.3319L59.3423 30.5683C65.535 29.3646 71.9273 31.2312 76.4992 35.5781L87.795 46.3173C92.6013 50.887 99.3213 52.8493 105.831 51.5839L196.816 33.8983C207.388 31.8434 217.624 38.7476 219.679 49.3192L247.441 192.146C249.496 202.718 242.592 212.954 232.02 215.008L60.2355 248.4C49.6638 250.455 39.4279 243.551 37.373 232.979L3.98143 61.1944L3.89218 60.6994C2.14347 50.305 8.99576 40.3547 19.4024 38.3319Z"
          fill="url(#paint0_linear_9478_554)"
          stroke="url(#paint1_radial_9478_554)"
        />
        <mask
          id="mask0_9478_554"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="3"
          y="3"
          width="246"
          height="246"
        >
          <foreignObject
            x="-38.8806"
            y="-12.29"
            width="329.184"
            height="303.552"
          >
            <div
              style={{
                backdropFilter: "blur(21px)",
                clipPath: "url(#bgblur_1_9478_554_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <rect
            data-figma-bg-blur-radius="42"
            x="0.586218"
            y="41.4193"
            width="214"
            height="214"
            rx="19.5"
            transform="rotate(-11 0.586218 41.4193)"
            fill="url(#paint2_linear_9478_554)"
            stroke="url(#paint3_radial_9478_554)"
          />
        </mask>
        <g mask="url(#mask0_9478_554)"></g>
        <defs>
          <clipPath
            id="bgblur_0_9478_554_clip_path"
            transform="translate(38.8806 12.29)"
          >
            <path d="M19.4024 38.3319L59.3423 30.5683C65.535 29.3646 71.9273 31.2312 76.4992 35.5781L87.795 46.3173C92.6013 50.887 99.3213 52.8493 105.831 51.5839L196.816 33.8983C207.388 31.8434 217.624 38.7476 219.679 49.3192L247.441 192.146C249.496 202.718 242.592 212.954 232.02 215.008L60.2355 248.4C49.6638 250.455 39.4279 243.551 37.373 232.979L3.98143 61.1944L3.89218 60.6994C2.14347 50.305 8.99576 40.3547 19.4024 38.3319Z" />
          </clipPath>
          <clipPath
            id="bgblur_1_9478_554_clip_path"
            transform="translate(38.8806 12.29)"
          >
            <rect
              x="0.586218"
              y="41.4193"
              width="214"
              height="214"
              rx="19.5"
              transform="rotate(-11 0.586218 41.4193)"
            />
          </clipPath>
          <linearGradient
            id="paint0_linear_9478_554"
            x1="-0.325562"
            y1="41.6572"
            x2="305.145"
            y2="105.641"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.47" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_9478_554"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-0.325562 41.6572) rotate(36.959) scale(351.716 592.918)"
          >
            <stop stopColor="#E2EBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F7F7F7" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_9478_554"
            x1="0"
            y1="41.0239"
            x2="262.438"
            y2="148.785"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint3_radial_9478_554"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0 41.0239) rotate(51.2727) scale(320.752 512.733)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FirstSocialMediaCard;
