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
        <div className={css.inputBox}>
          <p className={css.titleForm}>create new</p>
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
        </div>
        <Select
          className={css.select}
          onChange={(option) => {
            setContactType(option.value);
          }}
          options={options}
          defaultValue={options[3]}
        />
        <button>Save</button>
      </form>
    </>
  );
};

export default ContactForm;
