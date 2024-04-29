import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
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
