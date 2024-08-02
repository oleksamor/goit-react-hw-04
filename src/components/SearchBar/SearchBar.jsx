import React from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Form, Field, Formik } from "formik";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {query}
  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   const { value } = e.target.elements.search;

  //   console.log(value);
  //   if (!value) {
  //     return toast.error("This didn't work.");
  //   }
  //   onSubmit(value);
  //   // form.reset();
  };

  return (
    <div>
      <Formik>
        <Form>
          <Field
            name="query"
            placeholder="Search images and photos"
            type="search"
          />

          <button className={s.submitBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
