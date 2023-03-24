import { SVGProps, memo } from "react";

const SvgRadioUncheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || "20"}
    height={props.height || "21"}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 10.0436C0 4.52358 4.48 0.0435791 10 0.0435791C15.52 0.0435791 20 4.52358 20 10.0436C20 15.5636 15.52 20.0436 10 20.0436C4.48 20.0436 0 15.5636 0 10.0436ZM2 10.0436C2 14.4636 5.58 18.0436 10 18.0436C14.42 18.0436 18 14.4636 18 10.0436C18 5.62358 14.42 2.04358 10 2.04358C5.58 2.04358 2 5.62358 2 10.0436Z"
      fill={props.fill || "#BEBEBE"}
    />
  </svg>
);

const Memo = memo(SvgRadioUncheckIcon);
export default Memo;
