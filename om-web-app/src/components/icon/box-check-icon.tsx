import { memo, SVGProps } from "react";

const SvgBoxCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || "18"}
    height={props.height || "18"}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM6.3 13.29C6.69 13.68 7.32 13.68 7.71 13.29L15.29 5.7C15.68 5.31 15.68 4.68 15.29 4.29C14.9 3.9 14.27 3.9 13.88 4.29L7 11.17L4.12 8.29C3.73 7.9 3.1 7.9 2.71 8.29C2.52275 8.47683 2.41751 8.73048 2.41751 8.995C2.41751 9.25952 2.52275 9.51317 2.71 9.7L6.3 13.29Z"
      fill={props.fill || "#C4C4C4"}
    />
  </svg>
);

const Memo = memo(SvgBoxCheckIcon);
export default Memo;
