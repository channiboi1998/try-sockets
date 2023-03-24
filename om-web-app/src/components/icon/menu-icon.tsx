import { SVGProps, memo } from "react";

const SvgMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className || ""}
    width={ props.width ||  "14"}
    height={ props.height ||  "14"}
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.625 1.875C13.8125 1.875 14 1.71875 14 1.5V0.5C14 0.3125 13.8125 0.125 13.625 0.125H0.375C0.15625 0.125 0 0.3125 0 0.5V1.5C0 1.71875 0.15625 1.875 0.375 1.875H13.625ZM13.625 6.875C13.8125 6.875 14 6.71875 14 6.5V5.5C14 5.3125 13.8125 5.125 13.625 5.125H0.375C0.15625 5.125 0 5.3125 0 5.5V6.5C0 6.71875 0.15625 6.875 0.375 6.875H13.625ZM13.625 11.875C13.8125 11.875 14 11.7188 14 11.5V10.5C14 10.3125 13.8125 10.125 13.625 10.125H0.375C0.15625 10.125 0 10.3125 0 10.5V11.5C0 11.7188 0.15625 11.875 0.375 11.875H13.625Z"
      fill={props.fill || "#BDBDBD"}
    />
  </svg>
);

const Memo = memo(SvgMenuIcon);
export default Memo;
