import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { Toast as ToastSlice } from "../store/ui/model";
import { getToast } from "../store/ui/selectors";
import { setToast } from "../store/ui/slice";
import { CloseIcon, ExclamationPointIcon } from "./icon";

const Toast = () => {
  const dispatch = useAppDispatch();
  const toast: ToastSlice = useSelector(getToast);

  /**
   * Init useEffect responsible for removing the toast after 3 seconds.
   */
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    if (toast.open) {
      timeoutId = setTimeout(() => {
        dispatch(setToast({ ...toast, open: false }));
      }, 3000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [toast]);

  return (
    <Transition
      as={Fragment}
      show={toast.open}
      enter="transition-opacity duration-700 z-50"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500 z-50"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={clsx(
          "fixed z-40 bottom-[114px] left-3 flex min-h-[78px] w-full items-center gap-2 overflow-hidden rounded-lg sm:w-[350px] border-2 bg-ice",
          toast.type === "danger" ? "border-danger" : "border-success"
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-center self-stretch min-w-[78px]",
            toast.type === "danger" ? "bg-danger" : "bg-success"
          )}
        >
          <div className="bg-ice rounded-full">
            <ExclamationPointIcon
              className="m-2"
              fontSize={16}
              fill={clsx(toast.type === "danger" ? "#DC252F" : "#00AC24")}
            />
          </div>
        </div>
        <div className="flex-auto py-3">
          <p className="font-bold text-dark">{toast.title && toast.title}</p>
          <p className="leading-[18px] text-dark">
            {toast.description && toast.description}
          </p>
        </div>
        <CloseIcon
          className={"self-start mt-2 mr-2 cursor-pointer"}
          fill={toast.type === "danger" ? "#DC252F" : "#00AC24"}
          fontSize={10}
          onClick={() => dispatch(setToast({ ...toast, open: false }))}
        />
      </div>
    </Transition>
  );
};

export default Toast;
