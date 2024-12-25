import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/global/selectors";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const isLoading = useSelector(selectLoading);
  return (
    <div>
      {isTabletOrMobile && <div>isTabletOrMobile</div>}
      <header>
        <AppBar />
      </header>
      <main>{children}</main>
      {isLoading && <Loader />}
    </div>
  );
};

export default Layout;
