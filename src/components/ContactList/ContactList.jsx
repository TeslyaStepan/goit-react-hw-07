import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const contactFilter = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={s.contactsList}>
          {Array.isArray(contactFilter) &&
            contactFilter.map((contact) => (
              <Contact key={contact.id} {...contact} />
            ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
