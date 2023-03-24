import { RootState } from "../index";

/**
 * Method for fetching the user
 */
export const getUser = (state: RootState) => state.user.user;

export const getIsLoggedIn = (state: RootState) => !!state.user.user;
