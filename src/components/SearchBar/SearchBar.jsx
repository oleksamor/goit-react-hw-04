import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Form, Field, Formik } from "formik";

const SearchBar = ({ setQuery }) => {
  const initialValues = { query: "" };

  const handleSubmit = (values, { resetForm }) => {
    if (!values) {
      return toast.error("Please, enter a text to search for images");
    }
    setQuery(values.query);
    resetForm();
  };

  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            placeholder="Enter search images or photos"
            type="search"
            autoComplete="off"
            autoFocus
          />

          <button className={s.searchBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
