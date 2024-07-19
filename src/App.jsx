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
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {/* {foundPhotos.length > 0 && <ul>{foundPhotos.map({})}</ul>} */}
    </div>
  );
};

export default App;
