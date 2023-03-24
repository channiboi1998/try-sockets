import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { ChevronVerticalIcon } from "../icon";
import Label from "./label";

type Item = any;

type SelectFieldProps = {
  className?: string;
  items: Item[];
  value: string;
  placeholder?: string;
  label?: string;
  requiredIndicator?: boolean;
  onChange: (value: string) => void;
};

const SelectField = ({
  className,
  items,
  value,
  placeholder,
  label,
  requiredIndicator,
  onChange,
}: SelectFieldProps) => {
  return (
    <>
      {label && <Label label={label} requiredIndicator={requiredIndicator} />}
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className={className}>
            <Listbox.Button
              className={clsx(
                "relative flex w-full items-center pr-8 rounded border p-[9px] transition-colors",
                open &&
                  "border-success border-b-0 rounded-br-none rounded-bl-none"
              )}
            >
              <span className="absolute right-2">
                <ChevronVerticalIcon
                  fill={open ? "#299834" : "#BEBEBE"}
                  fontSize={8}
                />
              </span>
              <p className={clsx(!value && "text-dust ")}>
                {items.find((item: any) => item.value === value)?.label ||
                  placeholder}
              </p>
            </Listbox.Button>
            {open && (
              <Listbox.Options
                id="scroll"
                className={clsx(
                  "scroll max-h-40 overflow-y-scroll rounded text-sm border",
                  open &&
                    "border-success border-t-0 rounded-tr-none rounded-tl-none"
                )}
                static
              >
                <Listbox.Option key="1" value="">
                  {({ active, selected }) => (
                    <div
                      className={clsx(
                        "cursor-pointer px-2 py-1 hover:text-success hover:bg-ice",
                        active && selected && "text-success bg-ice"
                      )}
                    >
                      {placeholder}
                    </div>
                  )}
                </Listbox.Option>
                {items.map((item: any, id: any) => (
                  <Listbox.Option key={id} value={item.value}>
                    {({ active, selected }) => (
                      <div
                        className={clsx(
                          "cursor-pointer px-2 py-1 hover:text-success hover:bg-ice",
                          active && selected && "text-success bg-ice"
                        )}
                      >
                        {item.label}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </div>
        )}
      </Listbox>
    </>
  );
};

export default SelectField;
