import axios from "axios";

export const fetchImages = async (foundPhotos, page = 1, per_page = 5) => {
  const BASE_URL = "https://api.unsplash.com";
  const END_POINT = "/search/photos?";
  const accessKey = "Go226QvQvgbGm-oUywR6xLvY6paUXF6EogrHdg7-WkE";
  setIsLoading(true);
  setError(null);
  try {
    const response = await axios.get(`${BASE_URL}${END_POINT}`, {
      headers: {
        Authorization: `client_id= ${accessKey}`,
      },
      params: {
        query: foundPhotos,
        page,
        per_page,
      },
    });
    console.log(response.data);
    setImages((prev) => [...prev, ...response.data]);

    return response.data;
  } catch (error) {
    setError("Error fetching images");
  } finally {
    setIsLoading(false);
  }
};
