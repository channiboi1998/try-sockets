import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronVerticalIcon } from "../../icon";
import SearchStoreForm from "./search-store-form";
import StoreResults from "./store-results";

export default function LocationsDropdown() {
  return (
    <div className="w-full max-w-sm px-4">
      <Popover className="relative">
        <Popover.Button className="relative outline-none flex items-center rounded-full px-4 py-2.5 pr-8 text-xs font-semibold min-w-[200px] bg-ice text-evergreen md:text-base">
          <span>Test Store 01</span>
          <span className="absolute right-4">
            <ChevronVerticalIcon width={8} height={8} />
          </span>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            className="absolute rounded min-w-[372px] mt-0 left-0 bg-white"
            style={{ boxShadow: "0px 15px 24px rgba(0, 0, 0, 0.25)" }}
          >
            <SearchStoreForm />
            <StoreResults />
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
