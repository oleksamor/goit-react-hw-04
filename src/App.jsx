import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const BASE_URL = "https://api.unsplash.com";
  const END_POINT = "/photos";
  const API_KEY = "?client_id=Go226QvQvgbGm-oUywR6xLvY6paUXF6EogrHdg7-WkE";
  const [foundPhotos, setFoundPhotos] = useState([]);

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
      <h1>Founded Photos</h1>
      {foundPhotos.length > 0 && (
        <ul>
          {foundPhotos.map(({ id, urls, alt_description }) => (
            <li key={id}>
              <img src={urls.thumb} alt={alt_description} />
            </li>
          ))}
        </ul>
      )}
      ;
    </div>
  );
};

export default App;
