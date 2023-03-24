import { RootState } from "../index";

/**
 * Fetch `SidebarMenuItems` from config state
 */
export const getSidebarMenuItems = (state: RootState) =>
  state.config.data?.sidebarMenuItems;
