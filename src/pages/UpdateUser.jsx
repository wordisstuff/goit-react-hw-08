import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAvatar } from "../redux/auth/operations";
import { contactsApi } from "../api/api.js";

const UpdateUserPage = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (evnt) => {
    setFile(evnt.target.files[0]);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    dispatch(updateAvatar(file));
  };

  const handleUpdatePassword = async (evnt) => {
    evnt.preventDefault();
    const data = {
      oldPassword: evnt.target.elements.oldPwd.value,
      newPassword: evnt.target.elements.newPwd.value,
    };
    try {
      await contactsApi.patch("/users/change-pwd", data);
      console.log("Password updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2>Update profile</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="file" name="file" />
        <button>Upload</button>
      </form>
      <h2>Update password</h2>
      <form onSubmit={handleUpdatePassword}>
        <label>
          Old password
          <input name="oldPwd" type="text" />
        </label>
        <label>
          New password
          <input name="newPwd" type="text" />
        </label>
        <button>Save</button>
      </form>
    </>
  );
};
export default UpdateUserPage;
