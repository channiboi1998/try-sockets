import clsx from "clsx";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";
import { getSidebarCollapseStatus, getSidebarIsHovered } from "../../../store/ui/selectors";
import { updateSidebarCollapseStatus } from "../../../store/ui/slice";
import Button from "../../button";
import { ChevronHorizontalIcon } from "../../icon";

const CollapseButton = () => {
  const dispatch = useAppDispatch();
  const sidebarIsHovered = useSelector(getSidebarIsHovered);
  const sidebarCollapseStatus = useSelector(getSidebarCollapseStatus);
  return (
    <>
      <div
        className={clsx(
          "absolute opacity-0 top-0 right-0 h-full w-[24px]",
          sidebarIsHovered === true && "opacity-100"
        )}
      >
        <div className="relative h-full">
          <Button
            className="collapse-button absolute z-10 top-10 left-0 right-0 ml-auto mr-auto bg-evergreen h-[24px] w-[24px] rounded-full"
            aria-label="sidebar collapse button"
            onClick={() => dispatch(updateSidebarCollapseStatus())}
          >
            {sidebarCollapseStatus ? (
              <ChevronHorizontalIcon className="rotate-180" fill="#fff" />
            ) : (
              <ChevronHorizontalIcon className="rotate-0" fill="#fff" />
            )}
          </Button>
          <span className="absolute left-0 right-0 ml-auto mr-auto bg-slate-100 w-[1px] h-full"></span>
        </div>
      </div>
    </>
  );
};

export default CollapseButton;
