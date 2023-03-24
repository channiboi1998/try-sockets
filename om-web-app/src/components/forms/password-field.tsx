import clsx from "clsx";
import { InputHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Button from "../button";
import FieldError from "./field-error";
import { EyeIcon } from "../icon";
import Label from "./label";

type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
  requiredIndicator?: boolean;
  register?: UseFormRegisterReturn<string>;
};

const PasswordField = ({
  label,
  requiredIndicator,
  error,
  register,
  className = "",
  ...rest
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {label && <Label label={label} requiredIndicator={requiredIndicator} />}
      <div
        className={clsx(
          "relative flex items-center w-full overflow-hidden rounded border p-[9px] transition-colors focus-within:border-success",
          {
            "mt-1": label,
            "border-danger": error,
          }, className
        )}
      >
        <input
          className={clsx(
            "w-full text-sm text-[#333333] outline-none placeholder:text-dust"
          )}
          autoComplete="off"
          type={showPassword ? "text" : "password"}
          {...rest}
          {...register}
        />
        <Button
          aria-label="show-password-button"
          className="absolute bg-white right-0"
          type="button"
          variant="icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          <EyeIcon fill={!showPassword ? "#BEBEBE" : "#09A229"} />
        </Button>
      </div>
      <FieldError error={error} />
    </>
  );
};

export default PasswordField;
