import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import FieldError from "./field-error";
import Label from "./label";

const HintText = ({ hint }: { hint?: string }) => (
  <>{hint && <p className="mt-2 text-xs text-[#BDBDBD]">{hint}</p>}</>
);

type InputFieldProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  requiredIndicator?: boolean;
  hint?: string;
  error?: string;
  register?: UseFormRegisterReturn<string>;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
};

const TextAreaField = ({
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
          }
        )}
      >
        {leftAdornment}
        <textarea
          className={clsx(
            "flex-1 bg-transparent text-[#333333] outline-none placeholder:text-dust",
            className
          )}
          autoComplete="off"
          type="text"
          {...rest}
          {...register}
        ></textarea>
        {rightAdornment}
      </div>
      <FieldError error={error} />
      <HintText hint={hint} />
    </>
  );
};

export default TextAreaField;
