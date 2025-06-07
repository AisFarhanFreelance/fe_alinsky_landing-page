import Image from "next/image";

import SocialMedia2 from "/public/assets/images/additional/social-media-2.svg";

const SecondSocialMediaCard = () => {
  return (
    <div>
      <svg
        width="233"
        height="237"
        viewBox="0 0 233 237"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject
          x="-41.6226"
          y="-41.6226"
          width="316.077"
          height="319.826"
        >
          <div
            style={{
              backdropFilter: "blur(21px)",
              clipPath: "url(#bgblur_0_9495_417_clip_path)",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
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
          d="M45.099 1.03778L85.4565 6.20882C91.7139 7.01063 97.1967 10.7901 100.172 16.3527L107.524 30.0958C110.653 35.9436 116.417 39.9169 122.995 40.7598L214.931 52.5396C225.613 53.9083 233.163 63.6775 231.794 74.3597L213.302 218.68C211.934 229.362 202.165 236.912 191.482 235.543L17.9014 213.302C7.21916 211.934 -0.330923 202.165 1.0378 191.482L23.2788 17.9014L23.3495 17.4034C24.9533 6.98562 34.5835 -0.309571 45.099 1.03778Z"
          fill="url(#paint0_linear_9495_417)"
          stroke="url(#paint1_radial_9495_417)"
        />
        <defs>
          <clipPath
            id="bgblur_0_9495_417_clip_path"
            transform="translate(41.6226 41.6226)"
          >
            <path d="M45.099 1.03778L85.4565 6.20882C91.7139 7.01063 97.1967 10.7901 100.172 16.3527L107.524 30.0958C110.653 35.9436 116.417 39.9169 122.995 40.7598L214.931 52.5396C225.613 53.9083 233.163 63.6775 231.794 74.3597L213.302 218.68C211.934 229.362 202.165 236.912 191.482 235.543L17.9014 213.302C7.21916 211.934 -0.330923 202.165 1.0378 191.482L23.2788 17.9014L23.3495 17.4034C24.9533 6.98562 34.5835 -0.309571 45.099 1.03778Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_9495_417"
            x1="25.3247"
            y1="-2"
            x2="295.252"
            y2="154.671"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.47" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_9495_417"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(25.3247 -2) rotate(55.2606) scale(351.716 592.918)"
          >
            <stop stopColor="#E2EBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F7F7F7" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SecondSocialMediaCard;
