import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { Link } from "react-router-dom";
import { URLA } from "../api/api";
import css from "./Profile.module.css";

const ProfilePage = () => {
  const user = useSelector(selectUser);

  if (!user) {
    return;
  }
  const avatar = user.avatar.startsWith("http")
    ? user.avatar
    : `${URLA()}/${user.avatar}`;
  return (
    <div className={css.prof}>
      <h1 className={css.name}>{user.name}</h1>
      <p className={css.email}>{user.email}</p>
      <img className={css.avatar} src={avatar} width={150} />
      <Link to="update">Update profile</Link>
    </div>
  );
};

export default ProfilePage;
