import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { authValidationSchema } from "../helpers/validationSchema";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    console.log(values);
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleAddContact}
        validationSchema={authValidationSchema}
      >
        <Form>
          <label>
            <ErrorMessage className={css.error} name="email" component="span" />
            <Field name="email" type="email" placeholder="Enter email"></Field>
          </label>
          <br />
          <label>
            <Field
              name="password"
              type="password"
              placeholder="Enter password"
            ></Field>
            <ErrorMessage
              className={css.error}
              name="passworde"
              component="span"
            />
          </label>
          <br />
          <button type="submit">📥</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
