const BlurredCard = () => {
  return (
    <div>
      <svg
        width="531"
        height="486"
        viewBox="0 0 531 486"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject
          x="-41.1099"
          y="-41.1099"
          width="613.34"
          height="568.491"
        >
          <div
            style={{
              backdropFilter: "blur(21px)",
              clipPath: "url(#bgblur_0_9233_2018_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <path
          data-figma-bg-blur-radius="42"
          d="M123.993 2.21459L232.579 34.7204C239.204 36.7035 243.75 42.7884 243.773 49.7034C243.798 57.059 248.635 63.5318 255.681 65.6414L515.817 143.514C526.174 146.614 532.032 157.55 528.874 167.891L436.271 471.072C433.137 481.331 422.305 487.133 412.029 484.056L15.3032 365.295C4.98604 362.207 -0.873988 351.339 2.2145 341.022L99.7195 15.3033L99.8703 14.8235C103.096 4.96436 113.499 -0.645483 123.509 2.0769L123.993 2.21459Z"
          fill="url(#paint0_linear_9233_2018)"
          stroke="url(#paint1_radial_9233_2018)"
        />
        <defs>
          <clipPath
            id="bgblur_0_9233_2018_clip_path"
            transform="translate(41.1099 41.1099)"
          >
            <path d="M123.993 2.21459L232.579 34.7204C239.204 36.7035 243.75 42.7884 243.773 49.7034C243.798 57.059 248.635 63.5318 255.681 65.6414L515.817 143.514C526.174 146.614 532.032 157.55 528.874 167.891L436.271 471.072C433.137 481.331 422.305 487.133 412.029 484.056L15.3032 365.295C4.98604 362.207 -0.873988 351.339 2.2145 341.022L99.7195 15.3033L99.8703 14.8235C103.096 4.96436 113.499 -0.645483 123.509 2.0769L123.993 2.21459Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_9233_2018"
            x1="104.976"
            y1="-4"
            x2="570.231"
            y2="437.004"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.47" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_9233_2018"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(104.976 -4) rotate(59.5338) scale(678.607 1146.93)"
          >
            <stop stopColor="#E2EBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F7F7F7" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BlurredCard;
