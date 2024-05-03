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
      {
        isLoading && <Loader />
        //   (
        //   <div
        //     style={{
        //       height: "100dvh",
        //       width: "100vw",
        //       position: "fixed",
        //       top: "0",
        //       left: "0",
        //       zIndex: "100",
        //       backgroundColor: "rgba(0,0,0,0.5)",
        //     }}
        //   ></div>
        // )
      }
    </div>
  );
};

export default Layout;
