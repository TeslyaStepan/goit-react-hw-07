import s from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "modern-normalize";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <h1 className={s.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
