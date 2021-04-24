import { useMutation } from "react-query";
import { queryClient } from "..";
import { removeFromFavourites } from "../api/api";

export const useDelete = () => {
  return useMutation(removeFromFavourites, {
    onSuccess: () => {
      //refetch the favourites list after success or failure
      queryClient.invalidateQueries("favourites");
    }
  });
};
