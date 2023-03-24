import { signIn } from './thunks';
import { createSlice } from "@reduxjs/toolkit";
import { User } from './model';

/**
 * Initial State Interface
 */
type InitialState = {
  user?: User | null;
  status: string;
};

/**
 * Initial State
 */
const initialState: InitialState = {
  user: null,
  status: "idle",
};

/**
 * State Slice
 */
export const userSlice = createSlice({
  name: "[USER]",
  initialState,
  reducers: {
    signOut: (state, action) => {
      state.user = action.payload;
      state.status = "idle";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.status = "pending";
    }).addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = "success";
    }).addCase(signIn.rejected, (state, action) => {
      state.status = "failed";
    })
  }
});

export const { signOut } = userSlice.actions;

export default userSlice.reducer;
