// import axios from "axios";

// export const fetchImages = async (query, page = 1, per_page = 5) => {
//   const accessKey = "Go226QvQvgbGm-oUywR6xLvY6paUXF6EogrHdg7-WkE";
//   // setIsLoading(true);
//   // setError(null);
//   try {
//     const response = await axios.get(
"https://api.unsplash.com/photos/?client_id=Go226QvQvgbGm-oUywR6xLvY6paUXF6EogrHdg7-WkE";
// {
// headers: {
//   Authorization: `Client-ID ${accessKey}`,
// },
//   params: {
//     query: query,
//     page,
//     per_page,
//   },
// }
// );

//   console.log(response.data);
//   setImages((prev) => [...prev, ...response.data]);

//   return response.data;
// } catch (error) {
//   setError("Error fetching images");
// } finally {
//   setIsLoading(false);
// }
// };
