import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectToken } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children, restricted }) => {
  const isLoggedIn = useSelector(selectToken);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/" replace /> : children;
};

export default RestrictedRoute;
