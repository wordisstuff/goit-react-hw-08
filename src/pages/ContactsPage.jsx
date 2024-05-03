import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import EditContactForm from "../components/EditContactForm/EditContactForm";

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <EditContactForm />
    </div>
  );
};

export default ContactsPage;
