import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact, fetchContacts } from "../../redux/contacts/operations";
import { useEffect, useState } from "react";
import Select from "react-select";

const ContactList = () => {
  const [selectedType, setSelectedType] = useState("all");
  const options = [
    { value: "home", label: "Home" },
    { value: "work", label: "Work" },
    { value: "personal", label: "Personal" },
    { value: "other", label: "Other" },
    { value: "all", label: "All" },
  ];

  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(selectedType));
  }, [dispatch, selectedType]);
  const delContactFunc = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Select
        onChange={(option) => {
          setSelectedType(option.value);
        }}
        options={options}
        defaultValue={options[4]}
      />
      {filteredContacts &&
        filteredContacts.map((it) => {
          return (
            <div key={it._id}>
              <Contact data={it} delContactFunc={delContactFunc} />
            </div>
          );
        })}
    </>
  );
};

export default ContactList;
