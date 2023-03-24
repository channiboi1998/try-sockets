import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  value: string | number;
  onChange: (value: string) => void;
};

const RadioField = ({ className, children, value, onChange }: Props) => {
  return (
    <>
      <div className={clsx(className)}>
        <RadioGroup value={value} onChange={onChange}>
          {children}
        </RadioGroup>
      </div>
    </>
  );
};

export default RadioField;
