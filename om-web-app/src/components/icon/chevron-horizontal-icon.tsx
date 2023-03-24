import { memo, SVGProps } from "react";

const SvgChevronHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className || ""}
    width={props.width || "6"}
    height={props.height || "8"}
    viewBox="0 0 6 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.41364 0.706233L5.00364 3.29623C5.39364 3.68623 5.39364 4.31623 5.00364 4.70623L2.41364 7.29623C1.78364 7.92623 0.703642 7.47623 0.703642 6.58623V1.40623C0.703642 0.516233 1.78364 0.0762329 2.41364 0.706233Z"
      fill={props.fill || "white"}
    />
  </svg>
);

const Memo = memo(SvgChevronHorizontalIcon);
export default Memo;
