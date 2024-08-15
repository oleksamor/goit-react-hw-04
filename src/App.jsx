import React, { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";
// import SearchBar from "./components/SearchBar/SearchBar";

// import { fetchImages } from "./services/api";
// import Loader from "./components/Loader/Loader";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import { Toaster } from "react-hot-toast";
const App = () => {
  const [result, setResult] = useState([]);
  // const [query, setQuery] = useState("car");
  // const [pictures, setPictures] = useState([]);
  // const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [fetchPhotos, setFetchPhotos] = useState([]);

  // const handleSubmit = (value) => {
  //   setFetchPhotos(value);
  //   setImages([])
  //   setPage(1);
  // };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchImages("car", 4);
      console.log(response);
      setResult(response);
      // return response;
      // setFetchPhotos(response);
      // } catch (error) {
      //   setIsError(true);
      // } finally {
      //   setIsLoading(false);
      // }
    };
    fetchData();
  }, [result]);

  return (
    <div>
      {result.length > 0 && <ImageGallery items={result} />}
      {/* <SearchBar /> */}
      {/* {fetchPhotos.length > 0 && <ImageGallery items={foundPhotos} />}
      {isLoading && <Loader />} */}
      {/* <Toaster /> */}
      <button type="button">Load more</button>
    </div>
  );
};

export default App;
