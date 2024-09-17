import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectToken } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectToken);
  console.log("YA TUT");
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
