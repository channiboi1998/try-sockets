import { createSlice } from "@reduxjs/toolkit";
import { fetchConfig } from "./thunks";
import { Config } from "./models";

/**
 * Initial State Interface
 */
type InitialState = {
  data: Config | null;
};

/**
 * Initial State
 */
const initialState: InitialState = {
  data: null,
};

/**
 * State Slice
 */
export const configSlice = createSlice({
  name: "[CONFIG]",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConfig.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default configSlice.reducer;
