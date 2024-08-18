import React, { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";

// import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import { Toaster } from "react-hot-toast";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
const App = () => {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  // const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [fetchPhotos, setFetchPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        if (query === "") {
          return;
        }
        const response = await fetchImages(query, page);
        console.log(query);
        setIsLoading(false);
        setResult((prev) => [...prev, ...response]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSetQuery = (query) => {
    setQuery(query);
    setResult([]);
    setPage(1);
  };
  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {query.length > 0 && <ImageGallery items={result} />}
      {isError && <ErrorMessage />}
      {/* {fetchPhotos.length > 0 && <ImageGallery items={foundPhotos} />} */}

      <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
    </div>
  );
};

export default App;
