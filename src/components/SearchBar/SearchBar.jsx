import React from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { value } = form.elements.search;
    console.log(value);
    if (!value) {
      return toast.error("This didn't work.");
    }
    onSubmit(value);
    // form.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.form}>
        <input
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button className={s.submitBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
