import React from "react";
import { useQuery } from "react-query";
import { Container } from "reactstrap";
import { fetchFavourites } from "../../api/api";
import List from "../List/List";

const Favourites = () => {
  const { data, isLoading, isError, error } = useQuery(
    "featured",
    fetchFavourites
  );

  if (isLoading) return <Container className='h1'>Loading...</Container>;
  if (isError) return <Container className='h1'>{error}</Container>;

  return (
    <div>
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
