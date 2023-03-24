import { useEffect } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useAppDispatch } from "./store";
import { fetchConfig } from "./store/config/thunks";
import { RoutePath } from "./constants/routes";

/**
 * Import your page components here
 */
import LayoutProvider from "./pages/layout-provider";
import Dashboard from "./pages/dashboard";
import ProductsEditor from "./pages/products-editor";
import Sales from "./pages/sales";
import Store from "./pages/store";
import LoginPage from "./pages/login";
import { useSelector } from "react-redux";

import { getIsLoggedIn } from "./store/user/selectors";

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useAppDispatch();

  /**
   * Setting up UIConfig State when app starts
   */
  useEffect(() => {
    dispatch(fetchConfig());
  }, []);

  /**
   * Include your page routes here
   */
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path={RoutePath.Login}
          element={
            isLoggedIn ? <Navigate to={RoutePath.Dashboard} /> : <LoginPage />
          }
        />
        <Route path="/*" element={<LayoutProvider />}>
          <Route path={RoutePath.Dashboard} element={<Dashboard />} />
          <Route path={RoutePath.Store} element={<Store />} />
          <Route path={RoutePath.ProductsEditor} element={<ProductsEditor />} />
          <Route path={RoutePath.Sales} element={<Sales />} />
          <Route path="*" element={<>Page not Found</>} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;
