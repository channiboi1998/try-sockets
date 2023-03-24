import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Sidebar } from "../components/layout";
import {
  getCurrentPageSlug,
  getSidebarCollapseStatus,
} from "../store/ui/selectors";
import { RequireAuth } from "../utilities/guards";
import Toast from "../components/toast";
import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { setCurrentPageUrl } from "../store/ui/slice";

const LayoutProvider = () => {
  const dispatch = useAppDispatch();
  const sidebarCollapseStatus = useSelector(getSidebarCollapseStatus);

  /**
   * Updates the currentPageUrl on the global store whenever the URL slug changes, and removes it when the component is unmounted.
   */
  const location = useLocation();
  const currentPageUrl = useSelector(getCurrentPageSlug);
  useEffect(() => {
    if (location.pathname !== currentPageUrl) {
      dispatch(setCurrentPageUrl(location.pathname));
    }
  }, [location.pathname]);

  return (
    <RequireAuth>
      <Toast />
      <div id="app" className="relative flex flex-wrap items-end">
        <header id="header" className="absolute z-10  top-0 w-[100%]">
          <Header />
        </header>
        <aside
          id="sidebar"
          className={`hidden relative min-h-screen md:block md:flex-1 ${
            sidebarCollapseStatus === true ? "max-w-[246px]" : "max-w-[110px]"
          }`}
        >
          <div className="absolute min-h-screen pt-[100px] w-full h-full">
            <Sidebar />
          </div>
        </aside>
        <main className="relative min-h-screen flex-auto">
          <div className="absolute min-h-screen pt-[70px] md:pt-[100px] w-full h-full">
            <div className="flex flex-col py-6 h-full px-2 bg-ice md:rounded-tl-3xl md:px-10">
              {<Outlet />}
            </div>
          </div>
        </main>
      </div>
    </RequireAuth>
  );
};

export default LayoutProvider;
