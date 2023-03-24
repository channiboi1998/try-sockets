import { memo, SVGProps } from "react";

const SvgCircleCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className || ""}
    width={props.width || "10"}
    height={props.height || "11"}
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 5.88574C0 3.12574 2.24 0.885742 5 0.885742C7.76 0.885742 10 3.12574 10 5.88574C10 8.64574 7.76 10.8857 5 10.8857C2.24 10.8857 0 8.64574 0 5.88574ZM1.85 6.23574L3.645 8.03074C3.84 8.22574 4.16 8.22574 4.35 8.03074L8.145 4.23574C8.34 4.04074 8.34 3.72574 8.145 3.53074C7.95 3.33574 7.635 3.33574 7.44 3.53074L4 6.97074L2.555 5.53074C2.36 5.33574 2.045 5.33574 1.85 5.53074C1.75637 5.62416 1.70376 5.75098 1.70376 5.88324C1.70376 6.0155 1.75637 6.14233 1.85 6.23574Z"
      fill={props.fill || "#5CAB4C"}
    />
  </svg>
);

const Memo = memo(SvgCircleCheckIcon);
export default Memo;
