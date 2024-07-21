import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const END_POINT = "/photos";
const API_KEY = "?client_id=Go226QvQvgbGm-oUywR6xLvY6paUXF6EogrHdg7-WkE";

export const fetchImages = async () => {
  const response = await axios.get(`${BASE_URL}${END_POINT}${API_KEY}`);
  return response.data;
};
