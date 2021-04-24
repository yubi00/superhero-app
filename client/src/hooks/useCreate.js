import { useMutation } from "react-query";
import { queryClient } from "..";
import { addToFavourites } from "../api/api";

export const useCreate = () => {
  return useMutation(addToFavourites, {
    onSuccess: () => {
      //refetch the favourites cache after success or failure
      queryClient.invalidateQueries("favourites");
    }
  });
};
