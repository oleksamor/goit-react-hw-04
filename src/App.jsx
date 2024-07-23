import React, { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [foundPhotos, setFoundPhotos] = useState([]);
  const [query, setQuery] = useState("");
  // const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (value) => {
    setFoundPhotos(value);
    // setPictures([]);
    setPage(1);
  };

  useEffect(() => {
    async function fetchPhotos() {
      if (!query) return;
      try {
        const response = await fetchImages(query, page);
        setFoundPhotos(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPhotos();
  }, []);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {foundPhotos.length > 0 && <ImageGallery items={foundPhotos} />}
      {isLoading && <Loader />}
      <button type="button">Load more</button>
    </div>
  );
};

export default App;
