import axios from "axios";

export const fetchImages = async (query, per_page = 3) => {
  const accessKey = "Go226QvQvgbGm-oUywR6xLvY6paUXF6EogrHdg7-WkE";
  //   setIsLoading(true);
  //   setError(null);
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      params: {
        query,
        page: 1,
        per_page: per_page,
      },
    });

    console.log(response.data.results);
    // setImages((prev) => [...prev, ...response.data]);

    return response.data.results;
  } catch (error) {
    // setError("Error fetching images");
  } finally {
    // setIsLoading(false);
  }
};
