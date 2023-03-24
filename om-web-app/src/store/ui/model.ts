export type Page = {
  currentPageSlug: string | null;
};

export type Sidebar = {
  isHovered: boolean;
  collapseStatus: boolean;
};

export type Toast = {
  open: boolean;
  title?: string;
  description?: string;
  type?: "success" | "danger";
};
