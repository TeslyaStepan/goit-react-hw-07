import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <ul className={s.contactText}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button className={s.btnDlt} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
