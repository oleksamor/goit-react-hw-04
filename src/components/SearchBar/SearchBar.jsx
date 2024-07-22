import React from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: "",
    page: 1,
  };

  const formSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const { value } = e.target.elements.search;

    onSubmit(value);
  };

  return (
    <form>
      <input
        type="search"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />

      <button type="submit" onSubmit={formSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
