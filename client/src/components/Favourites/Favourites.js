import React from "react";
import { useQuery } from "react-query";
import { fetchFavourites } from "../../api/api";
import List from "../List/List";

const Favourites = () => {
  const { data, isLoading, isError, error } = useQuery(
    "featured",
    fetchFavourites
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error}</p>;
  return (
    <div>
      <h1>Favourite SuperHeroes</h1>
      <List
        isLoading={isLoading}
        error={error}
        isError={isError}
        data={data}
        type='featured'
      />
    </div>
  );
};

export default Favourites;
