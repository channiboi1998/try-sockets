import { memo, SVGProps } from 'react';

const SvgEyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={props.className || ""}
    width={props.width || 14}
    height={props.height || 14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2.625A6.899 6.899 0 0 0 .583 7 6.899 6.899 0 0 0 7 11.375 6.899 6.899 0 0 0 13.416 7 6.899 6.899 0 0 0 7 2.625Zm0 7.292a2.918 2.918 0 0 1 0-5.834 2.918 2.918 0 0 1 0 5.834ZM5.25 7c0-.968.781-1.75 1.75-1.75.968 0 1.75.782 1.75 1.75S7.968 8.75 7 8.75c-.969 0-1.75-.782-1.75-1.75Z"
      fill={props.fill || '#BEBEBE'}
    />
  </svg>
);

const Memo = memo(SvgEyeIcon);
export default Memo;
