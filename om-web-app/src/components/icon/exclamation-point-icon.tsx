import { SVGProps, memo } from "react";

const SvgExclamationPointIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className || ""}
    width={props.width || 16}
    height={props.height || 16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.667 3.333C6.667 2.6 7.267 2 8 2c.734 0 1.334.6 1.334 1.333v5.334C9.334 9.4 8.734 10 8 10c-.733 0-1.333-.6-1.333-1.333V3.333Zm0 9.334a1.333 1.333 0 1 1 2.667 0 1.333 1.333 0 0 1-2.667 0Z"
      fill={props.fill || "#EB5757"}
    />
  </svg>
);

const Memo = memo(SvgExclamationPointIcon);
export default Memo;
