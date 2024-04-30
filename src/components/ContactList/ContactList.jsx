import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact, fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const delContactFunc = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {filteredContacts &&
        filteredContacts.map((it) => {
          return (
            <div key={it.id}>
              <Contact data={it} delContactFunc={delContactFunc} />
            </div>
          );
        })}
    </>
  );
};

export default ContactList;
