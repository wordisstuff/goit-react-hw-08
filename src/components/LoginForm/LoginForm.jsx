import { FiSearch } from "react-icons/fi";
import style from "../RegistrationForm/RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    dispatch(login(formData));

    e.target.reset();
  };
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="email"
          className={style.input}
          placeholder="Enter your email?"
          name="email"
          required
        />
        <input
          type="password"
          className={style.input}
          placeholder="Enter your password?"
          name="password"
          required
        />
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
