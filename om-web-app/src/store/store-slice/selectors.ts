import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./../index";

export const getStoresData = (state: RootState) => state.storeSlice.storesData;

export const getSelectedStoreId = createSelector(
  [getStoresData],
  (storesData) => {
    return storesData.selectedStoreId || "";
  }
);

export const getSettings = (state: RootState) => state.storeSlice.settings;

export const getDeliveryTimelineThresholds = createSelector(
  [getSettings],
  (settings) => {
    return (
      settings.deliveryTimelineThresholds || {
        onTime: 0,
        atRisk: 5,
        late: 8,
      }
    );
  }
);
