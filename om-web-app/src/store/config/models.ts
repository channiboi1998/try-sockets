export type SidebarMenuItem = {
  id: number;
  label: string;
  iconKey: string;
  url: string;
};

export type Config = {
  sidebarMenuItems: SidebarMenuItem[];
};