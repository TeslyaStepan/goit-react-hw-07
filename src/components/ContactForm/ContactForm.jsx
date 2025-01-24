import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
  const dispatch = useDispatch();

  const addNewContact = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    options.resetForm();
    dispatch(addContact(newContact));
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Має бути не менше трьох символів")
      .max(50, "50 симовлів це ваш максимум")
      .required("Це поле обовʼязкове"),
    number: Yup.string()
      .matches(
        /^[0-9+\-()\s]+$/,
        "Номер може містити лише цифри та деякі символи"
      )
      .required("Це поле обовʼязкове"),
  });

  return (
    <Formik
      onSubmit={addNewContact}
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactSchema}
    >
      <Form className={s.form}>
        <label htmlFor="name">Name</label>
        <Field id="name" type="text" name="name"></Field>
        <ErrorMessage component="span" name="name" />
        <label htmlFor="number">Number</label>
        <Field id="number" type="tel" name="number"></Field>
        <ErrorMessage component="span" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
