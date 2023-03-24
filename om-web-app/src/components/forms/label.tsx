import clsx from "clsx";

type LabelProps = {
  label?: string;
  requiredIndicator?: boolean;
  className?: string;
};

const Label = ({ label, requiredIndicator, className = "" }: LabelProps) => (
  <label className={clsx("text-xs text-[#333333]", className)}>
    {label}
    {requiredIndicator && <i className="text-[#EF3E2A]">*</i>}
  </label>
);

export default Label;
