import { ResponseError } from "../api";
import { useDispatch } from "react-redux";
import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import { loadState } from "./persistor";

// Import individual slice files for each reducer.
import config from "./config/slice";
import user from "./user/slice";
import ui from "./ui/slice";
import order from "./order/slice";
import storeSlice from "./store-slice/slice";

// Define a rootReducer that combines individual reducers.
const rootReducer = combineReducers({
  config,
  user,
  ui,
  order,
  storeSlice,
});

// Define a type alias for the AppDispatch type.
type AppDispatch = typeof store.dispatch;

// Define a type alias for the RootState type.
export type RootState = ReturnType<typeof rootReducer>;

// Define a hook that can be used instead of the normal useDispatch hook.
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Define a type that is used to configure createAsyncThunk functions.
export type ThunkApiConfig = {
  dispatch: AppDispatch; // The dispatch function used to dispatch actions.
  rejectValue: ResponseError; // The type of error value that will be rejected by createAsyncThunk functions.
  state: RootState; // The type of the global state used in the app.
};

// Define a root reducer that wraps the rootReducer function.
const root: Reducer = (state: RootState, action: AnyAction) => {
  return rootReducer(state, action);
};

// Create a store object by passing the root reducer to the configureStore function.
export const store = configureStore({
  reducer: root,
  preloadedState: loadState(),
});
