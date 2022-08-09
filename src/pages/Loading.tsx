import VerticalLayout from "@components/layout/PageLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/", { replace: true }), 2000);
  });

  return (
    <VerticalLayout pageTitle="Loading...">
      <div className="relative h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="animate-textMorhpism text-6xl font-extrabold"
            id="neumorphismText"
          >
            Welcome to Take High
          </div>
        </div>
        <svg
          className="absolute left-[50%] translate-x-[-50%] animate-balloon drop-shadow-md"
          width="80"
          height="80"
          viewBox="0 0 150 169"
          fill="#fefefe"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M96.5498 156.649C127.468 146.772 150 116.193 150 80C150 35.8172 116.421 0 75 0C33.5786 0 0 35.8172 0 80C0 116.365 22.7473 147.063 53.8923 156.788L52.7839 161.468C51.9473 165 55.0354 168.219 58.5994 167.529L65.2127 166.249C66.0566 166.086 66.9284 166.143 67.7439 166.415L73.8725 168.458C74.9273 168.809 76.0692 168.799 77.1177 168.429L82.6867 166.464C83.5459 166.16 84.4716 166.098 85.3638 166.282L91.4207 167.535C94.8431 168.243 97.9176 165.311 97.3725 161.859L96.5498 156.649Z"
            // fill="#fefefe"
          />
        </svg>
        <svg
          className="absolute bottom-0 animate-sand-one"
          fill="none"
          height="376"
          viewBox="0 0 1920 376"
          width="1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter
            id="a"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="385"
            width="1947"
            x="-11"
            y="0"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="2" dy="-4" />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_11_4"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_11_4"
              mode="normal"
              result="shape"
            />
          </filter>
          <g filter="url(#a)">
            <path
              d="m2 19.0623v354.9377h1917v-223.853c-144.67 71.593-507.2 179.687-800 39.326-292.8-140.362-866.667-172.0913-1117-170.4107z"
              fill="#fff"
            />
          </g>
        </svg>
        <svg
          className="absolute bottom-0 animate-sand-two"
          fill="none"
          height="398"
          viewBox="0 0 1558 398"
          width="1558"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter
            id="a"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="410"
            width="1572"
            x="0"
            y="0"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_11_5"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_11_5"
              mode="normal"
              result="shape"
            />
          </filter>
          <g filter="url(#a)">
            <path
              d="m1557 397h-1079.713-462.287v-193.449c66.9347 43.303 281.251 91.218 603.038-63.541 321.787-154.7594 760.052-131.31959 938.962-100.2548z"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </VerticalLayout>
  );
};

export default Loading;
