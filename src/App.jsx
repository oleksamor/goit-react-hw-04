import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import SearchBar from "./components/SearchBar/SearchBar";

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
  //   setImages([])
  //   setPage(1);
  // }; `````

  useEffect(() => {
    const fetchData = async () => {
      const accessKey = "Go226QvQvgbGm-oUywR6xLvY6paUXF6EogrHdg7-WkE";
      const res = await axios.get("https://api.unsplash.com/photos", {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
        params: {
          query: query,
          page,
          per_page,
        },
      });
      console.log(res.results);
      setResults(res.results);

      // setFetchPhotos(response);
      // } catch (error) {
      //   setIsError(true);
      // } finally {
      //   setIsLoading(false);
      // }
      fetchData();
    };
  }, [results]);

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
