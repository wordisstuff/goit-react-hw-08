import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const user = useSelector(selectUser);
  console.log(user);
  if (!user) {
    return;
  }
  const avatar = user.avatar.startsWith("http")
    ? user.avatar
    : `http://localhost:8080/${user.avatar}`;
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <img src={avatar} width={300} />
      <Link to="update">Update profile</Link>
    </>
  );
};

export default ProfilePage;
