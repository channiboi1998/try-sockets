import { SVGProps, memo } from "react";

const SvgRadioCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || "20"}
    height={props.height || "20"}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10Z"
      fill={props.fill || "#00AD24"}
    />
  </svg>
);

const Memo = memo(SvgRadioCheckIcon);
export default Memo;
