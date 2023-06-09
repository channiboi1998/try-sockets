import { memo, SVGProps } from "react";

const DesktopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className || ""}
    width={props.width || "18"}
    height={props.height || "18"}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 0H1.5C0.65625 0 0 0.6875 0 1.5V10.5C0 11.3438 0.65625 12 1.5 12H16.5C17.3125 12 18 11.3438 18 10.5V1.5C18 0.6875 17.3125 0 16.5 0ZM16.3125 10.5H1.6875C1.5625 10.5 1.5 10.4375 1.5 10.3125V1.6875C1.5 1.59375 1.5625 1.5 1.6875 1.5H16.3125C16.4062 1.5 16.5 1.59375 16.5 1.6875V10.3125C16.5 10.4375 16.4062 10.5 16.3125 10.5ZM15 15.25C15 14.8438 14.6562 14.5 14.25 14.5H11.1562L10.5625 12.7812C10.5312 12.625 10.375 12.5 10.2188 12.5H7.75C7.59375 12.5 7.4375 12.625 7.40625 12.7812L6.8125 14.5H3.75C3.3125 14.5 3 14.8438 3 15.25C3 15.6875 3.3125 16 3.75 16H14.25C14.6562 16 15 15.6875 15 15.25Z"
      fill={props.fill || "#F36021"}
    />
  </svg>
);

const Memo = memo(DesktopIcon);
export default Memo;
