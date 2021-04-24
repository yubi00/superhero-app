import { useMutation } from "react-query";
import { queryClient } from "..";
import { updatePowerStats } from "../api/api";

export const useUpdate = () => {
  return useMutation(updatePowerStats, {
    onSuccess: (data) => {
      if (queryClient.getQueryData("favourites")) {
        queryClient.setQueryData("favourites", (old) => {
          return old.map((d) => {
            if (d.id === data.id) {
              return data;
            }
            return d;
          });
        });
      }

      queryClient.invalidateQueries("favourites");
    }
  });
};
