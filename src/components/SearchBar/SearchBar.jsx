import React from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Form, Field, Formik } from "formik";

const SearchBar = ({ setQuery }) => {
  const initialValues = { query: "" };
  const handleSubmit = (values) => {
    setQuery(values.query);
  };
  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   const { value } = e.target.elements.search;

  //   console.log(value);
  //   if (!value) {
  //     return toast.error("This didn't work.");
  //   }
  //   onSubmit(value);
  //   form.reset();

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            placeholder="Enter search images or photos"
            type="search"
          />

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
