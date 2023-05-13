import React from "react";

const Background = () => {
  return (
    <svg className="w-full absolute z-0 top-0"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1004H1442.5V0C966.314 518.626 644.677 571.095 1 359.5V1004Z"
        fill="#62E18D"
      />
      <g filter="url(#filter0_d_202_200)">
        <path
          d="M-50 1001H1490V180C1416.54 187.86 1246.77 256.741 1155.4 469.386C1041.19 735.193 973.092 706.79 554.847 673.565C220.251 646.984 12.2006 736.801 -50 785.032V1001Z"
          fill="url(#paint0_linear_202_200)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_202_200"
          x="-134"
          y="60"
          width="1708"
          height="989"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-36" />
          <feGaussianBlur stdDeviation="42" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_202_200"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_202_200"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_202_200"
          x1="720"
          y1="180"
          x2="720"
          y2="1001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8CF691" />
          <stop offset="1" stopColor="#80EF91" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Background;
