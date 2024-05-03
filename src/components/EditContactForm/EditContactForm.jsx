import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import Modal from "react-modal";
import { contactsValidationSchema } from "../helpers/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedContact } from "../../redux/contacts/selectors";
import css from "./EditContactForm.module.css";
import { updateContact } from "../../redux/contacts/operations";
import { setSelectedContact } from "../../redux/contacts/slice";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditContactForm = () => {
  const dispatch = useDispatch();
  const selectedContact = useSelector(selectSelectedContact);

  const cancelEdit = () => {
    dispatch(setSelectedContact(null));
  };

  const handleEditContact = async (values, actions) => {
    await dispatch(updateContact({ id: selectedContact.id, ...values }));
    actions.resetForm();
  };

  return (
    <div>
      <Modal
        isOpen={!!selectedContact}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>Edit Contact</div>
        <Formik
          initialValues={{
            name: selectedContact?.name,
            number: selectedContact?.number,
          }}
          onSubmit={handleEditContact}
          validationSchema={contactsValidationSchema}
        >
          <Form>
            <label>
              {" "}
              add contact
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
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
            <button type="submit">💽</button>
            <button onClick={cancelEdit} type="button">
              ❌
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default EditContactForm;
