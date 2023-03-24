import axios, { AxiosError, AxiosInstance } from "axios";

/**
 * This function creates an instance of the Axios HTTP client with a base URL and request/response interceptors.
 */
const createAxiosInstance = (baseURL: string | undefined): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 30 * 1000,
  });

  /**
   * This interceptor modifies the request configuration to add a leading slash if the URL doesn't already start with one.
   */
  instance.interceptors.request.use(
    (config) => {
      if (!config.url?.startsWith("/")) {
        config.url = `/${config.url}`;
        return config;
      }
      return config;
    },
    /**
     * This interceptor handles request errors and returns a Promise.reject with a ResponseError object.
     */
    (err) => {
      const error: ResponseError = {
        code: err.code || "ERROR",
        message: err.message || "Unhandled Error",
      };
      return Promise.reject(error);
    }
  );

  /**
   * This interceptor handles response errors and returns a Promise.reject with a ResponseError object or the error object in the response data.
   */
  instance.interceptors.response.use(
    (response) => {
      if (response.data?.error) {
        return Promise.reject(response.data.error);
      }
      return response;
    },
    (err: AxiosError<{ error: ResponseError }>) => {
      const error: ResponseError = {
        code: err.code || "ERROR",
        message: err.message || "Unhandled Error",
      };
      if (err.response) {
        if (err.response.data?.error) {
          /**
           * This is a redundancy for handling error response data.
           */
          return Promise.reject(err.response.data.error);
        }
        return Promise.reject(error);
      } else if (err.request) {
        return Promise.reject(error);
      } else {
        return Promise.reject(error);
      }
    }
  );

  return instance;
};

/**
 * These constants get the environment variables and their respective base URLs, then create instances of Axios with those base URLs.
 */
const envs = window.environment;

const connectService = envs?.connectService;
const webService = envs?.webService;
// TEMPORARY: Environment Store ID
export const storeId = webService?.storeId;

export const webSvc = createAxiosInstance(webService?.baseUrl);
export const connectSvc = createAxiosInstance(connectService?.baseUrl);

/**
 * This type is exported for TypeScript support and defines the structure of error objects returned in the response.
 */
export type ResponseError = {
  code: string;
  message: string;
};
