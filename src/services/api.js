import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const END_POINT = "/search/photos";
const API_KEY = "?client_id=Go226QvQvgbGm-oUywR6xLvY6paUXF6EogrHdg7-WkE";

export const fetchImages = async () => {
  setIsLoading(true);
  setError(null);
  try {
    const response = await axios.get(`${BASE_URL}${END_POINT}`, {
      params: {
        query,
        page,
        client_id: `${API_KEY}`,
      },
    });
    setImages((prev) => [...prev, ...response.data.results]);
  } catch (error) {
    setError("Error fetching images");
  } finally {
    setIsLoading(false);
  }
};
