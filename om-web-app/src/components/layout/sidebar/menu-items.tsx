import { useSelector } from "react-redux";
import MenuItem from "./menu-item";
import { useTranslation } from "react-i18next";
import { ListIcon, PizzaSliceIcon, SalesIcon, StoreIcon } from "../../icon";
import { getSidebarMenuItems } from "../../../store/config/selectors";
import { SidebarMenuItem } from "../../../store/config/models";
import { getCurrentPageSlug } from "../../../store/ui/selectors";

const MenuItems = () => {
  const { t } = useTranslation("translation");
  const menuItems = useSelector(getSidebarMenuItems);
  const currentPageSlug = useSelector(getCurrentPageSlug);
  /**
   * Mapping icons to their respective components
   */
  const iconsComponentsMap = [
    {
      id: 1,
      iconKey: "list",
      iconComponent: <ListIcon width={17} height={17} />,
    },
    { id: 2, iconKey: "store", iconComponent: <StoreIcon /> },
    { id: 3, iconKey: "pizza", iconComponent: <PizzaSliceIcon /> },
    {
      id: 4,
      iconKey: "sales",
      iconComponent: <SalesIcon width={23} height={23} />,
    },
  ];

  /**
   * Method for fetching the menu's respective icon on the icon map
   */
  const getIcon = (iconKey: string = "list") => {
    return iconsComponentsMap.find((icon: any) => icon.iconKey === iconKey)
      ?.iconComponent;
  };

  /**
   * Method for checking if nav is active
   */
  const isActive = (menuItemUrl: string) => {
    return currentPageSlug === menuItemUrl ? true : false;
  };

  return (
    <>
      <nav className="flex flex-col">
        {menuItems &&
          menuItems.map((menuItem: SidebarMenuItem) => (
            <MenuItem
              key={menuItem.id}
              url={menuItem.url}
              label={t(menuItem.label)}
              icon={getIcon(menuItem.iconKey)}
              active={isActive(menuItem.url)}
            />
          ))}
      </nav>
    </>
  );
};

export default MenuItems;
