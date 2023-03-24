import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, ReactNode } from "react";
import { variations } from "../utilities/variations";
import { CloseIcon } from "./icon";

type Props = {
  children: ReactNode;
  className?: string;
  position?: "center" | "end";
  isOpen: boolean;
  variant?: "success" | "warning" | "danger";
  title?: string;
  closeModal: () => void;
};

const modalStyles = {
  position: {
    center: "justify-center",
    end: "justify-end",
  },
};

const Modal = ({
  children,
  className,
  position = "center",
  isOpen,
  variant = "success",
  title,
  closeModal,
}: Props) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={clsx(
                "flex min-h-full items-center",
                position && modalStyles.position[position]
              )}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={clsx("transition-all", className)}>
                  {/* Modal Heading */}
                  <div className="p-6 flex flex-row">
                    <div className="flex-1">
                      <h2
                        className={clsx(
                          "font-bold text-2xl capitalize",
                          variations[variant].textColor
                        )}
                      >
                        {title}
                      </h2>
                    </div>
                    {/* Modal Close Button */}
                    <CloseIcon className="mt-2" onClick={closeModal} />
                  </div>
                  <div className="w-full border-separator half"></div>
                  {/* Modal Content */}
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
