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
        <foreignObject x="-38.4483" y="-12.29" width="329.184" height="303.552">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center", // ⬅️ penting untuk vertical centering
              width: "100%",
              height: "100%",
              backdropFilter: "blur(21px)",
              WebkitBackdropFilter: "blur(21px)", // Safari-specific
              clipPath: "url(#bgblur_0_9615_1011_clip_path)",
            }}
          >
            <Image
              src={SocialMedia1}
              alt="Social Media"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </foreignObject>

        <path
          data-figma-bg-blur-radius="42"
          d="M19.8347 38.3319L59.7747 30.5683C65.9673 29.3646 72.3596 31.2312 76.9315 35.5781L88.2273 46.3173C93.0337 50.887 99.7536 52.8493 106.264 51.5839L197.248 33.8983C207.82 31.8434 218.056 38.7476 220.111 49.3192L247.874 192.146C249.928 202.718 243.024 212.954 232.453 215.008L60.6678 248.4C50.0962 250.455 39.8603 243.551 37.8053 232.979L4.41376 61.1944L4.32451 60.6994C2.57579 50.305 9.42809 40.3547 19.8347 38.3319Z"
          fill="url(#paint0_linear_9615_1011)"
          stroke="url(#paint1_radial_9615_1011)"
        />
        <mask
          id="mask0_9615_1011"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="3"
          y="3"
          width="247"
          height="246"
        >
          <foreignObject
            x="-38.4483"
            y="-12.29"
            width="329.184"
            height="303.552"
          >
            <div
              style={{
                backdropFilter: "blur(21px)",
                clipPath: "url(#bgblur_1_9615_1011_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <rect
            data-figma-bg-blur-radius="42"
            x="1.01862"
            y="41.4193"
            width="214"
            height="214"
            rx="19.5"
            transform="rotate(-11 1.01862 41.4193)"
            fill="url(#paint2_linear_9615_1011)"
            stroke="url(#paint3_radial_9615_1011)"
          />
        </mask>
        <g mask="url(#mask0_9615_1011)"></g>
        <defs>
          <clipPath
            id="bgblur_0_9615_1011_clip_path"
            transform="translate(38.4483 12.29)"
          >
            <path d="M19.8347 38.3319L59.7747 30.5683C65.9673 29.3646 72.3596 31.2312 76.9315 35.5781L88.2273 46.3173C93.0337 50.887 99.7536 52.8493 106.264 51.5839L197.248 33.8983C207.82 31.8434 218.056 38.7476 220.111 49.3192L247.874 192.146C249.928 202.718 243.024 212.954 232.453 215.008L60.6678 248.4C50.0962 250.455 39.8603 243.551 37.8053 232.979L4.41376 61.1944L4.32451 60.6994C2.57579 50.305 9.42809 40.3547 19.8347 38.3319Z" />
          </clipPath>
          <clipPath
            id="bgblur_1_9615_1011_clip_path"
            transform="translate(38.4483 12.29)"
          >
            <rect
              x="1.01862"
              y="41.4193"
              width="214"
              height="214"
              rx="19.5"
              transform="rotate(-11 1.01862 41.4193)"
            />
          </clipPath>
          <linearGradient
            id="paint0_linear_9615_1011"
            x1="0.106766"
            y1="41.6572"
            x2="305.578"
            y2="105.641"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.47" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_9615_1011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.106766 41.6572) rotate(36.959) scale(351.716 592.918)"
          >
            <stop stopColor="#E2EBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F7F7F7" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_9615_1011"
            x1="0.432404"
            y1="41.0239"
            x2="262.87"
            y2="148.785"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint3_radial_9615_1011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.432404 41.0239) rotate(51.2727) scale(320.752 512.733)"
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
