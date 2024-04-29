import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink className={CSS.navlink} to="/register">
        Register
      </NavLink>
      <NavLink className={CSS.navlink} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default Navigation;
