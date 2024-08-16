import axios from "axios";

export const fetchImages = async (query, page, per_page) => {
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
        page: page,
        per_page: per_page,
      },
    });

    console.log(response.data.results);
    //

    return response.data.results;
  } catch (error) {
    // setError("Error fetching images");
  } finally {
    // setIsLoading(false);
  }
};
