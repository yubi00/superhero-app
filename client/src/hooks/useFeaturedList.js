import { useQuery } from "react-query";
import { fetchFavourites } from "../api/api";

export const useFeaturedList = () => {
  return useQuery("favourites", fetchFavourites);
};
