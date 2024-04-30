import { Field, Form, Formik } from "formik";
import { contactsValidationSchema } from "../helpers/validationSchema";
import { ErrorMessage } from "formik";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <>
      <h1 className={css.title}>contacts</h1>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleAddContact}
        validationSchema={contactsValidationSchema}
      >
        <Form>
          <label>
            {" "}
            add contact
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
