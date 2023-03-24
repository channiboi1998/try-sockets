import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./../index";

/**
 * Sidebar Selectors.
 */
export const getSidebar = (state: RootState) => state.ui.sidebar;

/**
 * Sidebar Selector for the "collapseStatus" sidebar property.
 */
export const getSidebarCollapseStatus = createSelector(
  [getSidebar],
  (sidebar) => {
    return sidebar.collapseStatus;
  }
);

/**
 * Sidebar Selector for the "isHovered" sidebar property.
 */
export const getSidebarIsHovered = createSelector([getSidebar], (sidebar) => {
  return sidebar.isHovered;
});

/**
 * Method for fetching the "sidebar > currentPageUrl".
 */
export const getCurrentPageSlug = (state: RootState) =>
  state.ui.page.currentPageSlug;

/**
 * Get Toast Information
 */
export const getToast = (state: RootState) => state.ui.toast;

/**
 * Selector for Modals
 */
export const getModals = (state: RootState) => state.ui.modals;

export const getViewOrderModalOpen = createSelector([getModals], (modals) => {
  return modals.viewOrderModalOpen;
});

export const getUpdateOrderModalOpen = createSelector([getModals], (modals) => {
  return modals.updateOrderModalOpen;
});
