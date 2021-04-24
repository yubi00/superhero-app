import React from "react";
import { Container } from "reactstrap";
import { useFeaturedList } from "../../hooks/useFeaturedList";
import List from "../List/List";

const Favourites = () => {
  const { data, isLoading, isError, error } = useFeaturedList();

  if (isLoading) return <Container className='h1'>Loading...</Container>;
  if (isError) return <Container className='h1'>{error}</Container>;

  return (
    <div>
      <List
        isLoading={isLoading}
        error={error}
        isError={isError}
        data={data}
        type='favourites'
      />
    </div>
  );
};

export default Favourites;
