import { memo, SVGProps } from "react";

const CommentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className || ""}
    width={props.width || "20"}
    height={props.height || "20"}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.9976 2C19.9976 0.9 19.0977 0 17.9979 0H1.99976C0.899893 0 0 0.9 0 2V14C0 15.1 0.899893 16 1.99976 16H15.9981L19.9976 20V2Z"
      fill={props.fill || "#2DA343"}
    />
  </svg>
);

const Memo = memo(CommentIcon);
export default Memo;
