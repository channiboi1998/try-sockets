import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";
import {
  getSidebarCollapseStatus,
} from "../../../store/ui/selectors";
import { updateSidebarIsHovered } from "../../../store/ui/slice";
import CollapseButton from "./collapse-button";
import MenuItems from "./menu-items";

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const sidebarCollapseStatus = useSelector(getSidebarCollapseStatus);

  return (
    <>
      <div
        className="relative h-full flex flex-col justify-between px-6 py-6 pr-[24px]"
        onMouseEnter={() => dispatch(updateSidebarIsHovered(true))}
        onMouseLeave={() => dispatch(updateSidebarIsHovered(false))}
      >
        <nav className="flex flex-col">
          <MenuItems />
        </nav>
        <p className="text-base text-center">
          {sidebarCollapseStatus === true ? (
            <>TUE SEP 20, 2022 | 3:06PM</>
          ) : (
            <>SEP 20 3:06PM</>
          )}
        </p>
        <CollapseButton />
      </div>
    </>
  );
};
