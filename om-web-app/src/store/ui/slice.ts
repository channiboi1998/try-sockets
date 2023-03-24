import { createSlice } from "@reduxjs/toolkit";
import { Page, Sidebar, Toast } from "./model";

/**
 * Initial State Interface
 */
type InitialState = {
  page: Page;
  sidebar: Sidebar;
  toast: Toast;
  modals: {
    viewOrderModalOpen: boolean;
    updateOrderModalOpen: boolean;
  };
};

/**
 * Initial State
 */
const initialState: InitialState = {
  page: {
    currentPageSlug: null,
  },
  sidebar: {
    isHovered: false,
    collapseStatus: true,
  },
  toast: {
    open: false,
  },
  modals: {
    viewOrderModalOpen: false,
    updateOrderModalOpen: false,
  },
};

/**
 * State Slice
 */
export const UISlice = createSlice({
  name: "[UI]",
  initialState,
  reducers: {
    setCurrentPageUrl(state, action) {
      state.page.currentPageSlug = action.payload;
    },
    setToast(state, action) {
      state.toast = action.payload;
    },
    updateSidebarCollapseStatus(state) {
      state.sidebar.collapseStatus = !state.sidebar.collapseStatus;
    },
    updateSidebarIsHovered(state, action) {
      state.sidebar.isHovered = action.payload;
    },
    setViewOrderModalOpen(state, action) {
      state.modals.viewOrderModalOpen = action.payload;
    },
    setUpdateOrderModalOpen(state, action) {
      state.modals.updateOrderModalOpen = action.payload;
    },
  },
});

export const {
  setCurrentPageUrl,
  setToast,
  updateSidebarCollapseStatus,
  updateSidebarIsHovered,
  setViewOrderModalOpen,
  setUpdateOrderModalOpen,
} = UISlice.actions;

export default UISlice.reducer;
