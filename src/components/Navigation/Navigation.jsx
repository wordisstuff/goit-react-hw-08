import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div>
      <NavLink className={css.navlink} to="/register">
        Register
      </NavLink>
      <NavLink className={css.navlink} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default Navigation;
