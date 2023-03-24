import { memo, SVGProps } from "react";

const AngleRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className || ""}
    width={props.width || "6"}
    height={props.height || "6"}
    viewBox="0 0 6 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.99995 3.53L1.93995 0.470001C1.67995 0.210001 1.25995 0.210001 0.999946 0.470001C0.739946 0.730001 0.739946 1.15 0.999946 1.41L3.58661 4.00333L0.999946 6.59C0.739946 6.85 0.739946 7.27 0.999946 7.53C1.25995 7.79 1.67995 7.79 1.93995 7.53L4.99995 4.47C5.25995 4.21667 5.25995 3.79 4.99995 3.53Z"
      fill={props.fill || "#00AC24"}
    />
  </svg>
);

const Memo = memo(AngleRightIcon);
export default Memo;
