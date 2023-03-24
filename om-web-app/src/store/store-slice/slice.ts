import { createSlice } from "@reduxjs/toolkit";
import { storeId } from "../../api";
import { DeliveryTimelineThresholds } from "./models";

/**
 * Initial State Interface
 */
type InitialState = {
  storesData: {
    availableStores: [];
    selectedStoreId: string;
  };
  settings: {
    deliveryTimelineThresholds: DeliveryTimelineThresholds;
    storeHours?: any;
    storeInformation?: any;
  };
};

/**
 * Initial State
 */
const initialState: InitialState = {
  storesData: {
    availableStores: [],
    //TEMPORARY: MANUALLY FETCHING THE TEMPORARY ENV PROPERTY "storeId".
    selectedStoreId: storeId,
  },
  settings: {
    deliveryTimelineThresholds: {
      onTime: 0,
      atRisk: 301,
      late: 481,
    },
  },
};

/**
 * State Slice
 */
export const StoreSlice = createSlice({
  name: "[STORESLICE]",
  initialState,
  reducers: {},
});

export const {} = StoreSlice.actions;

export default StoreSlice.reducer;
