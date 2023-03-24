import { memo, SVGProps } from "react";

const SvgChevronVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className || ""}
    width={props.width || "6"}
    height={props.height || "6"}
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.372649 2.41373L2.96265 5.00373C3.35265 5.39373 3.98265 5.39373 4.37265 5.00373L6.96265 2.41373C7.59265 1.78373 7.14265 0.703728 6.25265 0.703728H1.07265C0.182649 0.703728 -0.257351 1.78373 0.372649 2.41373Z"
      fill={props.fill || "#299834"}
    />
  </svg>
);

const Memo = memo(SvgChevronVerticalIcon);
export default Memo;
