import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistState } from "./store/persistor";
import App from "./app";
import "./i18n";
import "./fonts.css";
import "./index.css";
import Fallback from "./components/fallback";

/**
 * Defines a new type for the Window object, adding an environment property that contains an object with key-value pairs, each with a baseUrl property. This helps ensure that other parts of the code correctly access and modify the Window.environment property with the expected structure.
 */
declare global {
  interface Window {
    environment: {
      [x: string]: {
        baseUrl: string;
        storeId: string;
      };
    };
  }
}

/**
 * This function is used to persist the state of the Redux store, with an optional blacklist of state keys to exclude from persistence.
 */
persistState(["config", "ui", "order", "storeSlice"]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.Suspense fallback={<Fallback />}>
      <App />
    </React.Suspense>
  </Provider>
);
