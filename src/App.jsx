import React, { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import Loader from "./components/Loader/Loader";

const App = () => {
  const [foundPhotos, setFoundPhotos] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);

  const handleSubmit = (value) => {
    setFoundPhotos(value);
    setPictures([]);
    setPage(1);
  };

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetchImages();
    }

    fetchPhotos();
  }, []);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {foundPhotos.length > 0 && <ImageGallery items={foundPhotos} />}
    </div>
  );
};

export default App;
