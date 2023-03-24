import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../store/user/selectors";

/**
 * This component is responsible for redirecting unauthenticated users to the login page.
 */
const GuardNavigator = ({ allowed, children }: any) => {
  // If allowed is false, navigate to the login page
  if (!allowed) {
    return <Navigate to={"/"} replace />;
  }
  // Otherwise, render the children
  return <>{children}</>;
};

/**
 * This component is used to wrap around protected routes that require authentication.
 */
export const RequireAuth = ({ children }: { children: any }) => {
  // Get the value of isLoggedIn from the Redux store using the useSelector hook
  const isLoggedIn = useSelector(getIsLoggedIn);
  // Render the GuardNavigator component with allowed set to the value of isLoggedIn
  // and pass down children as props
  return <GuardNavigator allowed={isLoggedIn}>{children}</GuardNavigator>;
};
