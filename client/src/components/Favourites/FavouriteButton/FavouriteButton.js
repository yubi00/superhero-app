import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { addToFavourites, removeFromFavourites } from "../../../api/api";

const FavouriteButton = ({ type, superhero }) => {
  const queryClient = useQueryClient();
  const { isLoading, isError, error, mutate, isSuccess } = useMutation(
    type === "featured" ? removeFromFavourites : addToFavourites,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("featured");
      }
    }
  );

  const deleteSuperHero = () => {
    mutate(superhero.id);
  };

  const addSuperHero = () => {
    mutate(superhero);
  };

  return (
    <div>
      {isLoading ? (
        <p> Adding...</p>
      ) : isError ? (
        <p> {error.message} </p>
      ) : isSuccess ? (
        <p>Added...</p>
      ) : null}

      <button onClick={type === "featured" ? deleteSuperHero : addSuperHero}>
        {type === "featured" ? "Remove from fav" : "Add to favourties"}
      </button>
    </div>
  );
};

export default FavouriteButton;
