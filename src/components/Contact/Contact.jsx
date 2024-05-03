import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/global/selectors";
import { setSelectedContact } from "../../redux/contacts/slice";

const Contact = ({ data, delContactFunc }) => {
  const { name, number, id } = data;

  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(setSelectedContact(data))} type="button">
        🔧
      </button>
    </>
  );
};

export default Contact;
