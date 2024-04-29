import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";

const Contact = ({ data, delContactFunc }) => {
  const { name, number, id } = data;

  const lodading = useSelector(selectLoading);
  return (
    <>
      <h2>👤 {name}</h2>
      <p>☎️ {number}</p>
      <button
        disabled={lodading}
        type="button"
        onClick={() => {
          delContactFunc(id);
        }}
      >
        🪣
      </button>
    </>
  );
};

export default Contact;
