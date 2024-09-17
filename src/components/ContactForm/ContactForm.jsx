// import { Field, Form, Formik } from "formik";
// import { contactsValidationSchema } from "../helpers/validationSchema";
// import { ErrorMessage } from "formik";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import Select from "react-select";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contactType, setContactType] = useState("");

  const dispatch = useDispatch();

  const options = [
    { value: "home", label: "Home" },
    { value: "work", label: "Work" },
    { value: "personal", label: "Personal" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, number, contactType };
    dispatch(addContact(contact));
  };

  return (
    <>
      <h1 className={css.title}>contacts</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
          />
        </label>
        <label>
          Number:
          <input
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            type="text"
            name="number"
          />
        </label>
        <Select
          onChange={(option) => {
            setContactType(option.value);
          }}
          options={options}
          defaultValue={options[3]}
        />
        <button>Save</button>
      </form>

      {/* <Formik
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
      </Formik> */}
    </>
  );
};

export default ContactForm;
