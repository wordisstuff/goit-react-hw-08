import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import CSS from "./AuthNav.module.css";
import clsx from "clsx";
const AuthNav = () => {
  const { pathname } = useLocation();
  console.log(pathname);
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
      <section className={CSS.navSection}>
        <div className={CSS.navBox}>
          <Link
            className={clsx(CSS.link, pathname === "/profile" && CSS.active)}
            to="/profile"
          >
            Profile
          </Link>
          <Link
            className={clsx(CSS.link, pathname === "/contacts" && CSS.active)}
            to="/contacts"
          >
            Contacts
          </Link>
        </div>
        <div className={CSS.logBox}>
          <span>Hello {user.name}</span>
          <button className={CSS.btn} onClick={onLogout} type="button">
            Logout
          </button>
        </div>
      </section>
    </div>
  );
};

export default AuthNav;
