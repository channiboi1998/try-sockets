import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { ReactNode } from "react";
import { RadioCheckIcon, RadioUncheckIcon } from "../icon";

type Props = {
  className?: string;
  value: string | number;
  content: ReactNode;
  contentClassName?: string;
  activeContent?: ReactNode;
};

const RadioOption = ({
  className,
  value,
  content,
  contentClassName,
  activeContent,
}: Props) => {
  return (
    <>
      <RadioGroup.Option value={value}>
        {({ checked }) => (
          <div className={clsx("flex flex-row", className)}>
            {/* Option Icon */}
            {checked ? (
              <RadioCheckIcon width={20} height={20} />
            ) : (
              <RadioUncheckIcon height={20} width={20} />
            )}
            {/* Option Content */}
            <div className={clsx("ml-2 flex-1", contentClassName)}>
              {content}
              {checked && activeContent}
            </div>
          </div>
        )}
      </RadioGroup.Option>
    </>
  );
};

export default RadioOption;
