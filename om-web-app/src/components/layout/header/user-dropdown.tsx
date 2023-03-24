import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ChevronVerticalIcon } from "../../icon";
import { getUser } from "../../../store/user/selectors";
import { useAppDispatch } from "../../../store";
import { signOut } from "../../../store/user/slice";
import clsx from "clsx";

export const Dropdown = () => {
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch();
  const user = useSelector(getUser);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="relative flex items-center rounded-full px-4 py-2.5 pr-8 text-xs font-semibold md:min-w-[280px] bg-ice text-evergreen md:text-base">
          <span className="mr-2">{user?.email}</span>
          <span className="absolute right-4">
            <ChevronVerticalIcon width={8} height={8} />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute overflow-hidden right-0 w-full rounded bg-white">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={clsx(
                    active && "bg-[#E9F6F9] text-[#00AC24]",
                    "capitalize group flex w-full items-center px-4 py-2 text-xs md:text-sm"
                  )}
                >
                  {t("profile")}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={clsx(
                    active && "bg-[#E9F6F9] text-[#00AC24]",
                    "capitalize group flex w-full items-center px-4 py-2 text-xs md:text-sm"
                  )}
                  onClick={() => dispatch(signOut(null))}
                >
                  {t("logout")}
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Dropdown;
