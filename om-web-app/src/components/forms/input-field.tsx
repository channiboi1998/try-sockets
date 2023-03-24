import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import FieldError from "./field-error";
import Label from "./label";

const HintText = ({ hint }: { hint?: string }) => (
  <>{hint && <p className="mt-2 text-xs text-[#BDBDBD]">{hint}</p>}</>
);

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
  requiredIndicator?: boolean;
  register?: UseFormRegisterReturn<string>;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
};

const InputField = ({
  label,
  requiredIndicator,
  hint,
  error,
  register,
  className = "",
  leftAdornment,
  rightAdornment,
  ...rest
}: InputFieldProps) => {
  return (
    <>
      {label && <Label label={label} requiredIndicator={requiredIndicator} />}
      <div
        className={clsx(
          "flex w-full items-center gap-x-2 rounded border p-[9px] transition-colors focus-within:border-success",
          {
            "mt-1": label,
            "border-[#EB5757]": error,
            "bg-[#FCFCFC]": rest.disabled,
          }, className
        )}
      >
        {leftAdornment}
        <input
          className={clsx(
            "flex-1 bg-transparent text-[#333333] outline-none placeholder:text-dust"
          )}
          autoComplete="off"
          type="text"
          {...rest}
          {...register}
        />
        {rightAdornment}
      </div>
      <FieldError error={error} />
      <HintText hint={hint} />
    </>
  );
};

export default InputField;
