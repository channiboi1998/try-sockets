export type User = {
  role: "store" | "admin" | "super-admin";
  email: string;
};

export interface UserCredentials {
  email: string;
  password: string;
}
