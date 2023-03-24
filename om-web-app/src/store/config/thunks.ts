import axios from "axios";
import { ResponseError } from "../../api";
import { createAppThunk } from "../helpers";

/**
 * This is a thunk function that fetches the UI configuration from the server
 */
export const fetchConfig = createAppThunk(
  "[CONFIG]/fetch_config",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/config/app-config.json`);
      return data;
    } catch (error) {
      /**
       * return the error as the rejected value of the thunk, with additional error details in the form of a ResponseError object
       */
      return rejectWithValue(error as ResponseError);
    }
  }
);
