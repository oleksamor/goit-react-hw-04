import React, { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [total, setTotal] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        return;
      }
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await fetchImages(query, page);
        setIsLoading(false);
        setResult((prev) => [...prev, ...res.results]);
        // console.log(res.results);
        setTotal(res.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleSetQuery = (query) => {
    setQuery(query);
    setResult([]);
    setPage(1);
  };
  return (
    <div>
      <Toaster />
      <SearchBar setQuery={handleSetQuery} />
      {isError && <ErrorMessage />}
      {query.length > 0 && (
        <ImageGallery items={result} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {total > page && !isLoading && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
