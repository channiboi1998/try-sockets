import { ResponseError } from "./../../api";
import { createAppThunk } from "./../helpers";
import { User, UserCredentials } from "./model";

export const signIn = createAppThunk<User, UserCredentials>(
  "[User]/Sign In",
  async (credentials, { rejectWithValue }) => {
    //Temporary Database
    const temporaryDatabaseUser = {
      email: "admin@gmail.com",
      password: "admin",
    };

    const temporaryBackendError = {
      code: "401",
      message: "Backend Response: Invalid Credentials",
    };

    if (JSON.stringify(credentials) === JSON.stringify(temporaryDatabaseUser)) {
      return {
        role: "super-admin",
        email: credentials.email,
      };
    } else {
      return rejectWithValue(temporaryBackendError as ResponseError);
    }
  }
);
