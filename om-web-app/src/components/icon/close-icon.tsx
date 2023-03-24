import { memo, SVGProps } from "react";

interface SvgCloseIconProps extends SVGProps<SVGSVGElement> {
  onClick?: () => void;
}

const SvgCloseIcon = (props: SvgCloseIconProps) => (
  <svg
    className={props.className || ""}
    width={ props.width || "14"}
    height={ props.height || "14"}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    cursor="pointer"
    onClick={() => props.onClick?.()} 
  >
    <path
      d="M13.3002 0.709712C13.1134 0.52246 12.8597 0.417227 12.5952 0.417227C12.3307 0.417227 12.077 0.52246 11.8902 0.709712L7.00022 5.58971L2.11021 0.699712C1.92338 0.512459 1.66973 0.407227 1.40521 0.407227C1.1407 0.407227 0.887046 0.512459 0.700215 0.699712C0.310215 1.08971 0.310215 1.71971 0.700215 2.10971L5.59021 6.99971L0.700215 11.8897C0.310215 12.2797 0.310215 12.9097 0.700215 13.2997C1.09021 13.6897 1.72021 13.6897 2.11021 13.2997L7.00022 8.40971L11.8902 13.2997C12.2802 13.6897 12.9102 13.6897 13.3002 13.2997C13.6902 12.9097 13.6902 12.2797 13.3002 11.8897L8.41021 6.99971L13.3002 2.10971C13.6802 1.72971 13.6802 1.08971 13.3002 0.709712Z"
      fill={ props.fill || "#BEBEBE"}
    />
  </svg>
);

const Memo = memo(SvgCloseIcon);
export default Memo;
