import React from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // const { value } = form.elements.search;
    const topic = form.elements.topic.value;
    console.log(topic);
    onSubmit(topic);
    form.reset();
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

        <button className={s.submitBtn} type="submit" onSubmit={formSubmit}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
