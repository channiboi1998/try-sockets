import { memo, SVGProps } from "react";

const EllipseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className || ""}
    width={props.width || "11"}
    height={props.height || "10"}
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5.01953" cy="5" r="4.5" fill="#EF3E2A" stroke="white" />
  </svg>
);

const Memo = memo(EllipseIcon);
export default Memo;
