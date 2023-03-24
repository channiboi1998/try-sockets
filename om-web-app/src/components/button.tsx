import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

const styles = {
  success:
    "bg-success-gradient hover:bg-hover-success-gradient active:bg-active-success-gradient w-full capitalize font-semibold text-white rounded-lg  h-[38px] 2xl:h-[47px]",
  warning:
    "bg-warning-gradient hover:bg-hover-warning-gradient active:bg-active-warning-gradient w-full capitalize font-semibold text-white rounded-lg  h-[38px] 2xl:h-[47px]",
  danger:
    "bg-danger-gradient hover:bg-hover-danger-gradient active:bg-active-danger-gradient w-full capitalize font-semibold text-white rounded-lg  h-[38px] 2xl:h-[47px]",
  clearSuccess:
    "border border-success hover:bg-hoverClearSuccess active:bg-activeClearSuccess w-full capitalize font-semibold text-success rounded-lg  h-[38px] 2xl:h-[47px]",
  clearWarning:
    "border border-warning hover:bg-hoverClearWarning active:bg-activeClearWarning w-full capitalize font-semibold text-warning rounded-lg  h-[38px] 2xl:h-[47px]",
  clearDanger:
    "border border-danger hover:bg-hoverClearDanger active:bg-activeClearDanger w-full capitalize font-semibold text-danger rounded-lg  h-[38px] 2xl:h-[47px]",
  icon: "rounded-lg border p-2 rounded-none border-0 ",
  link: "border-0 border-none p-0 font-semibold text-[#00AC24] text-xs",
  plain: "",
};

type ButtonProps = ButtonHTMLAttributes<unknown> & {
  variant?: keyof typeof styles;
  ["aria-label"]: string;
  children?: ReactNode;
  className?: string;
};

const Button = ({
  children,
  variant = "plain",
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} className={clsx(className, styles[variant])}>
      {children}
    </button>
  );
};

export default Button;
