import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/global/selectors";
import { setSelectedContact } from "../../redux/contacts/slice";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import { useState } from "react";

const Contact = ({ data, delContactFunc }) => {
  const [isShownModal, setIsShownModal] = useState(false);
  const { name, number, _id, contactType } = data;
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  const handleClose = () => {
    setIsShownModal(false);
  };

  const handleDelete = () => {
    delContactFunc(_id);
  };

  return (
    <>
      <div>
        <h2>👤 {name}</h2>
        <p>☎️ {number}</p>
        <p>Type: {contactType} </p>
        <button
          disabled={loading}
          type="button"
          onClick={() => {
            setIsShownModal(true);
          }}
        >
          🪣
        </button>
        <button
          onClick={() => dispatch(setSelectedContact(data))}
          type="button"
        >
          🔧
        </button>
      </div>
      {isShownModal && (
        <DeleteModal handleClose={handleClose} handleDelete={handleDelete} />
      )}
    </>
  );
};

export default Contact;
