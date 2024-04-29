import { Field, Form, Formik } from "formik";
import validationSchema from "../helpers/validationSchema";
import { ErrorMessage } from "formik";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleAddContact}
        validationSchema={validationSchema}
      >
        <Form>
          <label>
            <ErrorMessage className={css.error} name="name" component="span" />
            <Field name="name" type="text" placeholder="Henry Morgan"></Field>
          </label>
          <br />
          <label>
            <Field name="number" type="tel" placeholder="0957777777"></Field>
            <ErrorMessage
              className={css.error}
              name="number"
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

export default ContactForm;
