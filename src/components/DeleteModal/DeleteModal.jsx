const DeleteModal = ({ handleClose, handleDelete }) => {
  return (
    <>
      <p>Are you sure?</p>
      <ul>
        <li>
          <button onClick={handleDelete}>yes</button>
        </li>
        <li>
          <button onClick={handleClose}>no</button>
        </li>
      </ul>
    </>
  );
};

export default DeleteModal;
