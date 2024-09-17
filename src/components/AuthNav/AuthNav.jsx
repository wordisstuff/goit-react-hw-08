import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import CSS from "./AuthNav.module.css";
const AuthNav = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <NavLink className={CSS.navlink} to="/contacts">
        <h1>
          <span style={{ color: "#9c9ef9aa" }}>P</span>h
          <span style={{ color: "#9cf9c0aa" }}>o</span>n
          <span style={{ color: "#61dafbaa" }}>e</span>b
          <span style={{ color: "#80945baa" }}>♾️</span>k
        </h1>
      </NavLink>
      <div>
        <span>Hello {user.name}</span>
        <Link to="/profile">Profile</Link>
        <button onClick={onLogout} type="button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AuthNav;
