import Image from "next/image";

import ReminderCardContent from "/public/assets/images/additional/reminders-card.svg";

const ReminderCard = () => {
  return (
    <div>
      <svg width="483" height="411" viewBox="0 0 483 411" fill="none">
        <foreignObject
          x="-39.7246"
          y="-40.6543"
          width="560.99"
          height="492.061"
        >
          <div
            style={{
              backdropFilter: "blur(21px)",
              clipPath: "url(#bgblur_0_9233_1984_clip_path)",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={ReminderCardContent}
              alt="Reminder Card Content"
              style={{ objectFit: "contain" }}
            />
          </div>
        </foreignObject>
        <path
          data-figma-bg-blur-radius="42"
          d="M47.3539 1.89391L160.425 9.80065C167.108 10.268 172.732 14.9188 174.476 21.3382L174.633 21.9649C176.27 29.136 182.407 34.3909 189.745 34.9041L460.624 53.8458C471.242 54.5883 479.269 63.6946 478.74 74.2628L478.709 74.7667L454.833 390.874C454.025 401.571 444.729 409.607 434.028 408.858L20.9162 379.971C10.1729 379.219 2.0727 369.901 2.82395 359.158L26.5412 19.9862C27.2924 9.24284 36.6106 1.14267 47.3539 1.89391Z"
          fill="url(#paint0_linear_9233_1984)"
          stroke="url(#paint1_radial_9233_1984)"
        />
        <mask
          id="mask0_9233_1984"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="2"
          y="1"
          width="479"
          height="408"
        >
          <foreignObject
            x="-39.7246"
            y="-40.6543"
            width="560.99"
            height="492.061"
          >
            <div
              style={{
                backdropFilter: "blur(21px)",
                clipPath: "url(#bgblur_1_9233_1984_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <path
            data-figma-bg-blur-radius="42"
            d="M47.3539 1.89391L462.341 30.9126C473.084 31.6639 481.184 40.982 480.433 51.7254L456.785 389.9C456.034 400.643 446.716 408.743 435.973 407.992L20.986 378.973C10.2426 378.222 2.14246 368.904 2.8937 358.16L26.5412 19.9862C27.2924 9.24284 36.6106 1.14267 47.3539 1.89391Z"
            fill="url(#paint2_linear_9233_1984)"
            stroke="url(#paint3_radial_9233_1984)"
          />
        </mask>
        <g mask="url(#mask0_9233_1984)"></g>
        <defs>
          <clipPath
            id="bgblur_0_9233_1984_clip_path"
            transform="translate(39.7246 40.6543)"
          >
            <path d="M47.3539 1.89391L160.425 9.80065C167.108 10.268 172.732 14.9188 174.476 21.3382L174.633 21.9649C176.27 29.136 182.407 34.3909 189.745 34.9041L460.624 53.8458C471.242 54.5883 479.269 63.6946 478.74 74.2628L478.709 74.7667L454.833 390.874C454.025 401.571 444.729 409.607 434.028 408.858L20.9162 379.971C10.1729 379.219 2.0727 369.901 2.82395 359.158L26.5412 19.9862C27.2924 9.24284 36.6106 1.14267 47.3539 1.89391Z" />
          </clipPath>
          <clipPath
            id="bgblur_1_9233_1984_clip_path"
            transform="translate(39.7246 40.6543)"
          >
            <path d="M47.3539 1.89391L462.341 30.9126C473.084 31.6639 481.184 40.982 480.433 51.7254L456.785 389.9C456.034 400.643 446.716 408.743 435.973 407.992L20.986 378.973C10.2426 378.222 2.14246 368.904 2.8937 358.16L26.5412 19.9862C27.2924 9.24284 36.6106 1.14267 47.3539 1.89391Z" />
          </clipPath>
          <linearGradient
            id="paint0_linear_9233_1984"
            x1="27.4375"
            y1="0"
            x2="578.064"
            y2="328.264"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.47" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_9233_1984"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(27.4375) rotate(46.8685) scale(678.607 1146.93)"
          >
            <stop stopColor="#E2EBFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F7F7F7" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_9233_1984"
            x1="27.4375"
            y1="0"
            x2="530.991"
            y2="294.15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint3_radial_9233_1984"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(27.4375) rotate(50.0246) scale(612.948 1003.15)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ReminderCard;
