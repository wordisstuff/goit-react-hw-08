import { FiSearch } from "react-icons/fi";
import style from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    const formData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    dispatch(register(formData));

    e.target.reset();
  };
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="name"
          className={style.input}
          placeholder="Enter your name?"
          name="name"
          required
          autoFocus
        />
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

export default RegistrationForm;
