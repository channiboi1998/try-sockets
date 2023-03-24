import clsx from "clsx";
import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSidebarCollapseStatus } from "../../../store/ui/selectors";

type Props = {
  url: string;
  icon: ReactNode;
  active: boolean;
  label: string;
};

const MenuItem = ({ url, icon, active, label }: Props) => {
  const [itemHover, setItemHover] = useState(false);
  const sidebarCollapseStatus = useSelector(getSidebarCollapseStatus);

  const fillIcon = (icon: any) => {
    return React.cloneElement(icon, {
      fill: "#00AC24",
    });
  };

  const hoverIconHandler = (active: boolean, icon: ReactNode) => {
    if (active) {
      return fillIcon(icon);
    }
    return icon;
  };

  return (
    <Link
      to={url}
      className={clsx(
        "text-dark nav-item flex flex-row items-center rounded-lg px-4 min-h-[56px] hover:text-success hover:bg-ice",
        active && "bg-ice text-success"
      )}
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      <span className="px-1 w-[40px]">
        {active ? fillIcon(icon) : hoverIconHandler(itemHover, icon)}
      </span>
      {sidebarCollapseStatus && (
        <span className={clsx("nav-label capitalize font-semibold text-xl")}>{label}</span>
      )}
    </Link>
  );
};

export default MenuItem;
