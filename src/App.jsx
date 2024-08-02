import React, { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [foundPhotos, setFoundPhotos] = useState("");
  const [query, setQuery] = useState("");
  // const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    setFoundPhotos("");
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    async function fetchPhotos() {
      if (!foundPhotos) return;
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetchImages(foundPhotos, page, 12);

        console.log(response);
        setFoundPhotos(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }

      fetchPhotos();
    }
  }, [foundPhotos, page]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {foundPhotos.length > 0 && <ImageGallery items={foundPhotos} />}
      {isLoading && <Loader />}
      <Toaster />
      <button type="button">Load more</button>
    </div>
  );
};

export default App;
