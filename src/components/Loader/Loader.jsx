import CSS from "./Loader.module.css";
import { getRandomColor } from "../../services/getRandomColor";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={CSS.loader}>
      <ThreeCircles
        visible={true}
        height="250"
        width="250"
        color={getRandomColor()}
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
