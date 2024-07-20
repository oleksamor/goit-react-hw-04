import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import Loader from "./components/Loader/Loader";

const App = () => {
  const BASE_URL = "https://api.unsplash.com";
  const END_POINT = "/photos";
  const API_KEY = "?client_id=Go226QvQvgbGm-oUywR6xLvY6paUXF6EogrHdg7-WkE";
  const [foundPhotos, setFoundPhotos] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);

  const handleSubmit = (value) => {
    setFoundPhotos(value);
    setPictures([]);
    setPage(1);
  };

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(`${BASE_URL}${END_POINT}${API_KEY}`);
      console.log(response);
      setFoundPhotos(response.data);
      console.log(foundPhotos);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <h1>Founded Photos</h1>
      {foundPhotos.length > 0 && <ImageGallery items={foundPhotos} />}
    </div>
  );
};

export default App;
