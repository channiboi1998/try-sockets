import { Link } from "react-router-dom";
import LocationsDropdown from "./locations-dropdown";
import UserDropdown from "./user-dropdown";

export const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center px-2 py-4 bg-white md:px-10 md:py-6">
        <div className="flex flex-none items-center">
          <Link to="/">
            <img
              src="images/brand/gw-delivery-full-logo.png"
              alt="Greenwhich Delivery"
              className="w-full max-w-[80px] md:max-w-[112px]"
            />
          </Link>
        </div>
        <div className="flex-1 md:px-10">
          <h1 className="hidden text-evergreen font-semibold lg:block lg:text-lg xl:text-2xl 2xl:text-3xl">
            Sockets - VOM
          </h1>
        </div>
        <div className="flex flex-row items-center justify-end">
          <div className="hidden mr-2 md:block">
            <LocationsDropdown />
          </div>
          <div className="ml-2">
            <UserDropdown />
          </div>
        </div>
      </div>
    </>
  );
};
