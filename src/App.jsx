import React, { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
// import { fetchImages } from "./services/api";
// import Loader from "./components/Loader/Loader";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import { Toaster } from "react-hot-toast";

const App = () => {
  const [results, setResults] = useState([]);
  // const [query, setQuery] = useState("car");
  // const [pictures, setPictures] = useState([]);
  // const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [fetchPhotos, setFetchPhotos] = useState([]);

  // const handleSubmit = (value) => {
  //   setFetchPhotos(value);
  //   setImages([]);
  //   setPage(1);
  // };

  useEffect(() => {
    // const getData = async () => {
    // if (!query) return;
    // try {
    // setIsLoading(true);
    // setIsError(false);

    axios
      .get(
        "https://api.unsplash.com/photos?client_id=Go226QvQvgbGm-oUywR6xLvY6paUXF6EogrHdg7-WkE"
      )
      .then((res) => setResults(res.data))
      .catch();

    // console.log(response.data);
    // setFetchPhotos(response);
    // } catch (error) {
    //   setIsError(true);
    // } finally {
    //   setIsLoading(false);
    // }
    // getData();
    // };
  }, []);

  return (
    <div>
      <ImageGallery items={results} />
      {/* <SearchBar /> */}
      {/* {fetchPhotos.length > 0 && <ImageGallery items={foundPhotos} />}
      {isLoading && <Loader />} */}
      {/* <Toaster /> */}
      <button type="button">Load more</button>
    </div>
  );
};

export default App;
