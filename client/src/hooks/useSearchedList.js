import { useQuery } from "react-query";
import { fetchSearchedResults } from "../api/api";

export const useSearchedList = (name) => {
  return useQuery(["searchedlist", name], () => fetchSearchedResults(name), {
    refetchOnWindowFocus: false,
    enabled: !!name
  });
};
